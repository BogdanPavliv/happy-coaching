import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import MainPage from './pages/MainPage/MainPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ExtraSalesPage from './pages/ExtraSalesPage/ExtraSalesPage';
import FreeGuidePage from './pages/FreeGuidePage/FreeGuidePage';
import { Footer } from "./components/Footer/Footer";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header isTopOfPage={isTopOfPage}/>
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
