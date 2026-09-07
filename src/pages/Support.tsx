import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact } from '../config/site'

/**
 * La page de support : celle que l'App Store et Google Play afficheront en
 * lien. Un e-mail, un délai, et les réponses aux questions qu'on se pose
 * avant d'écrire. Elle ne décrit aucun écran de l'application, qui n'est pas
 * encore publiée.
 */
export default function Support() {
  return (
    <LegalLayout
      titre="Support"
      description={`Une question sur ${app.nom} ? Écrivez à ${contact.email}, réponse sous ${contact.delaiReponse}.`}
      intro={
        <p>
          Une question sur {app.nom}, sur la gestion de vos SCI ou sur la sortie de l'application ? Écrivez-nous,
          une personne vous répond.
        </p>
      }
    >
      <div className="rounded-card border border-line bg-surface-2 p-6 md:p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-accent text-accent-ink" aria-hidden="true">
          <Mail size={22} strokeWidth={2.2} />
        </span>
        <h2 className="mt-4 text-[1.25rem] font-extrabold tracking-[-0.02em]">Écrivez-nous</h2>
        <p className="mt-2 text-ink-2">
          Décrivez votre situation, avec le modèle de votre téléphone s'il s'agit d'un problème technique. Nous
          répondons généralement sous {contact.delaiReponse}.
        </p>
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent(`Support ${app.nom}`)}`}
          className="cale fond-marque mt-5 inline-flex h-12 items-center gap-2 rounded-pill px-6 text-[15px] font-extrabold text-accent-ink shadow-raised"
        >
          {contact.email}
        </a>
      </div>

      <Section titre="Questions fréquentes">
        <Liste
          items={[
            <>
              <strong>L'application est-elle disponible ?</strong> Pas encore. {app.nom} est en cours de
              développement. Les écrans présentés sur ce site viennent de sa maquette : ils montrent ce qui est
              prévu, sans engager sur une date de sortie.
            </>,
            <>
              <strong>Sur quels téléphones ?</strong> {app.nom} est prévue pour iPhone et pour Android, à la même
              date, avec les mêmes fonctionnalités.
            </>,
            <>
              <strong>Faut-il une SCI ?</strong> Non. {app.nom} gère aussi les logements détenus en nom propre.
              Les deux peuvent coexister dans la même application.
            </>,
            <>
              <strong>Combien ça coûte ?</strong> {app.nom} fonctionnera par abonnement. Le prix et ce qu'il
              comprend seront affichés dans l'application avant toute souscription, et c'est le prix affiché dans
              l'application qui fait foi. Le paiement passera par l'App Store ou Google Play.
            </>,
            <>
              <strong>Mon locataire doit-il payer ?</strong> Non. L'accès du locataire est en lecture seule et
              gratuit : il consulte son loyer et télécharge ses quittances, rien de plus.
            </>,
            <>
              <strong>Et mes données ?</strong> Ce site ne collecte rien. Ce qu'il traite, et ce qu'il ne traite
              pas, est détaillé dans la <Link to="/confidentialite">politique de confidentialité</Link>.
            </>,
            <>
              <strong>Supprimer un compte.</strong> La marche à suivre est sur la page{' '}
              <Link to="/supprimer-compte">Supprimer mon compte</Link>.
            </>,
          ]}
        />
      </Section>
    </LegalLayout>
  )
}
