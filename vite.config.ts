import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// LE DOMAINE N'EST ÉCRIT QU'UNE FOIS : dans public/CNAME, le fichier que
// GitHub Pages lit. Tout le reste en découle — l'adresse absolue des balises
// Open Graph de index.html (%VITE_SITE_URL%), celle qu'affiche le site
// (import.meta.env.VITE_SITE_URL) et le sitemap (scripts/postbuild.mjs).
// Changer de domaine = changer ce fichier, et rien d'autre.
const domaine = readFileSync(new URL('./public/CNAME', import.meta.url), 'utf8').trim()
process.env.VITE_SITE_URL = `https://${domaine}`

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
