/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { MenuSection } from './components/MenuSection';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';

export default function App() {
  // Navigation smoothly scrolls to anchor
  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#12100E] text-[#FAF7F2] flex flex-col font-sans selection:bg-[#E07A5F] selection:text-white">
      {/* Top Navigation Bar */}
      <Header onNavigateToSection={handleNavigateToSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => handleNavigateToSection('menu')}
          onViewLocation={() => handleNavigateToSection('location')}
        />

        {/* Signature Dishes Showcase */}
        <FeaturedShowcase />

        {/* Complete Menu (Transcribed 100% from photos) */}
        <MenuSection />

        {/* Location, Google Maps & Operating Hours */}
        <LocationHours />
      </main>

      {/* Footer */}
      <Footer onNavigateToSection={handleNavigateToSection} />
    </div>
  );
}
