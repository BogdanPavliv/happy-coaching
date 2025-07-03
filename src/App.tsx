import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import MainPage from './pages/MainPage/MainPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ExtraSalesPage from './pages/ExtraSalesPage/ExtraSalesPage';
import FreeGuidePage from './pages/FreeGuidePage/FreeGuidePage';
import { Footer } from "./components/Footer/Footer";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/extra-sales' element={<ExtraSalesPage/>}/>
          <Route path='/free-guide' element={<FreeGuidePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
