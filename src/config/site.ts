// TOUT CE QUI VARIE VIT ICI, ET NULLE PART AILLEURS.
//
// Le nom, l'e-mail, l'éditeur légal, les liens des stores : chaque composant et
// chaque page lit ce fichier. Le jour où l'app est publiée, on colle les deux
// liens ci-dessous et les boutons « Bientôt disponible » deviennent de vrais
// boutons de téléchargement, sans toucher à un composant.
//
// Le DOMAINE, lui, ne vit pas ici : il est dans public/CNAME (le fichier que
// GitHub Pages lit) et arrive par VITE_SITE_URL (voir vite.config.ts).

export const SITE_URL: string = import.meta.env.VITE_SITE_URL ?? 'https://bailora-app.fr'

export const app = {
  nom: 'Bailora',
  /** La promesse, telle qu'elle est écrite sur l'écran d'accueil de l'app. */
  accroche: ['Vos SCI,', 'enfin simples.'],
  /**
   * Le sous-titre du hero. COURT, ET SANS JARGON : « SCI » et « baux » ne
   * parlent qu'à ceux qui les emploient déjà, alors que cette phrase est la
   * plus lue de tout le site. Elle dit d'abord le problème, puis qui le règle.
   */
  description:
    "Louer un logement, c'est suivre les loyers, envoyer les quittances et garder chaque papier. Bailora fait tout ça depuis votre téléphone.",
  /** Une phrase pour les moteurs de recherche et les réseaux (moins de 160 caractères). */
  metaDescription:
    "Bailora suit vos loyers, prépare vos quittances et vos courriers et garde vos états des lieux. Toute la gestion de vos locations, sur votre téléphone.",
  plateformes: 'iOS et Android',
} as const

export const contact = {
  /**
   * Adresse publique : pied de page, mentions légales, support, stores.
   * C'est aussi celle du dossier Apple Developer, sur le domaine de l'app.
   */
  email: 'contact@bailora-app.fr',
  /** Délai annoncé sur la page support. */
  delaiReponse: '2 jours ouvrés',
} as const

/**
 * Liens vers les fiches des stores. VIDES tant que l'app n'est pas publiée :
 * les boutons affichent alors « Bientôt disponible », désactivés, avec
 * l'icône du store. Coller l'adresse ici suffit.
 */
export const stores: { appStore: string; googlePlay: string } = {
  appStore: '',
  googlePlay: '',
}

/**
 * L'ÉDITEUR LÉGAL. C'est ce bloc que le pied de page et la page Mentions
 * légales affichent, et c'est ce qu'Apple vérifie pour associer ce domaine à
 * l'entité qui publie l'app : le nom au registre, jamais le nom commercial.
 *
 * RELEVÉ AU REGISTRE le 19 octobre 2026 (societe.com, source RNE) : BAILORA,
 * SARL créée le 14 octobre 2026, gérant Sofiane Moussaoui. Une valeur qui
 * manque s'affiche en jaune sur la page Mentions légales et dans le pied de
 * page : le site n'est pas publiable tant qu'il en reste une.
 *
 * Où les trouver : Pappers ou societe.com, à partir du nom de la société.
 *   formeJuridique : « Entrepreneur individuel », « SASU », « SARL »…
 *   siren / siret  : 9 et 14 chiffres.
 *   adresse        : l'adresse du siège, telle qu'elle est au registre.
 * Si c'est une SOCIÉTÉ (et non un entrepreneur individuel), remplir AUSSI
 * capitalSocial, villeRcs et, s'il existe, tvaIntracommunautaire : ces trois
 * mentions sont obligatoires pour une société et le site les affichera.
 */
interface Editeur {
  nomLegal: string
  formeJuridique: string
  nomCommercial: string
  siren: string
  siret: string
  adresse: string
  capitalSocial: string
  villeRcs: string
  tvaIntracommunautaire: string
  telephone: string
  directeurPublication: string
  miseAJourLegale: string
}

// Pas de `as const` ici, volontairement : un champ vidé un jour serait typé à
// la chaîne vide, et le site cesserait de compiler dès qu'il teste
// `if (editeur.siren)`, exactement le test qui fait apparaître les repères
// jaunes.
export const editeur: Editeur = {
  /** La dénomination au registre. */
  nomLegal: 'BAILORA',
  /** Écrite en toutes lettres : les pages l'affichent en minuscules. */
  formeJuridique: 'Société à responsabilité limitée',
  nomCommercial: 'Bailora',
  siren: '131 157 885',
  siret: '131 157 885 00016',
  adresse: '66 avenue des Champs-Élysées, 75008 Paris',
  /** Société uniquement. Laisser vide pour un entrepreneur individuel. */
  capitalSocial: '1 000 €',
  villeRcs: 'Paris',
  tvaIntracommunautaire: 'FR54131157885',
  telephone: '+33 6 52 69 03 02',
  directeurPublication: 'Sofiane Moussaoui, gérant',
  /** Date de la dernière mise à jour des pages légales (affichée). */
  miseAJourLegale: '19 octobre 2026',
}

export const hebergeur = {
  nom: 'GitHub, Inc.',
  adresse: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
  service: 'GitHub Pages',
  site: 'https://github.com',
} as const
