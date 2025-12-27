import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.signin.title,
  description: pageMetadata.signin.description,
  keywords: pageMetadata.signin.keywords,
  canonical: '/signin',
  noIndex: true, // Don't index login pages
})

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return children
}
