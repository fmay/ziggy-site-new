import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.privacy.title,
  description: pageMetadata.privacy.description,
  keywords: pageMetadata.privacy.keywords,
  canonical: '/privacy',
})

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
