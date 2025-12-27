import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.aiFeatures.title,
  description: pageMetadata.aiFeatures.description,
  keywords: pageMetadata.aiFeatures.keywords,
  canonical: '/ai-features',
})

export default function AIFeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
