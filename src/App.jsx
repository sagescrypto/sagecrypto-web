// App.jsx
import Signals from "./pages/Signals"; // en üste ekle
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import LanguageSwitcher from "./components/LanguageSwitcher";
import VipMint from "./components/VipMint";
import Education from "./pages/Education";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <About />
              <Tokenomics />
              <VipMint />
            </>
          } />
          <Route path="/education" element={<Education />} />
          <Route path="/vip-mint" element={<VipMint />} />
          <Route path="/signals" element={<Signals />} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;