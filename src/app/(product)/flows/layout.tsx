import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.flows.title,
  description: pageMetadata.flows.description,
  keywords: pageMetadata.flows.keywords,
  canonical: '/flows',
})

export default function FlowsLayout({ children }: { children: React.ReactNode }) {
  return children
}
