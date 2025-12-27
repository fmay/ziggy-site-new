import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.platform.title,
  description: pageMetadata.platform.description,
  keywords: pageMetadata.platform.keywords,
  canonical: '/platform',
})

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return children
}
