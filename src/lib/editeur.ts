/**
 * CE QUE LA FORME JURIDIQUE CHANGE DANS LES MENTIONS LÉGALES.
 *
 * Un entrepreneur individuel se déclare avec nom, SIREN, SIRET et adresse.
 * Une SOCIÉTÉ doit en plus afficher son capital social, la ville de son RCS
 * d'immatriculation et son numéro de TVA intracommunautaire s'il existe
 * (code de commerce, art. R.123-237). Publier la liste courte pour une
 * société donne des mentions incomplètes sur la page dont le seul rôle est
 * de prouver que l'entité est bien derrière ce domaine.
 *
 * On ne devine pas : tant que la forme juridique n'est pas renseignée, le
 * site le signale au lieu de choisir une liste au hasard.
 */
const FORMES_INDIVIDUELLES = ['entrepreneur individuel', 'ei', 'eirl', 'auto-entrepreneur', 'micro-entrepreneur']

export function estSociete(formeJuridique: string): boolean {
  const f = formeJuridique.trim().toLowerCase()
  if (!f) return false
  return !FORMES_INDIVIDUELLES.includes(f)
}

/** La forme juridique est-elle connue ? Rien ne se déduit d'une chaîne vide. */
export function formeConnue(formeJuridique: string): boolean {
  return formeJuridique.trim().length > 0
}
