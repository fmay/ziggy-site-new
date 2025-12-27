import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.developers.title,
  description: pageMetadata.developers.description,
  keywords: pageMetadata.developers.keywords,
  canonical: '/developers',
})

export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
  return children
}
