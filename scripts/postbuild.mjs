// Après `vite build` : rendre chaque page ouvrable EN URL DIRECTE, et écrire le
// sitemap.
//
// POURQUOI. Le site est une application React à une seule page : le serveur ne
// connaît que /index.html. Sur GitHub Pages, /confidentialite renverrait donc
// une 404, et c'est précisément l'adresse qu'Apple et Google visitent sans
// passer par l'accueil (fiche App Store, Play Console, formulaire de suppression
// de compte). Une 404, même avec la bonne page dedans, est une porte fermée
// pour un robot.
//
// DEUX FILETS :
//   1. dist/<route>/index.html, une copie de la coquille par route. GitHub
//      Pages répond alors 200 sur chaque adresse, et le routeur affiche la
//      bonne page au chargement.
//   2. dist/404.html, la même coquille, pour toute adresse inconnue (et les
//      anciens liens) : le routeur affiche alors « page introuvable ».
//
// LES ROUTES VIVENT DANS src/config/routes.json, lues ici ET par le routeur :
// une page ajoutée là-bas est copiée ici, sans rien recopier.

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname
const routes = JSON.parse(readFileSync(new URL('../src/config/routes.json', import.meta.url), 'utf8'))
const domaine = readFileSync(new URL('../public/CNAME', import.meta.url), 'utf8').trim()
const origine = `https://${domaine}`

const coquille = join(dist, 'index.html')
copyFileSync(coquille, join(dist, '404.html'))
for (const { path } of routes) {
  if (path === '/') continue
  const dossier = join(dist, path.replace(/^\//, ''))
  mkdirSync(dossier, { recursive: true })
  copyFileSync(coquille, join(dossier, 'index.html'))
}

// LA BARRE FINALE COMPTE. Chaque page vit dans son dossier, donc GitHub Pages
// repond 301 de /cgu vers /cgu/. Un sitemap qui annonce /cgu envoie les robots
// sur une redirection, et sur une adresse qui n'est pas celle du canonique de
// la page. On ecrit donc l'adresse reellement servie.
const jour = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(({ path, priorite }) => `  <url>
    <loc>${origine}${path === '/' ? '/' : `${path}/`}</loc>
    <lastmod>${jour}</lastmod>
    <priority>${priorite}</priority>
  </url>`).join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origine}/sitemap.xml\n`)

console.log(`postbuild : 404.html, ${routes.length - 1} pages en URL directe, sitemap.xml et robots.txt pour ${origine}`)
