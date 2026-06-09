import fs from 'fs'
import path from 'path'
import { cache } from 'react'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getContentPreview(content: string, maxLength: number = 200): string {
  const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '')

  let plainText = contentWithoutFrontmatter
    .replace(/^#{1,6}\s.+$/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/^\s*[-*+]\s/gm, '')
    .replace(/^\s*\d+\.\s/gm, '')
    .replace(/\n+/g, ' ')
    .trim()

  if (plainText.length > maxLength) {
    plainText = plainText.substring(0, maxLength).trim()
    const lastSpace = plainText.lastIndexOf(' ')
    // 0.8 threshold avoids breaking too far back when the truncation point lands mid-word
    if (lastSpace > maxLength * 0.8) {
      plainText = plainText.substring(0, lastSpace)
    }
    plainText += '...'
  }

  return plainText
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readTime?: string
  tags?: string[]
  draft?: boolean
}

function parsePost(slug: string, fileContents: string): BlogPost {
  const { data, content } = matter(fileContents)
  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || '',
    excerpt: data.excerpt || '',
    content,
    readTime: data.readTime,
    tags: data.tags || [],
    draft: data.draft || false,
  }
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      return parsePost(slug, fileContents)
    })
    .filter((post) => {
      if (process.env.NODE_ENV === 'production') {
        return !post.draft
      }
      return true
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const getPostBySlug = cache((slug: string): BlogPost | null => {
  try {
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
    const mdPath = path.join(postsDirectory, `${slug}.md`)

    let fileContents: string
    if (fs.existsSync(mdxPath)) {
      fileContents = fs.readFileSync(mdxPath, 'utf8')
    } else if (fs.existsSync(mdPath)) {
      fileContents = fs.readFileSync(mdPath, 'utf8')
    } else {
      return null
    }

    const post = parsePost(slug, fileContents)

    if (process.env.NODE_ENV === 'production' && post.draft) {
      return null
    }

    return post
  } catch (error) {
    console.error(`Failed to load post "${slug}":`, error)
    return null
  }
})

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.mdx?$/, ''))
}
