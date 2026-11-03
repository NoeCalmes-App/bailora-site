import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste, ACompleter } from '../components/LegalLayout'
import { app, contact, editeur, SITE_URL } from '../config/site'

/**
 * LES CONDITIONS D'UTILISATION DE L'APPLICATION ET DU SITE.
 *
 * C'est l'adresse que l'app ouvre sous « Créer mon compte » (lib/donnees/
 * liens.dart, dépôt bailora-app) et que Google Play et l'App Store lisent. Les
 * prix et la durée d'essai sont ceux de l'app (lib/donnees/formules.dart) : un
 * changement là-bas se reporte ici le même jour. Le prix qui fait foi est
 * celui affiché par la boutique au moment de souscrire.
 */
export default function Cgu() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  const email = <a href={`mailto:${contact.email}`}>{contact.email}</a>
  return (
    <LegalLayout
      titre="Conditions générales d'utilisation"
      description={`Conditions d'utilisation de l'application ${app.nom} et du site ${domaine} : compte, essai gratuit, abonnement, résiliation, responsabilité.`}
      miseAJour="3 novembre 2026"
      intro={
        <p>
          Ces conditions régissent l'utilisation de l'application <strong>{app.nom}</strong> et du site{' '}
          <strong>{domaine}</strong>, édités par {editeur.nomLegal}. Créer un compte dans l'application vaut
          acceptation des présentes ; consulter le site vaut acceptation de leur partie qui le concerne.
        </p>
      }
    >
      <Section titre="1. Le service">
        <p>
          {app.nom} aide les bailleurs, en nom propre ou en société civile immobilière, à gérer leurs locations :
          logements, locataires, baux, loyers, dépenses, états des lieux, quittances, contrats et courriers, avec un
          espace où leurs locataires retrouvent leurs documents, et un assistant qui répond aux questions sur le
          dossier.
        </p>
      </Section>

      <Section titre="2. Votre compte">
        <p>
          Le compte se crée avec une adresse e-mail et un mot de passe, ou avec Google ou Apple. Vous êtes
          responsable de la confidentialité de vos identifiants et de l'exactitude de ce que vous saisissez. Un
          compte est personnel ; vos données ne sont visibles que de vous, et de vos locataires pour les documents
          que vous leur partagez.
        </p>
        <p>
          Vous pouvez supprimer votre compte à tout moment depuis l'application (Réglages, Compte et sécurité),
          ou en nous écrivant : voir la page <Link to="/supprimer-compte">supprimer mon compte</Link>. Vos données
          sont alors effacées, après un export si vous le souhaitez.
        </p>
      </Section>

      <Section titre="3. Essai gratuit et abonnement">
        <Liste
          items={[
            <>
              <strong>30 jours d'essai gratuit</strong> à l'ouverture du compte, sans carte bancaire et sans
              engagement.
            </>,
            <>
              Ensuite, <strong>deux formules mensuelles</strong> : Particulier, 19 € par mois (1 société, 5 logements
              au total) ; Professionnel, 39 € par mois (10 sociétés, 30 logements au total). Les prix sont TTC ; le
              prix affiché par la boutique au moment de souscrire fait foi.
            </>,
            <>
              L'abonnement se souscrit dans l'application et se paie par <strong>l'App Store ou Google Play</strong>,
              selon leurs conditions. Il se <strong>renouvelle chaque mois</strong> automatiquement.
            </>,
            <>
              <strong>Résiliable à tout moment</strong>, dans les réglages d'abonnement de la boutique (Réglages de
              l'iPhone ; Google Play, Paiements et abonnements). L'abonnement reste ouvert jusqu'à la fin du mois
              payé. Supprimer l'application ou le compte ne résilie pas l'abonnement : la boutique continue de le
              facturer tant qu'il n'est pas résilié chez elle.
            </>,
            <>
              Les remboursements et le droit de rétractation s'exercent auprès de la boutique qui a encaissé, selon
              ses règles.
            </>,
            <>
              Sans abonnement à la fin de l'essai, l'application reste ouverte pour s'abonner, exporter ses données
              ou supprimer son compte.
            </>,
          ]}
        />
      </Section>

      <Section titre="4. Ce qui reste à votre charge">
        <p>
          {app.nom} fournit des modèles conformes aux textes en vigueur (contrat type du décret n° 2015-587, état des
          lieux du décret n° 2016-382, quittance de l'article 21 de la loi du 6 juillet 1989) et des calculs
          (révision du loyer, régularisation des charges, dépôt de garantie). Ce sont des outils : vous restez
          responsable de vos documents, de leur exactitude et de leur envoi. Relisez chaque document avant de le
          signer ou de l'envoyer. {app.nom} ne fournit pas de conseil juridique, fiscal ou comptable.
        </p>
        <p>
          L'assistant peut se tromper. Il ne fait que préparer : rien n'est enregistré dans votre dossier sans
          votre validation.
        </p>
        <p>
          Vous vous engagez à n'utiliser {app.nom} que pour gérer vos propres locations, à n'y saisir les données de
          vos locataires que dans ce but, et à ne pas en détourner l'usage (envois en masse, contenus illicites).
        </p>
      </Section>

      <Section titre="5. Disponibilité">
        <p>
          L'éditeur s'efforce d'assurer un service continu, sans pouvoir le garantir : une interruption peut
          survenir pour maintenance, mise à jour ou cause extérieure. Une partie de l'application fonctionne hors
          ligne ; l'envoi d'e-mails, l'assistant et la synchronisation demandent une connexion.
        </p>
      </Section>

      <Section titre="6. Responsabilité">
        <p>
          La responsabilité de l'éditeur ne peut être engagée que pour un dommage direct résultant d'un manquement
          à ces conditions, et dans la limite des sommes payées pour l'abonnement au cours des douze derniers
          mois. Elle ne couvre pas l'usage fait des documents produits, ni une donnée saisie inexacte. Ces limites
          ne s'appliquent pas en cas de faute lourde ou intentionnelle, ni aux droits que la loi reconnaît aux
          consommateurs.
        </p>
      </Section>

      <Section titre="7. Suspension">
        <p>
          L'éditeur peut suspendre un compte utilisé en violation de ces conditions ou de la loi, après vous en
          avoir informé sauf urgence.
        </p>
      </Section>

      <Section titre="8. Propriété intellectuelle">
        <p>
          L'application, le nom {app.nom}, le logo, la charte et les textes sont protégés. Vous gardez la propriété
          de vos données et de vos documents. Le détail des sources tierces figure dans les{' '}
          <Link to="/mentions-legales">mentions légales</Link>.
        </p>
      </Section>

      <Section titre="9. Données personnelles">
        <p>
          Voir la <Link to="/confidentialite">politique de confidentialité</Link> : ce qui est collecté, où, par qui,
          combien de temps, et vos droits.
        </p>
      </Section>

      <Section titre="10. Le site">
        <p>
          L'accès au site {domaine} est libre et gratuit. Il présente l'application et les informations légales de
          son éditeur ; aucune vente n'y est conclue.
        </p>
      </Section>

      <Section titre="11. Modification des conditions">
        <p>
          Ces conditions peuvent évoluer ; la date de dernière mise à jour figure en haut de la page. Une
          modification des prix ne s'applique pas à une période déjà payée.
        </p>
      </Section>

      <Section titre="12. Droit applicable, litiges et contact">
        <p>
          Les présentes conditions sont soumises au droit français. En cas de litige, écrivez-nous d'abord : {email}.
          Un consommateur peut aussi recourir gratuitement au médiateur de la consommation :{' '}
          <ACompleter>nom et adresse du médiateur de la consommation choisi par {editeur.nomLegal}</ACompleter>. À
          défaut d'accord, les tribunaux français sont compétents.
        </p>
      </Section>
    </LegalLayout>
  )
}
