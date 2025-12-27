import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.cluster.title,
  description: pageMetadata.cluster.description,
  keywords: pageMetadata.cluster.keywords,
  canonical: '/cluster',
})

export default function ClusterLayout({ children }: { children: React.ReactNode }) {
  return children
}
