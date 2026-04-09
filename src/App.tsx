import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MasterclassVideoIA from './pages/MasterclassVideoIA';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masterclass-video-ia" element={<MasterclassVideoIA />} />
      </Routes>
    </BrowserRouter>
  );
}
