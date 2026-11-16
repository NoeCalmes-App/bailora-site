import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Building2 } from 'lucide-react'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact, editeur } from '../config/site'

/**
 * LA PAGE DE L'ORGANISATION, pas celle du produit.
 *
 * Le 16/11/2026, l'Assistance au Développement d'Apple (dossier
 * 30000017095271, inscription 5Y346QH23G) a écrit que bailora-app.fr/support
 * « n'est pas un site à propos de la société, c'est le site d'un produit » :
 * un compte Apple Developer en organisation publie au nom d'une société, et
 * Apple veut un site qui présente cette société et dise comment la joindre.
 *
 * Cette page est l'adresse à donner à Apple comme site de l'organisation :
 * qui est BAILORA (identité au registre, vérifiable), ce qu'elle fait (son
 * activité déclarée, et Bailora comme son application), comment la contacter.
 * Tout vient de src/config/site.ts, rien n'est recopié.
 */
const FICHE_OFFICIELLE = `https://annuaire-entreprises.data.gouv.fr/entreprise/${editeur.siren.replace(/\s/g, '')}`

export default function Societe() {
  const identite: ReactNode[] = [
    <>
      Dénomination : <strong>{editeur.nomLegal}</strong>
    </>,
    <>Forme juridique : {editeur.formeJuridique} au capital de {editeur.capitalSocial}</>,
    <>Siège social : {editeur.adresse}</>,
    <>
      SIREN : {editeur.siren}, immatriculée au RCS de {editeur.villeRcs}
    </>,
    <>SIRET du siège : {editeur.siret}</>,
    <>TVA intracommunautaire : {editeur.tvaIntracommunautaire}</>,
    <>Activité déclarée : {editeur.activite}</>,
    <>Gérant : {editeur.gerant}</>,
  ]

  return (
    <LegalLayout
      titre={`${editeur.nomLegal}, la société`}
      description={`${editeur.nomLegal} est une ${editeur.formeJuridique.toLowerCase()} française qui conçoit et édite des logiciels de gestion locative, dont l'application ${app.nom}.`}
      intro={
        <p>
          {editeur.nomLegal} est une {editeur.formeJuridique.toLowerCase()} de droit français, immatriculée au
          registre du commerce et des sociétés de {editeur.villeRcs}. Elle conçoit et édite des logiciels pour les
          propriétaires bailleurs et les SCI. Son application, {app.nom}, porte le même nom : c'est pourquoi la
          société et son produit partagent ce site.
        </p>
      }
    >
      <div className="rounded-card border border-line bg-surface-2 p-6 md:p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-accent text-accent-ink" aria-hidden="true">
          <Building2 size={22} strokeWidth={2.2} />
        </span>
        <h2 className="mt-4 text-[1.25rem] font-extrabold tracking-[-0.02em]">Contacter la société</h2>
        <p className="mt-2 text-ink-2">
          Une question sur la société, un partenariat, une demande de presse ou une question sur {app.nom} : nous
          répondons sous {contact.delaiReponse}.
        </p>
        <ul className="mt-4 space-y-1.5 text-[16px] text-ink-2 [&_a]:font-semibold [&_a]:text-ink [&_a]:underline-offset-2 hover:[&_a]:underline">
          <li>
            E-mail : <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            Téléphone : <a href={`tel:${editeur.telephone.replace(/\s/g, '')}`}>{editeur.telephone}</a>
          </li>
          <li>Courrier : {editeur.nomLegal}, {editeur.adresse}</li>
        </ul>
      </div>

      <Section titre="Identité">
        <Liste items={identite} />
        <p>
          Ces informations sont publiques et vérifiables sur la{' '}
          <a href={FICHE_OFFICIELLE} target="_blank" rel="noopener noreferrer">
            fiche officielle de la société
          </a>{' '}
          (Annuaire des entreprises, service de l'État).
        </p>
      </Section>

      <Section titre="Ce que fait la société">
        <p>
          {editeur.nomLegal} édite des logiciels de gestion locative. Son application {app.nom}, pour iPhone et
          Android, permet à un propriétaire de suivre ses loyers, de préparer ses quittances et ses courriers, de
          réaliser ses états des lieux et de garder chaque document de ses locations, qu'il détienne ses
          logements en nom propre ou au travers d'une ou plusieurs SCI.
        </p>
        <p>
          C'est {editeur.nomLegal} qui publie {app.nom} sur l'App Store et sur Google Play, et qui en assure
          l'assistance.
        </p>
      </Section>

      <Section titre="Assistance et informations légales">
        <p>
          Les utilisateurs de {app.nom} trouvent les réponses aux questions courantes et la façon de nous écrire
          sur la page <Link to="/support">Support</Link>. Les mentions obligatoires du site sont sur la page{' '}
          <Link to="/mentions-legales">Mentions légales</Link>, et le traitement des données dans la{' '}
          <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
