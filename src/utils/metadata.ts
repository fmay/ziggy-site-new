import { Metadata } from 'next'
import { siteConfig } from '@/config/seo.config'

interface MetadataParams {
  title: string
  description: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
  canonical?: string
}

export function generateMetadata({
  title,
  description,
  keywords,
  image = siteConfig.ogImage,
  noIndex = false,
  canonical,
}: MetadataParams): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`
  const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : undefined

  return {
    title,
    description,
    keywords,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || siteConfig.url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@ziggyservices',
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}
