export function TechStackTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
