import { app } from '../config/site'

/**
 * LE SIGNE, copié de la maquette, jamais redessiné.
 *
 * « Le toit-clé » : le toit qui protège, la clé qui habite. Deux formes sur une
 * grille de 96, exactement les tracés de BailoraMockups.jsx. La tuile porte le
 * dégradé bordeaux de la marque et l'arrondi du masque d'icône iOS : c'est
 * l'icône de l'app, un objet, pas un texte, donc ses couleurs ne suivent rien.
 */
const TOIT = 'M48 8 86 39.5l-6.4 7.7L48 21.4 16.4 47.2 10 39.5Z'
const CLE =
  'M48 34a16 16 0 0 1 6.5 30.6V78a6.5 6.5 0 0 1-13 0V64.6A16 16 0 0 1 48 34Zm0 10.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z'

export function Mark({ size = 30, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="bailora-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5A2029" />
          <stop offset="55%" stopColor="#7A2E3A" />
          <stop offset="100%" stopColor="#B05A3E" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="8.95" fill="url(#bailora-mark)" />
      {/* Le logo occupe 22 des 40 unités de la tuile, centré, comme dans la maquette. */}
      <g transform="translate(9 9) scale(0.2683) translate(-7 -5)" fill="#FFFFFF">
        <path d={TOIT} />
        <path fillRule="evenodd" clipRule="evenodd" d={CLE} />
      </g>
    </svg>
  )
}

/** Le signe et le nom, côte à côte : l'en-tête et le pied de page. */
export function Logotype({ size = 30, className = '' }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={size} />
      <span className="cale text-[1.2rem] font-extrabold tracking-[-0.03em]">{app.nom}</span>
    </span>
  )
}
