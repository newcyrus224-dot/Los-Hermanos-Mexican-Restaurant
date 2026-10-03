import React, { useState } from 'react';
import { MapPin, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import realLogoImg from '../assets/images/los_hermanos_real_logo_1790998215906.jpg';

interface HeaderProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigateToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#12100E]/95 backdrop-blur-md border-b border-[#2A2421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        {/* Zone 1: Real Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="flex items-center gap-2 group whitespace-nowrap py-1"
        >
          <img
            src={realLogoImg}
            alt="Los Hermanos Mexican Restaurant Official Logo"
            referrerPolicy="no-referrer"
            className="h-12 sm:h-14 w-auto object-contain rounded-md filter drop-shadow-md group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#C5BCB4]">
          <button
            onClick={() => handleNavClick('menu')}
            className="hover:text-[#FAF7F2] transition-colors py-1 cursor-pointer"
          >
            Full Menu
          </button>
          <button
            onClick={() => handleNavClick('featured')}
            className="hover:text-[#FAF7F2] transition-colors py-1 cursor-pointer"
          >
            Specialties
          </button>
          <button
            onClick={() => handleNavClick('location')}
            className="hover:text-[#FAF7F2] transition-colors py-1 cursor-pointer"
          >
            Location & Hours
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Call & Maps Directions) */}
        <div className="flex items-center gap-3">
          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Directions to 1315 1st Ave, Kinder, LA"
            className="hidden sm:flex items-center gap-1.5 text-xs text-[#A89F96] hover:text-[#FAF7F2] transition-colors py-2 px-3 rounded-md hover:bg-[#1E1A17]"
          >
            <MapPin className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span className="whitespace-nowrap">Kinder, LA</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-2 bg-[#E07A5F] hover:bg-[#CB694F] text-[#12100E] font-semibold text-xs sm:text-sm py-2 px-4 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {RESTAURANT_INFO.phone}</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#C5BCB4] hover:text-[#FAF7F2] hover:bg-[#1E1A17] rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2A2421] bg-[#181512] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#FAF7F2]">
            <button
              onClick={() => handleNavClick('menu')}
              className="text-left py-2 hover:text-[#E07A5F] transition-colors"
            >
              Full Menu
            </button>
            <button
              onClick={() => handleNavClick('featured')}
              className="text-left py-2 hover:text-[#E07A5F] transition-colors"
            >
              House Specialties
            </button>
            <button
              onClick={() => handleNavClick('location')}
              className="text-left py-2 hover:text-[#E07A5F] transition-colors"
            >
              Location & Hours (Kinder, LA)
            </button>
          </div>

          <div className="pt-4 border-t border-[#2A2421] flex flex-col gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#221D1A] text-sm text-[#FAF7F2] border border-[#3A332E]"
            >
              <Phone className="w-4 h-4 text-[#E07A5F]" />
              <span>Call: {RESTAURANT_INFO.phone}</span>
            </a>
            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#221D1A] text-sm text-[#FAF7F2] border border-[#3A332E]"
            >
              <MapPin className="w-4 h-4 text-[#E07A5F]" />
              <span>Google Maps: 1315 1st Ave</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
