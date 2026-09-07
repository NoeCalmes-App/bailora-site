/**
 * Un écran de l'app dans son téléphone.
 *
 * Le châssis est dessiné en CSS (classe `.phone`, index.css) : son dégradé et
 * ses arrondis restent nets sur un écran Retina comme sur un 1×. Seul l'écran
 * est une image, capturée à ×3 sur la maquette, sans le châssis. La taille se
 * nomme par son emploi (`hero`, `galerie`), jamais en pixels dans un composant.
 * Les quatre images font 50 à 88 Ko : c'est le cœur de la page, pas un poids
 * à différer.
 */
export function PhoneFrame({
  src,
  alt,
  variante,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  variante: 'hero' | 'galerie'
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`phone phone-${variante} ${className}`}>
      <img
        src={src}
        width={915}
        height={2115}
        alt={alt}
        loading="eager"
        fetchPriority={priority ? 'high' : undefined}
      />
    </div>
  )
}
