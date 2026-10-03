import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import patioImg from '../assets/images/restaurant_patio_1790997293045.jpg';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-[#161311] border-b border-[#2A2421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E07A5F] mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Allen Parish</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF7F2] [text-wrap:balance]">
            Location & Hours
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89F96]">
            Conveniently situated on 1st Avenue in Kinder, Louisiana. Join us in our comfortable dining room or on our covered outdoor patio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Key Info Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address & Navigation Card */}
            <div className="p-6 rounded-2xl bg-[#1D1916] border border-[#2E2520] space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E07A5F]/10 border border-[#E07A5F]/30 flex items-center justify-center text-[#E07A5F]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-[#FAF7F2]">Restaurant Address</h3>
                    <p className="text-xs text-[#8E847C]">Downtown Kinder, LA</p>
                  </div>
                </div>
              </div>

              <div className="text-sm font-medium text-[#FAF7F2] leading-snug">
                {RESTAURANT_INFO.address}
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-[#E07A5F] hover:bg-[#CB694F] text-[#12100E] text-xs font-semibold py-2.5 px-3.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex items-center justify-center gap-1.5 bg-[#251F1B] hover:bg-[#302823] text-xs font-medium text-[#FAF7F2] py-2.5 px-3 rounded-lg border border-[#3A3029] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#81B29A]" />
                      <span className="text-[#81B29A]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A89F96]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-[#1D1916] border border-[#2E2520] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#81B29A]/10 border border-[#81B29A]/30 flex items-center justify-center text-[#81B29A]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-[#FAF7F2]">Hours of Operation</h3>
                  <p className="text-xs text-[#81B29A] font-medium">Serving Lunch & Dinner Daily</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
                {RESTAURANT_INFO.hours.map((schedule) => (
                  <div
                    key={schedule.days}
                    className="flex justify-between items-center py-1.5 border-b border-[#2A221E] last:border-0"
                  >
                    <span className="text-[#C5BCB4] font-medium">{schedule.days}</span>
                    <span className="font-mono text-[#FAF7F2] tabular-nums font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Phone & Takeout Call */}
            <div className="p-5 rounded-2xl bg-[#1D1916] border border-[#2E2520] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F2CC8F]/10 border border-[#F2CC8F]/30 flex items-center justify-center text-[#F2CC8F]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#8E847C]">Call for Takeout & Information</div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-sm font-semibold text-[#FAF7F2] hover:text-[#E07A5F] transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="text-xs font-semibold text-[#12100E] bg-[#FAF7F2] hover:bg-white py-2 px-3.5 rounded-lg transition-colors"
              >
                Call
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps & Patio Atmosphere (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Embedded Google Map Preview Card */}
            <div className="rounded-2xl overflow-hidden border border-[#2E2520] bg-[#1A1613] shadow-lg flex flex-col h-72 sm:h-80 relative">
              <iframe
                title="Google Maps Location for Los Hermanos Kinder LA"
                src="https://maps.google.com/maps?q=1315+1st+Ave,+Kinder,+LA+70648&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 filter contrast-[1.08] opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer"
                allowFullScreen
              />
              <div className="absolute bottom-3 right-3 bg-[#12100E]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#352D26] text-xs">
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#E07A5F] hover:text-[#CB694F] font-semibold"
                >
                  <span>Open Full Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Atmosphere / Dining Room & Patio Highlight */}
            <div className="relative rounded-2xl overflow-hidden border border-[#2E2520] h-60 sm:h-64 group">
              <img
                src={patioImg}
                alt="Los Hermanos dining room and covered outdoor patio in Kinder, Louisiana"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F2CC8F]">
                  Dining Experience
                </span>
                <h4 className="text-lg font-serif text-[#FAF7F2] mt-0.5">
                  Full Dining Room & Covered Outdoor Patio
                </h4>
                <p className="text-xs text-[#C5BCB4] mt-1 max-w-lg">
                  Ample seating for families, work lunches, and friendly get-togethers in the heart of Kinder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
