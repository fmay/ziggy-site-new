import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.cookies.title,
  description: pageMetadata.cookies.description,
  keywords: pageMetadata.cookies.keywords,
  canonical: '/cookies',
})

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
