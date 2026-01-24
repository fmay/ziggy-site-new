import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import fs from 'fs'
import path from 'path'
import TableOfContents from '@/components/ui/TableOfContents'
import { slugify } from '@/lib/utils'
import { ReactNode } from 'react'

function getTextContent(children: ReactNode): string {
  if (typeof children === 'string') return children
  if (typeof children === 'number') return String(children)
  if (Array.isArray(children)) return children.map(getTextContent).join('')
  if (children && typeof children === 'object' && 'props' in children) {
    const element = children as { props: { children?: ReactNode } }
    return getTextContent(element.props.children)
  }
  return ''
}

export default function IOT() {
  const markdownPath = path.join(process.cwd(), 'src/app/blog/iot/iot.md')
  const markdownContent = fs.readFileSync(markdownPath, 'utf-8')

  return (
    <PageLayout
      title="Messaging - Internet of Things"
      description="Using Ziggy Messaging to process MQTT brokered device messages and send messages to devices"
      image="/blog/iot/iot-hero.webp"
      style="blog"
    >
      <div className="max-w-6xl mx-auto flex gap-8">
        {/* TOC - left side, desktop only */}
        <aside className="hidden lg:block w-64 shrink-0">
          <TableOfContents markdown={markdownContent} />
        </aside>

        {/* Content - right side */}
        <div className="flex-1 max-w-4xl prose prose-lg">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({ children }) => (
                  <h2 id={slugify(getTextContent(children))}>{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 id={slugify(getTextContent(children))}>{children}</h3>
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
