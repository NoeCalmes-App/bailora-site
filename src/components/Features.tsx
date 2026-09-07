import { Building2, FileSpreadsheet, FileText, PenLine, Users, Wallet } from 'lucide-react'

/**
 * Ce que l'app fait, et rien de plus. Chaque carte correspond à une ligne du
 * cahier des charges et à un écran de la maquette : le site ne promet que ce
 * que le devis vend. AUCUN PRIX, aucune formule, aucune durée d'essai, alors
 * que la maquette en affiche : une page web se met à jour moins souvent qu'un
 * écran d'application, et le prix affiché dans l'app fait foi.
 */
const fonctionnalites = [
  {
    icone: Building2,
    titre: 'Tout votre patrimoine au même endroit',
    texte:
      "Vos SCI, vos logements, vos locataires et leurs baux, sur votre téléphone. En société ou en nom propre, chacun a sa porte. Fini le tableur, la boîte mail et le carton de justificatifs.",
  },
  {
    icone: Wallet,
    titre: 'Les loyers suivis, les retards en premier',
    texte:
      "Chaque mois, l'application vous pose la question qui compte : ce loyer est-il arrivé ? Vous confirmez d'un geste. Ce qui est en retard remonte en tête de liste, le reste attend son tour.",
  },
  {
    icone: FileText,
    titre: 'Dix documents produits, jamais ressaisis',
    texte:
      "La quittance, l'avis d'échéance, la régularisation des charges, la révision de loyer, l'attestation, la relance, la mise en demeure, la restitution du dépôt. Préremplis depuis vos données, vérifiés avant envoi.",
  },
  {
    icone: PenLine,
    titre: "L'état des lieux signé du doigt",
    texte:
      "Pièce par pièce, photos horodatées, relevés de compteurs et clés remises. À la sortie, les photos d'entrée et de sortie se comparent côte à côte, et les deux parties signent sur l'écran.",
  },
  {
    icone: FileSpreadsheet,
    titre: "Le dossier annuel de l'expert-comptable",
    texte:
      "Les dépenses se photographient et se classent au fil de l'année. En fin d'exercice, les recettes, le bilan et les justificatifs partent en un seul geste, datés et rangés.",
  },
  {
    icone: Users,
    titre: "L'espace de vos locataires",
    texte:
      "Invité par e-mail, votre locataire consulte son loyer, retrouve son bail et télécharge ses quittances sans jamais les réclamer. En lecture seule, toujours.",
  },
]

export function Features() {
  return (
    <section className="bg-bg" id="fonctionnalites">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="cale text-[13px] font-bold tracking-[0.14em] text-accent uppercase">Fonctionnalités</p>
          <h2 className="mt-3 font-display text-[2.1rem] leading-[1.08] font-bold tracking-[-0.015em] text-balance md:text-[2.7rem]">
            Ce que Bailora fait à votre place.
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-3">
          {fonctionnalites.map(({ icone: Icone, titre, texte }) => (
            <li key={titre} className="rounded-card border border-line bg-surface p-6 shadow-raised">
              <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-accent text-accent-ink" aria-hidden="true">
                <Icone size={22} strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 text-[18px] leading-tight font-extrabold tracking-[-0.02em]">{titre}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
