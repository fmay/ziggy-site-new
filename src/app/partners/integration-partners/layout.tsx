import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.integrationPartners.title,
  description: pageMetadata.integrationPartners.description,
  keywords: pageMetadata.integrationPartners.keywords,
  canonical: '/integration-partners',
})

export default function IntegrationPartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
