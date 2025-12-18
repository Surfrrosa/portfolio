import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

// Helper function to extract plain text preview from markdown content
export function getContentPreview(content: string, maxLength: number = 200): string {
  // Remove markdown frontmatter if it exists
  const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '')

  // Remove markdown syntax (headers, bold, italic, links, etc)
  let plainText = contentWithoutFrontmatter
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links but keep text
    .replace(/`(.+?)`/g, '$1') // Remove inline code
    .replace(/^\s*[-*+]\s/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s/gm, '') // Remove numbered list markers
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()

  // Truncate to maxLength and add ellipsis
  if (plainText.length > maxLength) {
    plainText = plainText.substring(0, maxLength).trim()
    // Try to break at last complete word
    const lastSpace = plainText.lastIndexOf(' ')
    if (lastSpace > maxLength * 0.8) { // Only break at word if it's not too far back
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

export function getAllPosts(): BlogPost[] {
  // Create directory if it doesn't exist
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
      } as BlogPost
    })
    // Filter out drafts in production
    .filter((post) => {
      if (process.env.NODE_ENV === 'production') {
        return !post.draft
      }
      return true // Show drafts in development
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    // Try .mdx first, then .md
    let fileContents: string
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`)
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, 'utf8')
      } else {
        return null
      }
    }

    const { data, content } = matter(fileContents)

    const post = {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
      readTime: data.readTime,
      tags: data.tags || [],
      draft: data.draft || false,
    }

    // Don't return draft posts in production
    if (process.env.NODE_ENV === 'production' && post.draft) {
      return null
    }

    return post
  } catch (error) {
    return null
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.mdx?$/, ''))
}
