import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.extend.title,
  description: pageMetadata.extend.description,
  keywords: pageMetadata.extend.keywords,
  canonical: '/extend',
})

export default function ExtendLayout({ children }: { children: React.ReactNode }) {
  return children
}
