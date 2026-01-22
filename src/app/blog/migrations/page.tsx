import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import path from 'path'

export default function Migrations() {
  const markdownPath = path.join(process.cwd(), 'src/app/blog/migrations.md')
  const markdownContent = fs.readFileSync(markdownPath, 'utf-8')

  return (
    <PageLayout
      title="Data Migrations"
      description="How Ziggy handles data migrations with precision and reliability.">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </PageLayout>
  )
}
