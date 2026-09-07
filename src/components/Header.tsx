import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { app } from '../config/site'
import { Logotype } from './Mark'

const liens = [
  { label: 'Support', path: '/support' },
  { label: 'Confidentialité', path: '/confidentialite' },
  { label: 'CGU', path: '/cgu' },
]

export function Header() {
  const [ouvert, setOuvert] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link to="/" aria-label={`${app.nom}, accueil`} className="text-ink" onClick={() => setOuvert(false)}>
          <Logotype />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
          {liens.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`cale text-[15px] font-semibold transition-colors ${pathname === l.path ? 'text-ink' : 'text-ink-2 hover:text-ink'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOuvert(o => !o)}
          aria-expanded={ouvert}
          aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="flex h-10 w-10 items-center justify-center rounded-control text-ink md:hidden"
        >
          {ouvert ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {ouvert && (
        <nav className="border-t border-line bg-bg px-5 py-3 md:hidden" aria-label="Navigation mobile">
          <ul className="flex flex-col">
            {liens.map(l => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  onClick={() => setOuvert(false)}
                  className={`cale block rounded-control px-3 py-3 text-[15px] font-semibold ${pathname === l.path ? 'bg-surface-2 text-ink' : 'text-ink-2'}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
