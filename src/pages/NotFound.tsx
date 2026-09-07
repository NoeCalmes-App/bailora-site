import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta('Page introuvable')
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
        <p className="cale text-[13px] font-bold tracking-[0.14em] text-accent uppercase">Erreur 404</p>
        <h1 className="mt-3 font-display text-[2.1rem] font-bold tracking-[-0.015em] md:text-[2.7rem]">
          Cette page n'existe pas.
        </h1>
        <p className="mt-4 text-ink-2">Le lien est peut-être ancien, ou l'adresse comporte une faute.</p>
        <Link to="/" className="cale fond-marque mt-8 inline-flex h-12 items-center rounded-pill px-6 font-extrabold text-accent-ink shadow-raised">
          Retour à l'accueil
        </Link>
      </main>
      <Footer />
    </div>
  )
}
