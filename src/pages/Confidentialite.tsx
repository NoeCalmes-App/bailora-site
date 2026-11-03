import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste, ACompleter } from '../components/LegalLayout'
import { app, contact, editeur, hebergeur, SITE_URL } from '../config/site'
import { formeConnue } from '../lib/editeur'

/**
 * LA POLITIQUE DE CONFIDENTIALITÉ DE L'APPLICATION ET DU SITE.
 *
 * C'est l'adresse donnée à Google Play et à l'App Store, et celle que l'app
 * ouvre (lib/donnees/liens.dart, dépôt bailora-app). Elle décrit ce que l'app
 * fait VRAIMENT, relevé dans son code le 3 novembre 2026 : chaque donnée, où
 * elle est rangée, qui la traite. Un traitement ajouté à l'app (un nouveau
 * sous-traitant, une mesure d'audience) s'ajoute ici le même jour.
 */
export default function Confidentialite() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  const email = <a href={`mailto:${contact.email}`}>{contact.email}</a>
  return (
    <LegalLayout
      titre="Politique de confidentialité"
      description={`Ce que l'application ${app.nom} et le site ${domaine} font de vos données : ce qui est collecté, où, par qui, combien de temps, et vos droits.`}
      miseAJour="3 novembre 2026"
      intro={
        <p>
          Cette politique concerne l'application <strong>{app.nom}</strong> (iPhone et Android) et le site{' '}
          <strong>{domaine}</strong>. Elle dit ce qui est collecté, pourquoi, où c'est rangé, qui le traite et
          combien de temps. {app.nom} ne vend aucune donnée, n'affiche aucune publicité et ne mesure pas votre
          audience.
        </p>
      }
    >
      <Section titre="1. Qui est responsable">
        <p>
          <strong>{editeur.nomLegal}</strong>
          {formeConnue(editeur.formeJuridique) ? `, ${editeur.formeJuridique.toLowerCase()}` : ' '}
          {!formeConnue(editeur.formeJuridique) && <ACompleter>forme juridique</ACompleter>}, SIREN{' '}
          {editeur.siren || <ACompleter>SIREN</ACompleter>},{' '}
          {editeur.adresse || <ACompleter>adresse du siège</ACompleter>}. Contact : {email}.
        </p>
        <p>
          {editeur.nomLegal} est responsable des données de <strong>votre compte</strong>. Les données de{' '}
          <strong>vos locataires</strong>, que vous saisissez pour gérer vos locations, sont traitées par vous,
          bailleur, qui en êtes responsable : {editeur.nomLegal} les traite pour votre compte, sur vos
          instructions, sans les utiliser à d'autres fins (sous-traitant, article 28 du RGPD).
        </p>
      </Section>

      <Section titre="2. Ce que l'application collecte">
        <Liste
          items={[
            <>
              <strong>Votre compte</strong> : adresse e-mail, prénom et nom, mot de passe (gardé chiffré par notre
              fournisseur d'authentification, jamais lisible par nous). Avec « Continuer avec Google », Google nous
              transmet votre nom et votre adresse e-mail.
            </>,
            <>
              <strong>Votre activité de bailleur</strong> : vos sociétés (nom, SIREN, adresse, IBAN), vos logements,
              vos baux, vos loyers et paiements, vos dépenses et leurs justificatifs (photos), vos états des lieux
              (notes, photos, signatures) et les documents composés (quittances, contrats, courriers).
            </>,
            <>
              <strong>Vos locataires et leurs garants</strong> : nom, prénom, e-mail, téléphone, et ce que vous
              notez dans leur dossier.
            </>,
            <>
              <strong>Les e-mails envoyés depuis l'application</strong> : destinataire, objet, statut d'envoi.
            </>,
            <>
              <strong>Votre abonnement</strong> : la formule, son état et son échéance, tels que l'App Store ou
              Google Play nous les confirment. Le paiement se fait chez eux : nous ne voyons jamais votre carte.
            </>,
            <>
              <strong>Les notifications</strong> : un identifiant technique de votre téléphone, pour vous envoyer les
              rappels (loyer attendu, retard, fin de bail) si vous les acceptez.
            </>,
            <>
              <strong>Les questions posées à l'assistant</strong> : leur texte, et ce que l'assistant lit dans votre
              dossier pour y répondre. L'historique de vos questions reste sur votre téléphone.
            </>,
            <>
              <strong>Les rapports de plantage</strong> : modèle du téléphone, version du système et de
              l'application, et ce qui s'est passé au moment de l'erreur, sans vos documents.
            </>,
          ]}
        />
        <p>
          La lecture des justificatifs (le montant sur une facture photographiée) et la dictée se font{' '}
          <strong>sur votre téléphone</strong>, par le système de l'appareil.
        </p>
      </Section>

      <Section titre="3. Pourquoi">
        <Liste
          items={[
            <>
              <strong>Fournir le service</strong> que vous avez demandé : tenir vos locations, composer et envoyer
              vos documents, ouvrir l'espace de vos locataires (base légale : l'exécution du contrat).
            </>,
            <>
              <strong>Gérer votre abonnement</strong> et la période d'essai (exécution du contrat).
            </>,
            <>
              <strong>Corriger les pannes</strong> et protéger le service contre les abus (intérêt légitime).
            </>,
            <>
              <strong>Respecter nos obligations</strong> légales, comptables notamment (obligation légale).
            </>,
          ]}
        />
        <p>Aucun profilage, aucune décision automatisée, aucune publicité.</p>
      </Section>

      <Section titre="4. Où et par qui">
        <p>Vos données sont rangées en France et traitées par ces seuls prestataires, pour la seule technique :</p>
        <Liste
          items={[
            <>
              <strong>Google (Firebase, Google Cloud)</strong> : authentification, base de données et fichiers,
              hébergés à Paris (région europe-west9), notifications, rapports de plantage.
            </>,
            <>
              <strong>Resend</strong> : l'envoi des e-mails (quittances, documents, invitations).
            </>,
            <>
              <strong>Mistral AI</strong> (France), et en secours <strong>Groq</strong> (États-Unis) : les réponses
              de l'assistant, à partir de la question et des éléments du dossier qu'elle demande.
            </>,
            <>
              <strong>Apple et Google</strong> : le paiement de l'abonnement, dans leur boutique, selon leurs propres
              conditions.
            </>,
            <>
              <strong>{hebergeur.nom}</strong> : l'hébergement du site {domaine}.
            </>,
          ]}
        />
        <p>
          Quand un prestataire est établi hors de l'Union européenne (Groq, Resend, Google, {hebergeur.nom}), le
          transfert est encadré par les garanties prévues par le RGPD (clauses contractuelles types de la
          Commission européenne, ou cadre de protection des données UE et États-Unis).
        </p>
      </Section>

      <Section titre="5. Combien de temps">
        <Liste
          items={[
            <>
              <strong>Votre compte et votre dossier</strong> : tant que votre compte existe. Quand vous le supprimez
              (Réglages, Compte et sécurité, « Supprimer mon compte »), tout est effacé dans les heures qui suivent :
              données, documents, photos et espaces de vos locataires.
            </>,
            <>
              <strong>Un ancien locataire</strong> : sa fiche est effacée automatiquement trois ans après son départ,
              une fois tout réglé. Vous êtes prévenu trente jours avant, et pouvez la garder.
            </>,
            <>
              <strong>Les rapports de plantage et journaux techniques</strong> : quelques semaines, puis effacés.
            </>,
            <>
              <strong>Les e-mails que vous nous écrivez</strong> : le temps de vous répondre, puis au plus douze mois.
            </>,
          ]}
        />
        <p>
          Vous pouvez aussi, à tout moment, exporter tout votre dossier depuis l'application (Réglages, Compte et
          sécurité, « Exporter mes données »).
        </p>
      </Section>

      <Section titre="6. Vos locataires">
        <p>
          Un locataire invité par son bailleur ouvre son espace avec son adresse e-mail : il y lit ses quittances et
          ses documents, rien d'autre. Il peut supprimer son compte depuis l'application ; son dossier, tenu par son
          bailleur, reste chez ce dernier. Pour exercer ses droits sur ce dossier, il s'adresse à son bailleur, ou à
          nous ({email}), et nous transmettons.
        </p>
      </Section>

      <Section titre="7. Le site">
        <p>
          Le site {domaine} ne dépose aucun cookie, n'utilise aucune mesure d'audience et ne propose aucun formulaire.
          Son hébergeur enregistre techniquement les requêtes reçues (adresse IP, date, page, navigateur) pour la
          sécurité du service ; nous n'y accédons pas.
        </p>
      </Section>

      <Section titre="8. Vos droits">
        <p>
          Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de
          portabilité sur vos données, et du droit de définir des directives sur leur sort après votre décès (RGPD
          et loi Informatique et Libertés). L'application vous permet déjà de corriger, d'exporter et d'effacer vos
          données vous-même. Pour le reste : {email}. Nous répondons sous un mois. Vous pouvez aussi saisir la CNIL
          (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            cnil.fr
          </a>
          ).
        </p>
      </Section>

      <Section titre="9. Sécurité">
        <p>
          Tout transite chiffré (HTTPS). Chaque compte ne voit que ses propres données : la séparation est imposée
          par le serveur, pas seulement par l'application. Un locataire ne voit que les documents que son bailleur
          lui a partagés.
        </p>
      </Section>

      <Section titre="10. Âge">
        <p>{app.nom} s'adresse aux bailleurs majeurs. Elle n'est pas destinée aux moins de 18 ans.</p>
      </Section>

      <Section titre="11. Modifications">
        <p>
          Cette politique évolue avec l'application ; la date de dernière mise à jour figure en haut de la page. Voir
          aussi les{' '}
          <Link to="/cgu">conditions d'utilisation</Link>, les <Link to="/mentions-legales">mentions légales</Link>{' '}
          et la page <Link to="/supprimer-compte">supprimer mon compte</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
