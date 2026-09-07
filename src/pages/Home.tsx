import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Screenshots } from '../components/Screenshots'
import { Cta } from '../components/Cta'
import { Footer } from '../components/Footer'
import { usePageMeta } from '../lib/usePageMeta'

export default function Home() {
  usePageMeta(null)
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
