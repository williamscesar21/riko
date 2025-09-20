// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BodySection from './components/NextSection';
import DownloadSection from './components/DownloadAppSection';
import ProcessSection from './components/ProcessSection';
import AppServiceSection from './components/AppServiceSection';
import OffersSection from './components/OffersSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <BodySection />
      <DownloadSection />
      <ProcessSection />
      <AppServiceSection />
      <OffersSection />
      <ContactSection />
    </div>
  );
};

export default App;