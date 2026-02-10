// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // <--- Importa estas utilidades
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BodySection from './components/NextSection';
import DownloadSection from './components/DownloadAppSection';
import ProcessSection from './components/ProcessSection';
import AppServiceSection from './components/AppServiceSection';
import ContactSection from './components/ContactSection';
import PlanesPage from './pages/PlanesPage'; // <--- Crea este componente

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      
      <Routes>
        {/* Ruta principal con todos tus componentes actuales */}
        <Route path="/" element={
          <>
            <HeroSection />
            <BodySection />
            <DownloadSection />
            <ProcessSection />
            <AppServiceSection />
            <ContactSection />
          </>
        } />

        {/* Nueva ruta para los planes */}
        <Route path="/planes" element={<PlanesPage />} />
      </Routes>
    </div>
  );
};

export default App;