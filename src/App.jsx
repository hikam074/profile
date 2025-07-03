import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import { AnimatePresence } from "framer-motion";
import '/src/styles/index.css';
import PageTransitionWrap from "./components/utils/PageTransitionWrapper.jsx";


function App() {
  const location =  useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={ <PageTransitionWrap bg="#CEEDB2"> <Home /> </PageTransitionWrap> } />
          <Route path="/portfolio" element={<PageTransitionWrap bg="#BEE0C7"> <Portfolio /> </PageTransitionWrap> } />
          <Route path="/contact" element={<PageTransitionWrap> <Contact /> </PageTransitionWrap> } />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
