import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import { AnimatePresence } from "framer-motion";
import '/src/styles/index.css';
import PageTransitionWrap from "./components/utils/PageTransitionWrapper.jsx";
import Footer from "./components/Footer.jsx";
import { Suspense, lazy } from "react";
import ScrollToTopButton from "./components/ScrollToTopBtn.jsx";

const Home = lazy(() => import('./pages/Home.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));


function LoadingPage() {
  return (
    <div className="min-h-[50vh] text-center flex items-center justify-center text-xl font-bold">
      Memuat...
    </div>
  );
}


function App() {
  const location =  useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ 
            <Suspense fallback={<LoadingPage />}> 
              <PageTransitionWrap bg="#CEEDB2"> 
                <Home /> 
              </PageTransitionWrap> 
            </Suspense>
            }
          />
          <Route path="/portfolio" element={
            <Suspense fallback={<LoadingPage />}>
              <PageTransitionWrap bg="#BEE0C7">
                <Portfolio />
              </PageTransitionWrap>
            </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
      <ScrollToTopButton />
      <Footer />
    </>
  )
}

export default App
