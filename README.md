# Bailora, site vitrine

Landing page et pages légales de l'application mobile Bailora, publiées sur **bailora-app.fr** par GitHub Pages. Site statique : aucun backend, aucun cookie, aucune donnée collectée, aucune requête vers un tiers.

## Commandes

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ : tsc, vite, puis scripts/postbuild.mjs (404.html, une copie par route, sitemap, robots)
npm run preview    # servir dist/ en local
npm run lint
npm run typecheck
```

## ⚠️ Ce qui manque avant de publier

Trois informations légales sont encore vides dans `src/config/site.ts`, et le site les signale **en jaune** sur la page Mentions légales et dans le pied de page :

- `editeur.formeJuridique` (« Entrepreneur individuel », « SASU »…)
- `editeur.siren` et `editeur.siret`
- `editeur.adresse` (l'adresse du siège au registre)

Si l'éditeur est une **société** et non un entrepreneur individuel, trois mentions de plus deviennent obligatoires et apparaissent alors toutes seules : `capitalSocial`, `villeRcs`, `tvaIntracommunautaire`. La règle vit dans `src/lib/editeur.ts`, elle n'est pas recopiée dans les pages.

Tant qu'un repère jaune subsiste, **le site n'est pas publiable** : une page de mentions légales trouée dit à Apple qu'il n'y a rien derrière ce domaine, et c'est exactement le motif de refus qu'on cherche à éviter. Ces informations se trouvent sur Pappers ou societe.com à partir du nom du représentant. Les coller dans `site.ts` éteint les repères.

## Où changer quoi

- **Tout ce qui varie** : nom, accroche, e-mail, éditeur légal, liens des stores : `src/config/site.ts`. Le jour où l'app est publiée, coller `stores.appStore` et `stores.googlePlay` suffit : les boutons « Bientôt disponible » deviennent de vrais boutons de téléchargement.
- **Le domaine** : `public/CNAME`, et rien d'autre. `vite.config.ts` le lit et le donne à `index.html` (`%VITE_SITE_URL%`), aux pages (`SITE_URL`) et au sitemap. La seule autre occurrence est la valeur de repli de `SITE_URL`, qui ne sert jamais en pratique.
- **Les pages** : `src/pages/`. Une page ajoutée se déclare aussi dans `src/App.tsx` et dans `src/config/routes.json` : c'est ce dernier que le build lit pour rendre la page ouvrable en URL directe et pour le sitemap.
- **Le titre et la description de chaque page** : le hook `src/lib/usePageMeta.ts`, appelé par chaque page. Il déplace aussi le **lien canonique**, qui suit donc la route affichée. Sans lui, les cinq pages légales serviraient le titre et le canonique de l'accueil, alors que le sitemap du même build les pousse vers Google.
- **La charte** : `src/index.css`, bloc `@theme`, recopiée de la maquette `landing-page/src/bailora-mockups.css`. Les jetons portent des noms de RÔLE : l'accent s'appelle `--color-accent`, jamais `--color-bordeaux`. Une seule ambiance, la claire : la maquette n'en a pas d'autre.
- **Le logo** : `src/components/Mark.tsx`, le « toit-clé » copié de la maquette, tracés identiques. Icônes PNG et image de partage dans `public/`.
- **Les écrans** : `src/assets/screens/*.webp`, capturés sur `https://noecalmes.fr/maquette/bailora/` à ×3, **sans le châssis** : le téléphone est dessiné en CSS (`.phone` dans `index.css`, `src/components/PhoneFrame.tsx`), donc net sur tout écran. Pour les refaire, trois gestes à la capture :
  1. `border-radius: 0` sur `.blr-phone` et `.blr-screen`, pour un rectangle net (le cadre CSS arrondit ensuite) ;
  2. `min-height: 704px` sur `.blr-content`, **plancher `tall` compris**, pour que les quatre écrans sortent à la même hauteur ;
  3. masquer dans le tableau de bord la ligne « Assurance à renouveler », qui le faisait dépasser à 747 ;
  4. masquer dans le suivi des loyers les trois locataires en trop, pour n'en garder que deux : Mehdi (en retard) et Sarah (payé). Trois visages de figurants en moins, et la note du bas parle justement de Sarah.

  Puis capturer `.blr-phone` et enregistrer en WebP (qualité 82). Le script de capture vit dans le bloc-notes de la session, il n'a pas sa place dans le dépôt.

## Cinq règles qui ne se discutent pas

- **Aucun tiret cadratin** dans un texte du site, titre d'onglet compris. Le séparateur est le point médian « · », celui de la maquette. Contrôle : `grep -rn "—" src/ index.html`.
- **Aucun prix, aucune offre**, nulle part, alors que la maquette en affiche : une page web se met à jour moins souvent qu'un écran d'application. L'abonnement n'est mentionné que comme principe, et le prix affiché dans l'app fait foi.
- **Une seule ambiance** sur tout le site, pages légales comprises. Elle se change dans `@theme`, et tout suit.
- **Le hero montre le premier écran de l'app** (l'ouverture), la galerie montre les suivants, jamais deux fois le même. Les quatre partagent la même hauteur d'écran, **704 px**, ce qui aligne la rangée au pixel : c'est la hauteur du tableau de bord une fois retirée sa ligne « Assurance à renouveler ». Les autres écrans y tiennent et gagnent un peu de vide en bas, rien n'est coupé.
- **Les écrans montrent encore quatre visages de figurants** (le service pravatar, dans la maquette) : deux locataires dans le suivi des loyers, et l'avatar du compte en haut du tableau de bord et du suivi. Ce sont des photographies de personnes réelles servant de bouche-trou : acceptables dans une maquette privée, discutables sur un site public. Pour les faire disparaître entièrement, masquer `.blr-avatar img` à la capture : le cercle beige de la maquette reste, et c'est exactement ce qu'affiche l'app pour un locataire sans photo.
- **Aucune modification n'est faite dans la maquette.** Tout ce que le site retire (la ligne « Assurance », les trois locataires) est masqué au moment de la capture. `landing-page/src/BailoraMockups.jsx` reste intact : c'est le livrable du client.
- **Icône et libellé sur la même ligne.** Une icône SVG est un bloc qui ne rétrécit pas (règle globale d'`index.css`), donc centrée par construction. Le calage `.cale` vaut `0em` parce qu'Inter a l'axe optique équilibré : mesuré dans le navigateur, l'écart entre le centre des capitales et le centre de l'icône est de **0,04 px**. Changer de police se fera en changeant ce seul nombre.

## Ce que le site ne dit pas

Le site promet moins que l'application ne fera, jamais l'inverse. L'assistant vocal et la lecture automatique des justificatifs existent au cahier des charges et dans la maquette, mais ne figurent pas parmi les six fonctionnalités affichées : six cartes est le maximum lisible. Ils s'ajouteront quand l'app sortira.

## Pourquoi le pied de page nomme l'éditeur

Le site sert aussi de site officiel de l'entreprise pour l'inscription au programme Apple Developer en organisation : Apple veut un site public, avec du vrai contenu, dont le domaine est associé à l'entité légale, et une adresse e-mail sur ce domaine. Le domaine porte le nom de l'app et non celui de l'entité, ce qui est normal : c'est le site qui fait le lien, par la ligne d'éditeur du pied de page et par les mentions légales.

## Publier

1. **GitHub** → Settings → Pages : Source « GitHub Actions », Custom domain `bailora-app.fr`, puis cocher « Enforce HTTPS » quand la vérification DNS est passée. ⚠️ Activer Pages **avant** le premier push : sur un dépôt neuf, le déploiement échoue tant que la case n'est pas cochée. Le workflow `.github/workflows/deploy.yml` construit et déploie à chaque push sur `main`.
2. **Zone DNS** (chez le registrar) :

   | Type  | Sous-domaine | Cible |
   |-------|--------------|-------|
   | A     | *(vide)*     | `185.199.108.153` |
   | A     | *(vide)*     | `185.199.109.153` |
   | A     | *(vide)*     | `185.199.110.153` |
   | A     | *(vide)*     | `185.199.111.153` |
   | A     | `www`        | les quatre mêmes adresses |

3. **Boîte mail** sur le domaine : `contact@bailora-app.fr`. C'est le client qui la crée ; son guide lui fait porter le nom de sa boîte plutôt que « contact ». L'adresse qu'il renverra peut donc différer : la coller dans `contact.email` de `src/config/site.ts` la change partout.
4. Propagation DNS : 1 à 2 h. Vérifier `https://bailora-app.fr` et `https://www.bailora-app.fr`.

⚠️ **Le domaine personnalisé ne se lit PAS dans `public/CNAME`** quand le déploiement passe par GitHub Actions, contrairement au déploiement par branche. Il faut le déclarer une fois, dans Settings → Pages → Custom domain, ou par l'API :

```bash
echo '{"cname":"bailora-app.fr"}' | gh api repos/NoeCalmes-App/bailora-site/pages -X PUT --input -
```

Envoyer `https_enforced` dans le même appel le fait échouer avec « The certificate does not exist yet » : le certificat n'existe pas encore au moment où on nomme le domaine. Poser le domaine seul, attendre que `https_certificate.state` passe à `approved` (deux à trois minutes), puis renvoyer le même appel avec `"https_enforced": true`.
