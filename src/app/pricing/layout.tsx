import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.pricing.title,
  description: pageMetadata.pricing.description,
  keywords: pageMetadata.pricing.keywords,
  canonical: '/pricing',
})

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
