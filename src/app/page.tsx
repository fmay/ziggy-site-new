import Hero from '@/app/(home)/Hero'
import HomeScrollList from '@/app/(home)/HomeScrollList'
import HomePricing from '@/app/(home)/HomePricing'


export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Hero />

      <HomeScrollList />

      <HomePricing />
    </div>
  )
}
