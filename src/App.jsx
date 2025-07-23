import {Routes,Route} from 'react-router-dom'
import NavbarComponent from './component/NavbarComponent';
import FooterComponent from './component/FooterComponent';

import homepage from './pages/homepage'
import profilpage from './pages/profilpage';
import layananpage from './pages/layananpage';
import contactpage from './pages/contactpage';
import promopage from './pages/promopage';
import PaketReguler from './pages/regulerpage';
import ExpressPage from './pages/expresspage';
import cucikeringPage from './pages/cukerpage';
import SetrikaPage from './pages/setrikapage';
import KarpetPage from './pages/karpetpage';
import BedcoverPage from './pages/bcpage';
import TasPage from './pages/taspage';
import HelmPage from './pages/helmpage';
import SepatuPage from './pages/sepatupage';
import DressPage from './pages/dresspage';
import JasPage from './pages/jaspage';


 
function App() {
  return (
  <div>
    <NavbarComponent />

    <Routes>
      <Route path='/' Component={homepage}/>
      <Route path='/profil' Component={profilpage}/>
      <Route path='/jas' Component={JasPage}/>
      <Route path='/dress' Component={DressPage}/>
      <Route path='/layanan' Component={layananpage}/>
      
      <Route path='/sepatu' Component={SepatuPage}/>
      <Route path='/promo' Component={promopage}/>
      <Route path='/karpet' Component={KarpetPage}/>
      <Route path='/bc' Component={BedcoverPage}/>
      <Route path='/express' Component={ExpressPage}/>
      <Route path='/setrika' Component={SetrikaPage}/>
      <Route path='/cuker' Component={cucikeringPage}/>
      <Route path='/helm' Component={HelmPage}/>
      <Route path='/tas' Component={TasPage}/>
      <Route path='/reguler' Component={PaketReguler}/>
      <Route path='/contact' Component={contactpage}/>
    </Routes>
    
    <FooterComponent/>
  </div>
  );
}

export default App
