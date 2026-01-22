'use client'

import { slugify } from '@/lib/utils'

interface TOCItem {
  text: string
  slug: string
  level: 2 | 3
}

function extractHeadings(markdown: string): TOCItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings: TOCItem[] = []
  let match

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length as 2 | 3
    const text = match[2].trim()
    headings.push({
      text,
      slug: slugify(text),
      level,
    })
  }

  return headings
}

interface TableOfContentsProps {
  markdown: string
}

export default function TableOfContents({ markdown }: TableOfContentsProps) {
  const headings = extractHeadings(markdown)

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className="toc sticky top-[120px]">
      <h4 className="text-sm font-semibold text-[var(--dark-text)] mb-4">Contents</h4>
      <ul className="space-y-1">
        {headings.map((heading, index) => (
          <li key={index} className={heading.level === 3 ? 'toc-h3' : ''}>
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
