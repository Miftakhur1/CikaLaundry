import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './component/NavbarComponent';
import FooterComponent from './component/FooterComponent';

import Homepage from './pages/homepage';
import ProfilPage from './pages/profilpage';
import LayananPage from './pages/layananpage';
import ContactPage from './pages/contactpage';
import PromoPage from './pages/promopage';
import PaketReguler from './pages/regulerpage';
import ExpressPage from './pages/expresspage';
import CucikeringPage from './pages/cukerpage';
import SetrikaPage from './pages/setrikapage';
import KarpetPage from './pages/karpetpage';
import BedcoverPage from './pages/bcpage';
import TasPage from './pages/taspage';
import HelmPage from './pages/helmpage';
import SepatuPage from './pages/sepatupage';
import DressPage from './pages/dresspage';

import JasPage from './pages/jaspage';
import PremiumPage from './pages/premiumpage';
function App() {
  return (
    <div>
      <NavbarComponent />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/layanan" element={<LayananPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/reguler" element={<PaketReguler />} />
        <Route path="/express" element={<ExpressPage />} />
        <Route path="/cuker" element={<CucikeringPage />} />
        <Route path="/setrika" element={<SetrikaPage />} />
        <Route path="/karpet" element={<KarpetPage />} />
        <Route path="/bc" element={<BedcoverPage />} />
        <Route path="/tas" element={<TasPage />} />
        <Route path="/helm" element={<HelmPage />} />
        <Route path="/sepatu" element={<SepatuPage />} />
        <Route path="/dress" element={<DressPage />} />
        <Route path="/jas" element={<JasPage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
