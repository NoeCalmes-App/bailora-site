import { PhoneFrame } from './PhoneFrame'
import tableauDeBord from '../assets/screens/tableau-de-bord.webp'
import suiviDesLoyers from '../assets/screens/suivi-des-loyers.webp'
import etatDesLieux from '../assets/screens/etat-des-lieux.webp'

/**
 * « Découvrez l'app » : TROIS écrans capturés sur la maquette, et jamais celui
 * du hero. Le tableau de bord d'abord, parce que c'est lui qui porte la
 * valeur : une seule question posée, une décision par jour. Puis le suivi des
 * loyers, l'écran le plus ouvert du mois, et l'état des lieux signé.
 *
 * LES TROIS FONT LA MÊME HAUTEUR D'ÉCRAN, 704 px, ce qui aligne la rangée au
 * pixel. C'est le tableau de bord qui la fixe, une fois retirée sa ligne
 * « Assurance à renouveler » ; les deux autres écrans ont moins de contenu et
 * gagnent donc du vide en bas, ce qu'afficherait un téléphone plus haut. Rien
 * n'est coupé, rien n'est déformé.
 *
 * LE SUIVI DES LOYERS NE MONTRE QUE DEUX LOCATAIRES, sur les cinq de la
 * maquette : Mehdi, en retard, et Sarah, qui a payé. Les deux états qui
 * comptent, et la note du bas parle justement de Sarah. Trois photographies de
 * figurants en moins sur un site public. Ce retrait se fait À LA CAPTURE, la
 * maquette n'est pas touchée.
 *
 * Chaque <li> est un CONTENEUR (container-type) : le téléphone prend sa
 * largeur en `cqw`. Un conteneur ne tire plus sa largeur de son contenu, donc
 * le <li> porte la sienne explicitement sur téléphone (236 px).
 */
const ecrans = [
  {
    src: tableauDeBord,
    titre: 'Tableau de bord',
    sous: 'Le loyer à confirmer, en premier',
    alt: "Tableau de bord de Bailora : les loyers de juillet encaissés, une question à confirmer d'un geste et les échéances proches",
  },
  {
    src: suiviDesLoyers,
    titre: 'Suivi des loyers',
    sous: 'Qui a payé, qui a du retard',
    alt: "Suivi des loyers de Bailora : le montant encaissé du mois, un loyer en retard depuis 18 jours et un loyer reçu, avec la quittance déjà prête",
  },
  {
    src: etatDesLieux,
    titre: 'État des lieux',
    sous: 'Entrée et sortie comparées, signées du doigt',
    alt: "État des lieux de Bailora : les photos d'entrée et de sortie côte à côte, la différence constatée et les deux signatures horodatées",
  },
]

export function Screenshots() {
  return (
    <section className="bg-bg-deep" id="decouvrir">
      <div className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
        <div className="max-w-2xl">
          <p className="cale text-[13px] font-bold tracking-[0.14em] text-accent uppercase">Découvrez l'app</p>
          <h2 className="mt-3 font-display text-[2.1rem] leading-[1.08] font-bold tracking-[-0.015em] text-balance md:text-[2.7rem]">
            Trois écrans, du loyer encaissé aux clés rendues.
          </h2>
        </div>
      </div>
      {/* Le padding latéral est porté par la liste elle-même, pour que le
          défilement aille jusqu'au bord de l'écran sur téléphone. */}
      <ul className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto px-5 pt-10 pb-16 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-8 md:pt-14 md:pb-24 lg:px-24">
        {ecrans.map(({ src, titre, sous, alt }) => (
          <li key={titre} className="w-[min(236px,64vw)] shrink-0 snap-center [container-type:inline-size] md:w-auto md:shrink">
            <PhoneFrame src={src} variante="galerie" alt={alt} />
            <h3 className="cale mt-4 text-[15px] font-extrabold">{titre}</h3>
            <p className="text-[13px] text-ink-2">{sous}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
