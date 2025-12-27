import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.demo.title,
  description: pageMetadata.demo.description,
  keywords: pageMetadata.demo.keywords,
  canonical: '/demo',
})

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
