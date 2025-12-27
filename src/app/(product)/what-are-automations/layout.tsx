import { Metadata } from 'next'
import { generateMetadata } from '@/utils/metadata'
import { pageMetadata } from '@/config/seo.config'

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.whatAreAutomations.title,
  description: pageMetadata.whatAreAutomations.description,
  keywords: pageMetadata.whatAreAutomations.keywords,
  canonical: '/what-are-automations',
})

export default function WhatAreAutomationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
