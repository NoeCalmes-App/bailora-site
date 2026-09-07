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
  description:
    "Bailora regroupe vos SCI, vos biens, vos locataires et vos baux sur votre téléphone. Les loyers se suivent, les quittances et les courriers se produisent depuis vos données, et l'état des lieux se signe du doigt.",
  /** Une phrase pour les moteurs de recherche et les réseaux (moins de 160 caractères). */
  metaDescription:
    "Bailora, l'application qui réunit vos SCI, vos biens et vos locataires sur votre téléphone : loyers suivis, quittances produites, états des lieux signés.",
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
 * ⚠️ TROIS VALEURS MANQUENT ENCORE, et le site n'est pas publiable sans elles.
 * Nowork ne les a pas (la fiche client n'a ni société, ni SIRET, ni adresse).
 * Les remplir ici suffit : la page Mentions légales et le pied de page les
 * affichent, et les avertissements jaunes disparaissent tout seuls.
 *
 * Où les trouver : Pappers ou societe.com, à partir du nom du représentant.
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

// Pas de `as const` ici, volontairement : plusieurs champs sont encore vides,
// et un littéral figé les typerait à la chaîne vide. Le site cesserait alors
// de compiler dès qu'il teste `if (editeur.siren)`, exactement le test qui
// fait apparaître les repères jaunes.
export const editeur: Editeur = {
  nomLegal: 'Sofiane Moussaoui',
  formeJuridique: '',
  nomCommercial: 'Bailora',
  siren: '',
  siret: '',
  adresse: '',
  /** Société uniquement. Laisser vide pour un entrepreneur individuel. */
  capitalSocial: '',
  villeRcs: '',
  tvaIntracommunautaire: '',
  telephone: '+33 6 52 69 03 02',
  directeurPublication: 'Sofiane Moussaoui',
  /** Date de la dernière mise à jour des pages légales (affichée). */
  miseAJourLegale: '6 septembre 2026',
}

export const hebergeur = {
  nom: 'GitHub, Inc.',
  adresse: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
  service: 'GitHub Pages',
  site: 'https://github.com',
} as const
