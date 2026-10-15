import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CreatorMarquee from '@/components/CreatorMarquee'
import Kategori from '@/components/Kategori'
import CaraKerja from '@/components/CaraKerja'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import AuthModal from '@/components/AuthModal'
import { SearchProvider } from '@/lib/search-store'
import { AuthProvider } from '@/lib/auth-store'

export default function Home() {
  return (
    <AuthProvider>
      <main>
        <Navigation />
        <SearchProvider>
          <Hero />
          <Kategori />
        </SearchProvider>
        <CreatorMarquee />
        <CaraKerja />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
        <AuthModal />
      </main>
    </AuthProvider>
  )
}
