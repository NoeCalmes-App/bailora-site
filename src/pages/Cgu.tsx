import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact, editeur, SITE_URL } from '../config/site'

/**
 * LES CONDITIONS D'UTILISATION DU SITE, pas de l'application.
 *
 * Le site ne vend rien, n'ouvre aucun compte et ne conclut aucun contrat : il
 * n'y a donc pas de conditions générales de VENTE, et la page le dit. Les
 * conditions de l'application seront fournies dans l'application, le jour où
 * elle existera.
 */
export default function Cgu() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  return (
    <LegalLayout
      titre="Conditions générales d'utilisation"
      description={`Conditions d'utilisation du site ${domaine} : accès libre, contenu informatif, propriété intellectuelle, responsabilité, droit français.`}
      miseAJour={editeur.miseAJourLegale}
      intro={
        <p>
          Ces conditions régissent l'utilisation du site <strong>{domaine}</strong>. Elles ne concernent pas
          l'application mobile {app.nom}, qui aura les siennes, fournies dans l'application. Consulter ce site
          vaut acceptation des présentes.
        </p>
      }
    >
      <Section titre="1. Objet du site">
        <p>
          Le site présente l'application mobile {app.nom} et met à disposition les informations légales de son
          éditeur. Il a une vocation exclusivement informative.
        </p>
        <p>
          <strong>L'application est en cours de développement.</strong> Les écrans et les fonctionnalités présentés
          proviennent de sa maquette : ils n'engagent ni sur le contenu final de l'application, ni sur une date de
          publication.
        </p>
      </Section>

      <Section titre="2. Accès au site">
        <p>
          L'accès est libre et gratuit, sans inscription. Il ne nécessite qu'une connexion internet, à la charge du
          visiteur. L'éditeur s'efforce d'assurer la disponibilité du site, sans pouvoir la garantir : une
          interruption peut survenir pour maintenance, mise à jour ou cause extérieure.
        </p>
      </Section>

      <Section titre="3. Aucune vente sur ce site">
        <p>
          <strong>Aucune vente n'est conclue sur ce site</strong>, aucun paiement n'y est possible et aucun compte
          n'y est ouvert. Il n'existe donc pas de conditions générales de vente attachées à ce site, ni de droit de
          rétractation à exercer ici.
        </p>
        <p>
          {app.nom} fonctionnera par abonnement, souscrit dans l'application, à travers l'App Store ou Google Play.
          Les conditions applicables et le prix seront affichés dans l'application avant toute souscription, et
          c'est ce qui y sera affiché qui fera foi.
        </p>
      </Section>

      <Section titre="4. Propriété intellectuelle">
        <p>
          Le nom {app.nom}, le logo, la charte graphique, les textes et les visuels du site sont protégés. Toute
          reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable de
          l'éditeur, est interdite. Le détail des sources tierces figure dans les{' '}
          <Link to="/mentions-legales">mentions légales</Link>.
        </p>
      </Section>

      <Section titre="5. Liens externes">
        <p>
          Le site peut renvoyer vers des sites tiers, notamment l'App Store, Google Play, l'hébergeur ou la CNIL.
          L'éditeur n'exerce aucun contrôle sur leur contenu et ne saurait en être tenu responsable.
        </p>
      </Section>

      <Section titre="6. Responsabilité">
        <p>Les informations publiées sont données à titre indicatif. L'éditeur ne garantit pas :</p>
        <Liste
          items={[
            <>que le site soit exempt d'erreur ou d'omission,</>,
            <>que les fonctionnalités présentées soient celles de la version finale de l'application,</>,
            <>que le site soit accessible sans interruption.</>,
          ]}
        />
        <p>
          La responsabilité de l'éditeur ne peut être engagée pour un dommage résultant de l'utilisation du site ou
          de l'impossibilité d'y accéder.
        </p>
      </Section>

      <Section titre="7. Données personnelles">
        <p>
          Le site ne collecte aucune donnée personnelle et ne dépose aucun cookie. Voir la{' '}
          <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Section>

      <Section titre="8. Modification des conditions">
        <p>
          L'éditeur peut modifier ces conditions à tout moment, notamment lors de la publication de l'application.
          La version applicable est celle en ligne au moment de la consultation ; sa date figure en haut de la
          page.
        </p>
      </Section>

      <Section titre="9. Droit applicable et contact">
        <p>
          Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera
          recherchée en priorité ; à défaut, les tribunaux français seront seuls compétents.
        </p>
        <p>
          Pour toute question : <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </Section>
    </LegalLayout>
  )
}
