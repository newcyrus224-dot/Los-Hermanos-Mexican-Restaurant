import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import realLogoImg from '../assets/images/los_hermanos_real_logo_1790998215906.jpg';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  return (
    <footer className="bg-[#0E0C0B] border-t border-[#201B18] text-[#8E847C] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Logo & Summary */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={realLogoImg}
                alt="Los Hermanos Mexican Restaurant Official Logo"
                referrerPolicy="no-referrer"
                className="h-14 w-auto object-contain rounded-md"
              />
            </div>
            <p className="text-xs leading-relaxed text-[#A89F96]">
              Authentic Mexican cooking, birria specialties, sizzling fajitas, and fresh coastal seafood on 1st Avenue in Kinder, Louisiana.
            </p>
            <div className="pt-1">
              <span className="text-[11px] text-[#E07A5F] font-medium uppercase tracking-wider">
                Allen Parish, LA
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateToSection('menu')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Full Menu & Specials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('featured')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  House Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('location')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Location & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Directions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
              Visit Kinder, LA
            </h4>
            <div className="space-y-2 text-xs text-[#A89F96]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E07A5F] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E07A5F] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="hover:text-[#FAF7F2] transition-colors font-medium text-[#FAF7F2]"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E07A5F] hover:text-[#CB694F] font-medium"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
              Hours of Service
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex justify-between">
                <span>Mon – Thu:</span>
                <span className="text-[#FAF7F2] font-mono">10:30 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri – Sat:</span>
                <span className="text-[#FAF7F2] font-mono">10:30 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-[#FAF7F2] font-mono">11:00 AM – 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1C1815] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6A6058]">
          <p>© {new Date().getFullYear()} Los Hermanos. All rights reserved.</p>
          <p>
            1315 1st Ave, Kinder, LA 70648 · Dine-In, Covered Patio & Takeout by Phone
          </p>
        </div>
      </div>
    </footer>
  );
};
