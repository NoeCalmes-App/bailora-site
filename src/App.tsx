import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import Cgu from './pages/Cgu'
import Support from './pages/Support'
import SupprimerCompte from './pages/SupprimerCompte'
import NotFound from './pages/NotFound'

// Les chemins sont ceux de src/config/routes.json : c'est ce fichier que le
// build lit pour rendre chaque page ouvrable en URL directe (scripts/postbuild.mjs)
// et pour écrire le sitemap. Une page ajoutée ici s'ajoute là-bas.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cgu" element={<Cgu />} />
        <Route path="/support" element={<Support />} />
        <Route path="/supprimer-compte" element={<SupprimerCompte />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
