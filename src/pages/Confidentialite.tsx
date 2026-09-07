import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste, ACompleter } from '../components/LegalLayout'
import { app, contact, editeur, hebergeur, SITE_URL } from '../config/site'
import { formeConnue } from '../lib/editeur'

/**
 * LA POLITIQUE DE CONFIDENTIALITÉ DU SITE, et de lui seul.
 *
 * ⚠️ ELLE NE PARLE PAS DE L'APPLICATION. Décrire ce que l'app collectera (les
 * baux, les locataires, les photos d'état des lieux, les IBAN) alors qu'elle
 * n'est pas publiée donnerait une politique fausse, avec des trous, sur la page
 * même qu'Apple vient lire pour instruire le dossier développeur.
 *
 * Ce site est statique : pas de compte, pas de formulaire, pas de cookie, pas
 * de mesure d'audience. Deux traitements existent vraiment, les e-mails qu'on
 * nous écrit et les journaux techniques de l'hébergeur. On décrit ces deux-là,
 * complètement, et rien d'autre.
 */
export default function Confidentialite() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  return (
    <LegalLayout
      titre="Politique de confidentialité"
      description={`Ce que le site ${domaine} fait de vos données : rien. Site statique, sans compte, sans cookie et sans mesure d'audience.`}
      miseAJour={editeur.miseAJourLegale}
      intro={
        <p>
          Cette politique concerne le site <strong>{domaine}</strong>. Ce site est une vitrine : il présente
          l'application {app.nom}, sans compte, sans formulaire et sans achat. Il ne collecte aucune donnée
          personnelle. L'application {app.nom} n'est pas encore publiée ; lorsqu'elle le sera, sa propre politique
          de confidentialité sera publiée ici.
        </p>
      }
    >
      <Section titre="1. Responsable du traitement">
        <p>
          <strong>{editeur.nomLegal}</strong>
          {formeConnue(editeur.formeJuridique) ? `, ${editeur.formeJuridique.toLowerCase()}` : ' '}
          {!formeConnue(editeur.formeJuridique) && <ACompleter>forme juridique</ACompleter>} (nom commercial{' '}
          {editeur.nomCommercial}), SIREN {editeur.siren || <ACompleter>SIREN</ACompleter>},{' '}
          {editeur.adresse || <ACompleter>adresse du siège</ACompleter>}. Contact :{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </Section>

      <Section titre="2. Ce que le site ne fait pas">
        <Liste
          items={[
            <>
              Il ne dépose <strong>aucun cookie</strong>, ni traceur d'aucune sorte.
            </>,
            <>
              Il n'utilise <strong>aucun outil de mesure d'audience</strong> ni de publicité.
            </>,
            <>
              Il ne propose <strong>ni compte, ni formulaire, ni paiement</strong> : rien n'y est saisi.
            </>,
            <>
              Il ne pratique <strong>aucun profilage</strong> et ne prend aucune décision automatisée.
            </>,
            <>
              Il ne charge <strong>aucune ressource extérieure</strong> : les polices et les images sont servies
              par ce site, donc aucune requête n'est faite vers un tiers pendant votre visite.
            </>,
          ]}
        />
        <p>
          Aucune donnée n'est vendue, louée ni transmise à des fins commerciales : il n'y en a pas à transmettre.
        </p>
      </Section>

      <Section titre="3. Les deux seules données traitées">
        <Liste
          items={[
            <>
              <strong>Les e-mails que vous nous envoyez.</strong> Si vous écrivez à{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>, nous traitons votre adresse et le contenu de
              votre message, dans le seul but d'y répondre (base légale : l'intérêt légitime à répondre à une
              demande qui nous est adressée). Écrire est libre, rien ne vous y oblige.
            </>,
            <>
              <strong>Les journaux techniques de l'hébergeur.</strong> Comme tout site, celui-ci est servi par un
              hébergeur, {hebergeur.nom} ({hebergeur.service}), qui enregistre techniquement les requêtes reçues
              (adresse IP, date, page demandée, navigateur) pour assurer la sécurité et le fonctionnement du
              service. Ces journaux sont produits et conservés par l'hébergeur, selon sa propre politique de
              confidentialité ; l'éditeur n'y accède pas et n'en tire aucune statistique.
            </>,
          ]}
        />
      </Section>

      <Section titre="4. Combien de temps">
        <p>
          Les e-mails sont conservés le temps de traiter votre demande, puis au plus douze mois après le dernier
          échange, avant d'être supprimés. Les journaux de l'hébergeur suivent la durée de conservation fixée par
          l'hébergeur.
        </p>
      </Section>

      <Section titre="5. Qui les reçoit">
        <p>
          Personne d'autre que l'éditeur. Aucun destinataire commercial, aucun partenaire publicitaire.
          Interviennent seulement, et pour la seule technique : l'hébergeur du site ({hebergeur.nom}) et le
          fournisseur de la messagerie qui achemine les e-mails.
        </p>
        <p>
          {hebergeur.nom} est établie aux États-Unis : l'acheminement des pages implique donc un transfert hors de
          l'Union européenne, encadré par les garanties prévues par le RGPD.
        </p>
      </Section>

      <Section titre="6. Vos droits">
        <p>
          Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de
          portabilité sur les données qui vous concernent, ainsi que du droit de définir des directives sur leur
          sort après votre décès (RGPD et loi Informatique et Libertés). En pratique, cela ne peut porter que sur
          un e-mail que vous nous auriez envoyé.
        </p>
        <p>
          Pour l'exercer : <a href={`mailto:${contact.email}`}>{contact.email}</a>. Nous répondons dans un délai
          d'un mois. Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            cnil.fr
          </a>
          ).
        </p>
      </Section>

      <Section titre="7. Sécurité">
        <p>
          Le site est servi exclusivement en HTTPS. N'ayant ni base de données, ni compte, ni formulaire, il
          n'expose aucune donnée personnelle.
        </p>
      </Section>

      <Section titre="8. Modifications">
        <p>
          Cette politique peut évoluer, en particulier lorsque l'application {app.nom} sera publiée : une politique
          propre à l'application sera alors ajoutée. La date de dernière mise à jour figure en haut de la page.
          Voir aussi les <Link to="/cgu">conditions d'utilisation</Link> et les{' '}
          <Link to="/mentions-legales">mentions légales</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
