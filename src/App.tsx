import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MasterclassVideoIA from './pages/MasterclassVideoIA';
import InscriptionMireille from './pages/InscriptionMireille';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masterclass-video-ia" element={<MasterclassVideoIA />} />
        <Route path="/inscription-mireille" element={<InscriptionMireille />} />
      </Routes>
    </BrowserRouter>
  );
}
