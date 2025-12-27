import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.features.title,
  description: pageMetadata.features.description,
  keywords: pageMetadata.features.keywords,
  canonical: '/features',
})

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
