import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.solutions.title,
  description: pageMetadata.solutions.description,
  keywords: pageMetadata.solutions.keywords,
  canonical: '/solutions',
})

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
