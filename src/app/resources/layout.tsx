import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.resources.title,
  description: pageMetadata.resources.description,
  keywords: pageMetadata.resources.keywords,
  canonical: '/resources',
})

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
