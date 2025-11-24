import { Suspense } from 'react'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedPosts } from '@/components/sections/featured-posts'
import { CategoryGrid } from '@/components/sections/category-grid'
import { RecentPosts } from '@/components/sections/recent-posts'
import { NewsletterSection } from '@/components/sections/newsletter-section'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { StructuredData } from '@/components/seo/structured-data'
import { generateSEO, generateStructuredData, generateBreadcrumbSchema } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEO({
  title: 'TechReview Pro - Digital Product Reviews & Affiliate Marketing',
  description: 'Honest, in-depth reviews of digital products, software, and online courses. Make informed decisions with our expert analysis and community insights.',
  keywords: ['digital product reviews', 'affiliate marketing', 'software reviews', 'online courses', 'tech reviews', 'product comparisons'],
  type: 'website'
})

const structuredData = generateStructuredData({
  title: 'TechReview Pro - Digital Product Reviews & Affiliate Marketing',
  description: 'Honest, in-depth reviews of digital products, software, and online courses. Make informed decisions with our expert analysis and community insights.',
  url: 'https://techreviewpro.com',
  type: 'website'
})

const breadcrumbData = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://techreviewpro.com' }
])

export default function Home() {
  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={breadcrumbData} />
      <div className="min-h-screen bg-background">
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
          <FeaturedPosts />
          <CategoryGrid />
          <RecentPosts />
          <NewsletterSection />
        </Suspense>
      </div>
    </>
  )
}