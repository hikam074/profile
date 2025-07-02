import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';

import '/src/styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </>
  )
}

export default App
