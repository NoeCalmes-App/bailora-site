import { stores } from '../config/site'

/**
 * Les deux boutons de téléchargement.
 *
 * TANT QU'UN LIEN MANQUE dans src/config/site.ts, le bouton garde l'icône de
 * son store mais dit « Bientôt disponible », le même mot pour les deux, et
 * jamais « Télécharger sur l'App Store » : on n'écrit pas une promesse que le
 * lien ne tient pas. Il n'a pas de href, pas de curseur de lien. Le jour où
 * l'app est publiée, coller l'adresse suffit.
 *
 * ICÔNE ET LIBELLÉ SUR LA MÊME LIGNE, CENTRÉS OPTIQUEMENT : `inline-flex` +
 * `items-center`, `line-height: 1`, l'icône en bloc qui ne rétrécit pas (règle
 * globale d'index.css) et le calage `.cale` sur le libellé. Inter étant
 * équilibrée, ce calage vaut zéro, mais il reste nommé au même endroit pour
 * tout le site.
 */
const AppleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
)

const GooglePlayIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
)

interface StoreButtonProps {
  href: string
  actif: string
  icone: React.ReactNode
  principal: boolean
  store: string
}

// Empilés sur téléphone, côte à côte dès 640 px : deux « Bientôt disponible »
// ne tiennent pas sur une ligne de 375 px, et un libellé raccourci
// (« App Store ») promettrait un lien qui n'existe pas encore.
const BASE =
  'inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-pill px-5 text-[15px] font-extrabold leading-none whitespace-nowrap transition-transform sm:w-auto sm:flex-1 md:flex-initial md:px-6'

function StoreButton({ href, actif, icone, principal, store }: StoreButtonProps) {
  const style = principal
    ? 'fond-marque text-accent-ink shadow-raised'
    : 'border border-line-strong bg-surface text-ink'
  if (!href) {
    return (
      <span className={`${BASE} ${style} cursor-default`} aria-disabled="true" title={`${store}, bientôt disponible`}>
        {icone}
        <span className="cale">Bientôt disponible</span>
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE} ${style} hover:-translate-y-0.5 active:translate-y-0`}
    >
      {icone}
      <span className="cale">{actif}</span>
    </a>
  )
}

export function StoreButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex w-full flex-col gap-3 sm:flex-row md:w-auto ${className}`}>
      <StoreButton store="App Store" href={stores.appStore} actif="Télécharger sur l'App Store" icone={<AppleIcon />} principal />
      <StoreButton store="Google Play" href={stores.googlePlay} actif="Disponible sur Google Play" icone={<GooglePlayIcon />} principal={false} />
    </div>
  )
}
