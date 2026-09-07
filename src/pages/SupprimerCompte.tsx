import { Link } from 'react-router-dom'
import { LegalLayout, Section } from '../components/LegalLayout'
import { app, contact, editeur } from '../config/site'

/**
 * L'adresse que Google Play exige (suppression de compte) et qu'Apple attend.
 *
 * ⚠️ ELLE EXISTE DÉJÀ, SANS APPLICATION PUBLIÉE, et elle dit la vérité. Son
 * adresse sera donnée à Google au dépôt de l'application : une URL qui déménage
 * entre-temps est une URL qui casse. Jamais un mode d'emploi d'écrans qu'on ne
 * peut pas ouvrir.
 */
export default function SupprimerCompte() {
  return (
    <LegalLayout
      titre="Supprimer mon compte"
      description={`Comment supprimer un compte ${app.nom}. Le site ne crée aucun compte, et l'application n'est pas encore publiée.`}
      miseAJour={editeur.miseAJourLegale}
      intro={
        <p>
          Ce site ne crée aucun compte : le consulter n'ouvre rien à supprimer. L'application {app.nom} n'est pas
          encore publiée sur l'App Store ni sur Google Play, il n'existe donc pas encore de compte {app.nom}.
        </p>
      }
    >
      <Section titre="À la publication de l'application">
        <p>
          Dès que {app.nom} sera disponible, la suppression du compte se fera <strong>depuis l'application
          elle-même</strong>, en quelques touches, sans avoir à écrire à qui que ce soit. La procédure exacte, ce
          qui est effacé et ce qui doit légalement être conservé seront décrits sur cette page, à cette même
          adresse.
        </p>
      </Section>

      <Section titre="En attendant">
        <p>
          Pour toute question sur vos données, ou pour demander la suppression d'un e-mail que vous nous auriez
          envoyé, écrivez à{' '}
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Mes données personnelles')}`}>
            {contact.email}
          </a>
          . Nous répondons sous {contact.delaiReponse}.
        </p>
        <p>
          Ce que le site traite, et ce qu'il ne traite pas, est détaillé dans la{' '}
          <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
