import { Link } from 'react-router-dom'
import { app, contact, editeur } from '../config/site'
import { Logotype } from './Mark'
import { ACompleter } from './LegalLayout'

const liens = [
  { label: 'Mentions légales', path: '/mentions-legales' },
  { label: 'Confidentialité', path: '/confidentialite' },
  { label: 'CGU', path: '/cgu' },
  { label: 'Support', path: '/support' },
  { label: 'Supprimer mon compte', path: '/supprimer-compte' },
]

/**
 * Le pied de page nomme l'ÉDITEUR LÉGAL. Ce n'est pas de la décoration : c'est
 * ce qui associe ce domaine à l'entité qui publie l'app, ce qu'Apple vérifie
 * pour le compte développeur en organisation, et ce que la loi française
 * demande à tout site professionnel. Le détail complet est sur la page
 * Mentions légales.
 */
export function Footer() {
  const annee = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link to="/" aria-label={`${app.nom}, accueil`} className="text-ink">
            <Logotype />
          </Link>
          <nav aria-label="Pied de page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
              {liens.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="cale font-semibold text-ink-2 transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-[13px] leading-relaxed text-ink-2">
          <p>
            {app.nom} est une application éditée par {editeur.nomLegal},{' '}
            {editeur.formeJuridique ? editeur.formeJuridique.toLowerCase() : <ACompleter>forme juridique</ACompleter>}, SIREN{' '}
            {editeur.siren || <ACompleter>SIREN</ACompleter>}. Contact :{' '}
            <a href={`mailto:${contact.email}`} className="font-semibold text-ink underline-offset-2 hover:underline">
              {contact.email}
            </a>
          </p>
          <p className="mt-1.5 text-ink-3">
            © {annee} {editeur.nomLegal}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
