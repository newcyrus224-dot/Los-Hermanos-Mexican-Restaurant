import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

import quesabirriaImg from '../assets/images/quesabirria_dish_1790997274013.jpg';
import fajitasImg from '../assets/images/fajitas_skillet_1790997284125.jpg';

interface FeaturedShowcaseProps {
  onViewCategory?: (catId: string) => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = () => {
  // Grab the exact items from MENU_ITEMS
  const quesabirriaItem = MENU_ITEMS.find((i) => i.id === 'quesabirrias')!;
  const fajitasItem = MENU_ITEMS.find((i) => i.id === 'fajitas-3amigos')!;
  const camaronesItem = MENU_ITEMS.find((i) => i.id === 'seafood-2')!;
  const ribeyeItem = MENU_ITEMS.find((i) => i.id === 'ribeye-louisiana')!;

  return (
    <section id="featured" className="py-20 bg-[#171411] border-b border-[#2A2421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E07A5F] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>House Specialties & Favorites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#FAF7F2] [text-wrap:balance]">
              Crafted Fresh on the Plancha Daily
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#A89F96] max-w-md">
            Our most popular signature dishes prepared with authentic Mexican marinades in our Kinder kitchen.
          </p>
        </div>

        {/* Featured Grid (2 Large Visual Heroes) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Spotlight 1: Quesabirrias */}
          <div className="group bg-[#1E1A17] rounded-xl overflow-hidden border border-[#322A25] hover:border-[#52443C] transition-all flex flex-col">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-[#2A2421]">
              <img
                src={quesabirriaImg}
                alt="Three golden grilled quesabirria tacos with dipping consome"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#12100E]/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-[#FAF7F2] font-medium border border-white/10 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>★ Signature Birria</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#FAF7F2]">
                    {quesabirriaItem.name}
                  </h3>
                  <span className="text-xl font-semibold text-[#F2CC8F] font-mono tabular-nums">
                    ${quesabirriaItem.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-[#B7ADA5] leading-relaxed mb-4">
                  {quesabirriaItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2D2521] flex items-center justify-between text-xs text-[#8E847C]">
                <span>Served with hot dipping broth · Fresh cilantro, lime & onions</span>
                <span className="text-[#E07A5F] font-medium">Chef's Specialty</span>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Fajita 3 Amigos */}
          <div className="group bg-[#1E1A17] rounded-xl overflow-hidden border border-[#322A25] hover:border-[#52443C] transition-all flex flex-col">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-[#2A2421]">
              <img
                src={fajitasImg}
                alt="Sizzling Fajita 3 Amigos platter with steak, chicken, shrimp, chorizo and carnitas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#12100E]/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-[#FAF7F2] font-medium border border-white/10 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>Ultimate Sizzling Platter</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#FAF7F2]">
                    {fajitasItem.name}
                  </h3>
                  <span className="text-xl font-semibold text-[#F2CC8F] font-mono tabular-nums">
                    ${fajitasItem.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-[#B7ADA5] leading-relaxed mb-4">
                  {fajitasItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2D2521] flex items-center justify-between text-xs text-[#8E847C]">
                <span>Warm flour or corn tortillas · Rice, beans, guacamole & pico</span>
                <span className="text-[#E07A5F] font-medium">Grand Platter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Specialties Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Camarones Hermanos */}
          <div className="p-6 rounded-xl bg-[#1E1A17] border border-[#2D2521] hover:border-[#423730] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs text-[#81B29A] font-medium">De La Costa · Coastal Seafood</span>
                <span className="text-base font-semibold text-[#F2CC8F] font-mono tabular-nums">
                  ${camaronesItem.price.toFixed(2)}
                </span>
              </div>
              <h4 className="text-lg font-serif text-[#FAF7F2] mb-1">
                {camaronesItem.name}
              </h4>
              <p className="text-sm text-[#A89F96] leading-relaxed mb-4">
                {camaronesItem.description}
              </p>
            </div>
            <div className="pt-3 border-t border-[#2A231F] text-xs text-[#8E847C]">
              Served with rice, beans, lettuce, pico de gallo & guacamole
            </div>
          </div>

          {/* Ribeye Louisiana */}
          <div className="p-6 rounded-xl bg-[#1E1A17] border border-[#2D2521] hover:border-[#423730] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs text-[#E07A5F] font-medium">Prime Steaks · House Favorite</span>
                <span className="text-base font-semibold text-[#F2CC8F] font-mono tabular-nums">
                  ${ribeyeItem.price.toFixed(2)}
                </span>
              </div>
              <h4 className="text-lg font-serif text-[#FAF7F2] mb-1">
                {ribeyeItem.name}
              </h4>
              <p className="text-sm text-[#A89F96] leading-relaxed mb-4">
                {ribeyeItem.description}
              </p>
            </div>
            <div className="pt-3 border-t border-[#2A231F] text-xs text-[#8E847C]">
              12oz cut topped with grilled shrimp, sautéed mushrooms & warm queso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
