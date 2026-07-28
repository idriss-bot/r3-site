import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MasterclassVideoIA from './pages/MasterclassVideoIA';
import InscriptionMireille from './pages/InscriptionMireille';
import TrouverAcquereurs from './pages/TrouverAcquereurs';
import CGU from './pages/CGU';
import PostParJour from './pages/PostParJour';
import BootcampLinkedin from './pages/BootcampLinkedin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masterclass-video-ia" element={<MasterclassVideoIA />} />
        <Route path="/trouver-acquereurs-anne-boucaut-basso" element={<TrouverAcquereurs />} />
        <Route path="/inscription-mireille" element={<InscriptionMireille />} />
        <Route path="/1-post-par-jour-pendant-10-jours" element={<PostParJour />} />
        <Route path="/bootcamp-linkedin-ete" element={<BootcampLinkedin />} />
        <Route path="/cgu" element={<CGU />} />
      </Routes>
    </BrowserRouter>
  );
}
