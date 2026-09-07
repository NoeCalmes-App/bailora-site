import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste, ACompleter } from '../components/LegalLayout'
import { app, contact, editeur, hebergeur, SITE_URL } from '../config/site'
import { estSociete, formeConnue } from '../lib/editeur'

/**
 * Les mentions obligatoires d'un site professionnel (LCEN, art. 6-III), et ce
 * qui associe ce domaine à l'entité légale : ce qu'Apple vérifie.
 *
 * ⚠️ ÉDITEUR DU SITE, PAS « DU SITE ET DE L'APPLICATION » : l'application n'est
 * pas publiée. Nommer un éditeur d'application inexistante affaiblit la seule
 * chose que cette page doit prouver, que ce site-ci appartient à cette
 * entité-là. L'hébergeur est nommé en toutes lettres : mention obligatoire, et
 * la première que l'on vient chercher ici.
 *
 * Tout vient de src/config/site.ts.
 */
export default function MentionsLegales() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  const societe = estSociete(editeur.formeJuridique)

  const identite: ReactNode[] = [
    <>
      <strong>{editeur.nomLegal}</strong>,{' '}
      {formeConnue(editeur.formeJuridique) ? (
        editeur.formeJuridique.toLowerCase()
      ) : (
        <ACompleter>forme juridique de l'éditeur</ACompleter>
      )}
      , exerçant sous le nom commercial {editeur.nomCommercial}
    </>,
    <>SIREN : {editeur.siren || <ACompleter>SIREN, 9 chiffres</ACompleter>}</>,
    <>SIRET : {editeur.siret || <ACompleter>SIRET du siège, 14 chiffres</ACompleter>}</>,
    <>Adresse : {editeur.adresse || <ACompleter>adresse du siège</ACompleter>}</>,
  ]

  // Trois mentions de plus, obligatoires pour une SOCIÉTÉ seulement.
  if (societe) {
    identite.push(
      <>Capital social : {editeur.capitalSocial || <ACompleter>capital social</ACompleter>}</>,
      <>
        Immatriculée au RCS de{' '}
        {editeur.villeRcs || <ACompleter>ville du greffe d'immatriculation</ACompleter>}
      </>,
      <>
        Numéro de TVA intracommunautaire :{' '}
        {editeur.tvaIntracommunautaire || <ACompleter>numéro de TVA, ou la mention « non assujettie »</ACompleter>}
      </>,
    )
  }

  identite.push(
    <>
      Téléphone : <a href={`tel:${editeur.telephone.replace(/\s/g, '')}`}>{editeur.telephone}</a>
    </>,
    <>
      E-mail : <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </>,
  )

  return (
    <LegalLayout
      titre="Mentions légales"
      description={`Mentions légales du site ${domaine} : éditeur, directeur de la publication, hébergeur, propriété intellectuelle.`}
      miseAJour={editeur.miseAJourLegale}
    >
      <Section titre="Éditeur du site">
        <p>
          Le site <strong>{domaine}</strong> est édité par :
        </p>
        <Liste items={identite} />
        {!formeConnue(editeur.formeJuridique) && (
          <p>
            <ACompleter>
              tant que la forme juridique n'est pas renseignée, le site ne peut pas savoir s'il doit aussi
              afficher le capital social, la ville du RCS et le numéro de TVA, qui sont obligatoires pour une
              société
            </ACompleter>
          </p>
        )}
        <p>
          <strong>Directeur de la publication :</strong> {editeur.directeurPublication}.
        </p>
        <p>
          L'application mobile {app.nom}, présentée sur ce site, est développée par le même éditeur et n'est pas
          encore publiée sur les stores.
        </p>
      </Section>

      <Section titre="Hébergement">
        <p>
          Le site est hébergé par <strong>{hebergeur.nom}</strong>, {hebergeur.adresse}, sur son service{' '}
          {hebergeur.service} :{' '}
          <a href={hebergeur.site} target="_blank" rel="noopener noreferrer">
            {hebergeur.site}
          </a>
          .
        </p>
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          Le nom {app.nom}, le logo, les textes, les visuels et l'ensemble des éléments du site sont la propriété
          de l'éditeur ou sont utilisés avec l'autorisation de leurs ayants droit. Toute reproduction ou
          réutilisation, totale ou partielle, sans autorisation écrite préalable, est interdite.
        </p>
        <p>
          Les captures d'écran présentées sur ce site proviennent de la maquette de l'application. Les
          photographies d'intérieurs et de logements qui y figurent sont issues d'
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
            Unsplash
          </a>{' '}
          et utilisées selon la licence Unsplash. Les noms, adresses, montants et numéros de SIREN qui
          apparaissent sur ces écrans sont fictifs et servent uniquement d'illustration.
        </p>
        <p>
          Les icônes sont celles de la bibliothèque{' '}
          <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">
            Lucide
          </a>{' '}
          (licence ISC). La police de caractères Inter est distribuée sous licence SIL Open Font License 1.1.
        </p>
      </Section>

      <Section titre="Données personnelles et cookies">
        <p>
          Ce site est entièrement statique : il ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience
          et ne collecte aucune donnée personnelle. Le détail figure dans la{' '}
          <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Section>

      <Section titre="Droit applicable">
        <p>
          Le site est soumis au droit français. En cas de litige et à défaut de solution amiable, les tribunaux
          français seront seuls compétents. Voir aussi les <Link to="/cgu">conditions d'utilisation</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
