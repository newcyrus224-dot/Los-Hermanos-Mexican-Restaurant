import React from 'react';
import { ArrowRight, MapPin, Sparkles, Clock, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

// Image imports
import heroImage from '../assets/images/los_hermanos_hero_1790997261400.jpg';
import realLogoImg from '../assets/images/los_hermanos_real_logo_1790998215906.jpg';

interface HeroProps {
  onExploreMenu: () => void;
  onViewLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onViewLocation }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sizzling Mexican fajitas, authentic quesabirrias with rich consome and guacamole at Los Hermanos in Kinder, LA"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.74]"
        />
        {/* Measured dark gradient scrims for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/75 to-[#12100E]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12100E]/90 via-[#12100E]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="max-w-3xl">
          {/* Real Logo Emblem Banner */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="inline-block p-1 rounded-xl bg-black/60 backdrop-blur-md border border-[#3A3026] shadow-xl">
              <img
                src={realLogoImg}
                alt="Los Hermanos Mexican Restaurant Official Logo"
                referrerPolicy="no-referrer"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E07A5F]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Now Open in Kinder, Louisiana</span>
              </div>
              <p className="text-xs text-[#C5BCB4] mt-1 font-light">
                1315 1st Ave, Kinder, LA 70648 · Full Dining Room & Covered Patio
              </p>
            </div>
          </div>

          {/* Balanced Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#FAF7F2] leading-[1.08] tracking-tight mb-6 [text-wrap:balance]">
            Authentic Mexican Flavors, <br />
            <span className="italic text-[#F2CC8F]">Crafted Fresh Daily.</span>
          </h1>

          {/* Engaging Subtitle */}
          <p className="text-base sm:text-lg text-[#DDD5CB] leading-relaxed mb-8 max-w-2xl font-light">
            Welcome to Los Hermanos Mexican Restaurant on 1st Ave in Kinder. Explore our complete printed menu featuring slow-braised beef birria, smoking cast-iron fajitas, fresh coastal seafood, and handmade Mexican platters.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onExploreMenu}
              className="flex items-center justify-center gap-2.5 bg-[#E07A5F] hover:bg-[#CB694F] text-[#12100E] font-semibold text-sm sm:text-base py-3.5 px-7 rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>Explore Complete Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#221D1A]/90 hover:bg-[#2F2723] text-[#FAF7F2] border border-[#4A413B] font-medium text-sm sm:text-base py-3.5 px-6 rounded-lg transition-all shadow-sm whitespace-nowrap"
            >
              <Navigation className="w-4 h-4 text-[#E07A5F]" />
              <span>Get Directions to 1315 1st Ave</span>
            </a>
          </div>

          {/* Informational Metadata Strip (Zero-Pill Discipline) */}
          <div className="pt-6 border-t border-[#3A332E]/70 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#A89F96]">
            <button
              onClick={onViewLocation}
              className="flex items-center gap-2 hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#E07A5F]" />
              <span>1315 1st Ave, Kinder, LA 70648</span>
            </button>
            <span aria-hidden="true" className="text-[#4A413B]">·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#81B29A]" />
              <span>Open Daily from 10:30 AM</span>
            </div>
            <span aria-hidden="true" className="text-[#4A413B]">·</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#F2CC8F]">Dine-In</span>
              <span>/</span>
              <span className="text-[#F2CC8F]">Covered Patio</span>
              <span>/</span>
              <span className="text-[#F2CC8F]">Takeout by Phone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
