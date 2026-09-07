import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { app, SITE_URL } from '../config/site'

/**
 * Le titre, la description et le lien canonique de la page courante.
 *
 * POURQUOI CE HOOK EXISTE. Le site est une application à une seule page, et le
 * post-build recopie LA MÊME coquille index.html sur chaque route. Sans lui,
 * /mentions-legales, /confidentialite, /cgu, /support et /supprimer-compte
 * serviraient tous le titre, la description et le canonique de l'accueil :
 * dans l'onglet, dans l'historique, et dans les résultats de recherche. Ce
 * sont précisément les pages qu'Apple et Google viennent lire.
 *
 * LE CANONIQUE SUIT LA ROUTE. Figé sur l'accueil, il dirait à Google que les
 * cinq pages légales sont des doublons de l'accueil, alors que le sitemap du
 * même build les y pousse. Les deux se contrediraient, et c'est le canonique
 * qui gagne.
 */
/**
 * LE CHEMIN CANONIQUE, TOUJOURS AVEC SA BARRE FINALE.
 *
 * GitHub Pages sert chaque page légale depuis un dossier, donc /cgu répond 301
 * vers /cgu/. Sans cette normalisation, la même page annonçait deux canoniques
 * différents selon la porte d'entrée : /cgu/ quand on ouvre l'adresse
 * directement (ce que font Apple et Google), /cgu quand on clique le lien du
 * pied de page. Deux adresses pour une page, c'est le doublon qu'un canonique
 * existe précisément pour éviter.
 */
export function urlCanonique(pathname: string): string {
  if (pathname === '/') return '/'
  return pathname.endsWith('/') ? pathname : `${pathname}/`
}

export function usePageMeta(titre: string | null, description?: string) {
  const { pathname } = useLocation()
  useEffect(() => {
    // Le séparateur est le point médian, celui de la maquette (« Bailora ·
    // MOB-2026-157 », « Reçu le 3 »), et jamais le tiret cadratin : il est
    // banni de tous les textes du site, titre d'onglet et résultats de
    // recherche compris.
    document.title = titre ? `${titre} · ${app.nom}` : `${app.nom} · ${app.accroche.join(' ')}`
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description ?? app.metaDescription
    const canonique = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonique) canonique.href = `${SITE_URL}${urlCanonique(pathname)}`
    window.scrollTo({ top: 0 })
  }, [titre, description, pathname])
}
