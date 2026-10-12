import { Link } from 'react-router-dom'
import { Etapes, LegalLayout, Liste, Section } from '../components/LegalLayout'
import { app, contact, editeur, stores } from '../config/site'

/**
 * L'adresse que Google Play exige (suppression de compte) et qu'Apple attend.
 *
 * ⚠️ SON ADRESSE NE BOUGE PAS : elle sera donnée à Google au dépôt de
 * l'application, et une URL qui déménage est une URL qui casse.
 *
 * ELLE DÉCRIT CE QUE L'APPLICATION FAIT VRAIMENT, libellés compris : Réglages ›
 * Compte et sécurité › Supprimer mon compte pour le bailleur (avec le mot de
 * passe, vérifié AVANT tout effacement), « Autres actions » › Supprimer mon
 * compte pour le locataire. Un libellé changé dans l'app se change ici aussi.
 * Ce que Google demande d'y lire : le nom de l'app ou de son éditeur, les
 * étapes, ce qui est effacé, ce qui est gardé et combien de temps.
 */
export default function SupprimerCompte() {
  const publiee = Boolean(stores.appStore || stores.googlePlay)
  const objet = encodeURIComponent('Supprimer mon compte')
  return (
    <LegalLayout
      titre="Supprimer mon compte"
      description={`Comment supprimer votre compte ${app.nom}, bailleur ou locataire : depuis l'application ou par e-mail, ce qui est effacé et ce qui ne l'est pas.`}
      miseAJour="12 octobre 2026"
      intro={
        <>
          <p>
            Cette page concerne l'application <strong>{app.nom}</strong>, éditée par {editeur.nomLegal}. Vous pouvez
            supprimer votre compte vous-même, depuis l'application, à tout moment et sans frais. Si vous n'avez
            plus l'application, écrivez-nous : nous le faisons pour vous.
          </p>
          {!publiee && (
            <p className="mt-3">
              L'application n'est pas encore disponible sur l'App Store ni sur Google Play. Cette page décrit la
              suppression telle qu'elle existe dans l'application.
            </p>
          )}
        </>
      }
    >
      <Section titre="Vous êtes bailleur">
        <Etapes
          items={[
            <>
              Ouvrez {app.nom} et touchez <strong>« Réglages »</strong>, en haut de l'accueil.
            </>,
            <>
              Touchez <strong>« Compte et sécurité »</strong>.
            </>,
            <>
              En bas de l'écran, touchez <strong>« Supprimer mon compte »</strong>.
            </>,
            <>
              Saisissez votre mot de passe, puis touchez <strong>« Supprimer définitivement »</strong>.
            </>,
          ]}
        />
        <p>
          Avant de supprimer, l'application vous dit ce qui va partir (vos logements, vos locataires, les espaces
          que vous leur avez ouverts). Pour garder une copie, touchez d'abord <strong>« Exporter mes données »</strong>,
          sur le même écran.
        </p>
        <p>
          Avoir des locataires en place ne vous empêche pas de supprimer votre compte. Les espaces que vous leur
          aviez ouverts se ferment ; les quittances et documents qu'ils ont déjà reçus par e-mail restent dans leur
          boîte.
        </p>
      </Section>

      <Section titre="Vous êtes locataire">
        <Etapes
          items={[
            <>Ouvrez {app.nom}, connecté à votre espace locataire.</>,
            <>
              Touchez le bouton <strong>« … »</strong> (Autres actions), en haut à droite.
            </>,
            <>
              Touchez <strong>« Supprimer mon compte »</strong>, saisissez votre mot de passe, puis touchez{' '}
              <strong>« Supprimer définitivement »</strong>.
            </>,
          ]}
        />
        <p>
          Seul votre compte de connexion est supprimé. Les informations qui vous concernent dans la gestion de votre
          bailleur (bail, quittances, états des lieux) sont tenues par lui : c'est à lui de les effacer, et
          l'application lui permet de supprimer votre fiche après votre départ. Adressez-vous à lui.
        </p>
        <p>
          Si vous utilisez aussi {app.nom} comme bailleur, c'est le même compte : supprimez-le depuis les réglages
          de votre espace bailleur, comme indiqué plus haut.
        </p>
      </Section>

      <Section titre="Sans l'application">
        <p>
          Écrivez à{' '}
          <a href={`mailto:${contact.email}?subject=${objet}`}>{contact.email}</a> depuis l'adresse e-mail de votre
          compte, avec pour objet « Supprimer mon compte ». Écrire depuis cette adresse nous permet de vérifier que
          la demande vient bien de vous ; sinon, nous vous demanderons de la confirmer depuis cette adresse.
        </p>
        <p>
          Nous vous répondons sous {contact.delaiReponse}, et le compte est supprimé au plus tard un mois après
          votre demande. Nous vous le confirmons par e-mail.
        </p>
      </Section>

      <Section titre="Ce qui est effacé">
        <p>Pour un compte bailleur, tout ce que vous avez saisi ou produit dans l'application :</p>
        <Liste
          items={[
            <>votre compte de connexion (adresse e-mail et mot de passe) ;</>,
            <>votre profil, vos sociétés, vos logements, vos locataires et leurs garants, vos baux ;</>,
            <>vos loyers, vos dépenses et leurs justificatifs ;</>,
            <>vos quittances, contrats, courriers et états des lieux, photos et signatures comprises ;</>,
            <>l'historique des e-mails envoyés depuis l'application, et les espaces locataires que vous aviez ouverts.</>,
          ]}
        />
        <p>
          Pour un compte locataire : votre compte de connexion (adresse e-mail et mot de passe).
        </p>
        <p>
          L'effacement est <strong>immédiat et définitif</strong>. Il n'y a pas de corbeille, nous ne gardons
          aucune sauvegarde de vos données, et un compte supprimé ne peut pas être restauré.
        </p>
        <p>
          Vous pouvez aussi effacer une partie de vos données sans supprimer votre compte : un locataire, un
          logement ou une dépense se suppriment un par un dans l'application.
        </p>
      </Section>

      <Section titre="Ce qui n'est pas effacé">
        <Liste
          items={[
            <>
              <strong>Les e-mails déjà envoyés</strong> (quittances, courriers, documents) restent dans la boîte de
              leurs destinataires : ils ne sont plus entre nos mains.
            </>,
            <>
              <strong>Votre abonnement</strong>, s'il en existe un, est géré par l'App Store ou Google Play.
              Supprimer votre compte ne l'arrête pas : résiliez-le d'abord depuis les réglages de votre téléphone.
              Apple et Google conservent l'historique de vos achats selon leurs propres règles.
            </>,
            <>
              <strong>Les journaux techniques</strong> de nos serveurs peuvent mentionner l'identifiant de votre
              compte, jamais le contenu de vos documents. Ils s'effacent d'eux-mêmes sous 30 jours.
            </>,
          ]}
        />
      </Section>

      <Section titre="Une question">
        <p>
          Écrivez à <a href={`mailto:${contact.email}`}>{contact.email}</a>, ou consultez la page{' '}
          <Link to="/support">Support</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
