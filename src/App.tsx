/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HousingCatalog from './components/HousingCatalog';
import ProjectGallery from './components/ProjectGallery';
import QualityStandards from './components/QualityStandards';
import MortgageCalculator from './components/MortgageCalculator';
import AboutCompany from './components/AboutCompany';
import TestimonialsAndFaq from './components/TestimonialsAndFaq';
import LeadConsultationForm from './components/LeadConsultationForm';
import LocationAndOffice from './components/LocationAndOffice';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [calculatorState, setCalculatorState] = useState({
    price: 375000000,
    name: 'Tipe 45 / 72 — Griya Prima Asri'
  });

  const handleSelectForKpr = (price: number, name: string) => {
    setCalculatorState({ price, name });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* 3-Zone Top Navigation Bar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Value Proposition and Trust Signals */}
        <Hero />

        {/* Featured Housing Portfolio & Types */}
        <HousingCatalog onSelectForKpr={handleSelectForKpr} />

        {/* Visual Gallery of Completed Projects (Eksterior & Interior) */}
        <ProjectGallery />

        {/* Construction Quality & 4 Integrity Pillars */}
        <QualityStandards />

        {/* Homeowner Testimonials & FAQ */}
        <TestimonialsAndFaq />

        {/* Interactive Mortgage & Build Cost Calculator */}
        <MortgageCalculator 
          initialPrice={calculatorState.price} 
          initialHouseName={calculatorState.name} 
        />

        {/* Company Background & 4-Step Working Process */}
        <AboutCompany />

        {/* Online Consultation & Custom Quote Request Form */}
        <LeadConsultationForm />

        {/* Klaten Office & Project Location */}
        <LocationAndOffice />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
