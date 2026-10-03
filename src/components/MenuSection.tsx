import React, { useState, useMemo } from 'react';
import { Search, Sparkles, AlertCircle, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { MenuCategory, CATEGORIES, MENU_ITEMS, MENU_PAGES } from '../data/menuData';

export const MenuSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'category' | 'page'>('category');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');
  const [selectedPage, setSelectedPage] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPageGuideModal, setShowPageGuideModal] = useState(false);

  // Filter items based on category or page, and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      let matchesFilter = true;
      if (viewMode === 'category') {
        matchesFilter = selectedCategory === 'all' || item.category === selectedCategory;
      } else {
        matchesFilter = selectedPage === 'all' || item.menuPage === selectedPage;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [viewMode, selectedCategory, selectedPage, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#12100E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E07A5F] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Los Hermanos Kitchen</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF7F2] [text-wrap:balance]">
            Our Authentic Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89F96]">
            Every dish and price transcribed directly from our official printed restaurant menu.
          </p>
        </div>

        {/* Real Menu Verification Notice (Directly answering user's question!) */}
        <div className="max-w-3xl mx-auto mb-10 bg-[#1A1613] border border-[#3A3027] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#81B29A]/15 border border-[#81B29A]/40 text-[#81B29A] flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#FAF7F2]">
                100% Verified From the Official Printed Menu
              </h3>
              <p className="text-xs text-[#A89F96] mt-0.5 leading-relaxed">
                Transcribed directly from the 4 physical menu pages: Combos #1–#12, De La Costa seafood, quesabirrias, 12oz ribeyes, sizzling fajitas, and scratch dips with exact prices.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowPageGuideModal(true)}
            className="text-xs font-semibold text-[#E07A5F] hover:text-[#F2CC8F] flex items-center gap-1 shrink-0 whitespace-nowrap cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#251F1B] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View 4-Page Guide</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* View Mode Toggle: Browse by Category vs Browse by Printed Paper Page */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex p-1 bg-[#181512] rounded-xl border border-[#2D2520]">
            <button
              onClick={() => {
                setViewMode('category');
                setSelectedCategory('all');
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'category'
                  ? 'bg-[#E07A5F] text-[#12100E] shadow-sm'
                  : 'text-[#A89F96] hover:text-[#FAF7F2]'
              }`}
            >
              Browse by Food Category
            </button>
            <button
              onClick={() => {
                setViewMode('page');
                setSelectedPage('all');
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'page'
                  ? 'bg-[#E07A5F] text-[#12100E] shadow-sm'
                  : 'text-[#A89F96] hover:text-[#FAF7F2]'
              }`}
            >
              Browse by Printed Menu Page (1 – 4)
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E847C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. birria, fajitas, shrimp, ribeye)..."
              className="w-full bg-[#1A1613] border border-[#322A25] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#FAF7F2] placeholder-[#736961] focus:outline-none focus:border-[#E07A5F] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8E847C] hover:text-[#FAF7F2] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        {viewMode === 'category' ? (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#FAF7F2] text-[#12100E] font-semibold shadow-sm'
                  : 'bg-[#1C1815] text-[#A89F96] hover:text-[#FAF7F2] hover:bg-[#26201C] border border-[#2D2521]'
              }`}
            >
              All Dishes ({MENU_ITEMS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#FAF7F2] text-[#12100E] font-semibold shadow-sm'
                      : 'bg-[#1C1815] text-[#A89F96] hover:text-[#FAF7F2] hover:bg-[#26201C] border border-[#2D2521]'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            <button
              onClick={() => setSelectedPage('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedPage === 'all'
                  ? 'bg-[#FAF7F2] text-[#12100E] font-semibold shadow-sm'
                  : 'bg-[#1C1815] text-[#A89F96] hover:text-[#FAF7F2] hover:bg-[#26201C] border border-[#2D2521]'
              }`}
            >
              All 4 Menu Pages ({MENU_ITEMS.length})
            </button>
            {MENU_PAGES.map((pg) => {
              const count = MENU_ITEMS.filter((i) => i.menuPage === pg.page).length;
              const isSelected = selectedPage === pg.page;
              return (
                <button
                  key={pg.page}
                  onClick={() => setSelectedPage(pg.page)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#FAF7F2] text-[#12100E] font-semibold shadow-sm'
                      : 'bg-[#1C1815] text-[#A89F96] hover:text-[#FAF7F2] hover:bg-[#26201C] border border-[#2D2521]'
                  }`}
                >
                  Page {pg.page} ({count} items)
                </button>
              );
            })}
          </div>
        )}

        {/* Active Page Header Banner when in Page Mode */}
        {viewMode === 'page' && selectedPage !== 'all' && (
          <div className="mb-6 p-4 rounded-xl bg-[#1C1815] border border-[#302822]">
            {(() => {
              const info = MENU_PAGES.find((p) => p.page === selectedPage);
              if (!info) return null;
              return (
                <div>
                  <div className="text-xs font-semibold text-[#E07A5F] uppercase tracking-wider">
                    {info.title}
                  </div>
                  <h4 className="text-base font-serif text-[#FAF7F2] mt-0.5">
                    {info.subtitle}
                  </h4>
                  <p className="text-xs text-[#A89F96] mt-1">
                    {info.description}
                  </p>
                </div>
              );
            })()}
          </div>
        )}

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#181512] rounded-xl border border-[#2D2521]">
            <p className="text-base text-[#FAF7F2] font-serif">No dishes found</p>
            <p className="text-xs text-[#8E847C] mt-1">
              Try adjusting your search query or select another category/page.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPage('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-semibold text-[#E07A5F] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-5 bg-[#181512] rounded-xl border border-[#2A231E] hover:border-[#3E332C] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-serif text-[#FAF7F2] leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-base font-semibold text-[#F2CC8F] font-mono tabular-nums whitespace-nowrap">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A89F96] leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Options / Add-on notes if applicable */}
                <div className="pt-3 border-t border-[#241E1A] text-xs text-[#8E847C] space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-[#6A6058]">
                    <span>Menu Page {item.menuPage}</span>
                    {item.isFavorite && (
                      <span className="text-[#E07A5F] font-medium">★ House Favorite</span>
                    )}
                  </div>
                  {item.options && (
                    <div className="pt-1">
                      {item.options.map((opt) => (
                        <div key={opt.name} className="text-[#B7ADA5] text-xs">
                          <span className="text-[#E07A5F] font-medium">{opt.name}:</span>{' '}
                          {opt.choices.map((c) => c.label).join(' · ')}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Official Allergy & Food Safety Advisory (Faithful to printed menu) */}
        <div className="mt-16 p-5 rounded-xl bg-[#171411] border border-[#2A2421] text-xs text-[#8E847C] leading-relaxed max-w-4xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#E07A5F] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p>
              <strong className="text-[#C5BCB4]">Health Advisory:</strong> Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.
            </p>
            <p>
              <strong className="text-[#C5BCB4]">Allergen Notice:</strong> Some items served in this establishment may contain food allergens such as peanuts, fish, or seafood. Please alert our team if you or anyone in your party has food allergies.
            </p>
          </div>
        </div>
      </div>

      {/* 4-Page Transcription Guide Modal */}
      {showPageGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#1C1815] border border-[#3A312B] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-[#2C2420] flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E07A5F]">
                  Authenticity Reference
                </span>
                <h3 className="text-2xl font-serif text-[#FAF7F2] mt-1">
                  How Your 4 Menu Pages Were Transcribed
                </h3>
                <p className="text-xs text-[#A89F96] mt-1">
                  Since the paper photo scans can be difficult to read on small screens, here is the exact breakdown of all four pages:
                </p>
              </div>
              <button
                onClick={() => setShowPageGuideModal(false)}
                className="p-1.5 text-[#A89F96] hover:text-[#FAF7F2] rounded-lg hover:bg-[#2A231F] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-[#141210] border border-[#2D2520]">
                <h4 className="font-semibold text-sm text-[#FAF7F2] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E07A5F] text-[#12100E] font-bold text-xs flex items-center justify-center">1</span>
                  Page 1: Daily Combination Specials (#1 - #12)
                </h4>
                <p className="text-[#A89F96] mt-1.5 leading-relaxed">
                  Numbered plates #1 Chicken or Steak Fajitas ($11.21), #2 Chimichanga ($9.51), #3 Chile Relleno ($9.51), #4 Los Hermanos Omelette ($9.51), #5 Huevos con Chorizo ($9.51), #6 Chilaquiles ($9.51), #7 Tacos al Vapor ($9.51), #8 Enchilada Plate ($8.51), #9 Steak Ranchero ($10.51), #10 Burrito Lonchero ($8.51), #11 Gorditas de Picañitas ($8.91), and #12 Flautas ($8.51).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141210] border border-[#2D2520]">
                <h4 className="font-semibold text-sm text-[#FAF7F2] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E07A5F] text-[#12100E] font-bold text-xs flex items-center justify-center">2</span>
                  Page 2: De La Costa Seafood & Pollo Specials
                </h4>
                <p className="text-[#A89F96] mt-1.5 leading-relaxed">
                  Shrimp Cocktail ($13.99), Camarones Hermanos ($13.99), Camarones al Ajo ($14.50), Fish Tacos ($12.50), House Platter ($14.50), Pescado al Vapor ($17.00), Chicken Breasts (Pollo Mexicano $12.99, Pollo con Mole $12.99, Pollo Los Hermanos $13.50, Pollo en Crema $12.50), Taco Salads ($11.99–$14.50), Baked Potatoes, and Veggie Plates.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141210] border border-[#2D2520]">
                <h4 className="font-semibold text-sm text-[#FAF7F2] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E07A5F] text-[#12100E] font-bold text-xs flex items-center justify-center">3</span>
                  Page 3: Burritos, Burgers, Tacos, Platillos & 12oz Ribeyes
                </h4>
                <p className="text-[#A89F96] mt-1.5 leading-relaxed">
                  Burrito California ($12.50), Burri Birria ($12.99), Burrito Mexicano ($14.99), Burgers (Cheese $12.00, Birria $15.00, Hawaiian $13.99), Three Street Tacos ($12.50), Fiesta Tacos ($14.50), Sinach Tacos ($14.50), Quesabirrias with dipping consomé ($14.00), Quesadilla ($11.99), Flautas ($12.50), Enchiladas Verdes/Rancheras/Mole ($12.50), Sopes ($10.50), Chiles Rellenos ($13.50), Tamale Plate ($11.50), Carnitas ($13.99), Steak Mexicano ($15.99), Carne Asada ($15.99), El Rayo ($15.99), Ribeye Ranchero ($20.99), and Ribeye Louisiana ($24.99).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141210] border border-[#2D2520]">
                <h4 className="font-semibold text-sm text-[#FAF7F2] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E07A5F] text-[#12100E] font-bold text-xs flex items-center justify-center">4</span>
                  Page 4: Starters, Sizzling Fajitas, Nachos, Kids & A La Carte
                </h4>
                <p className="text-[#A89F96] mt-1.5 leading-relaxed">
                  Queso Dip ($4.99), Guacamole ($4.75), 8 Wings ($11.99), 3 Amigos Fries ($14.50), Buffalo Fries ($12.99), Fajitas (Steak/Chicken $13.99, Shrimp $14.99, Trio $17.50, Fajita 3 Amigos $17.99), Nachos (Fajita $12.99, Mar y Tierra $15.50, Loaded $12.50), Kids Menu (Nuggets $5.99, Quesadilla $6.50, Mini Birria Pizza $7.99), and single A La Carte items ($1.99–$7.99).
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#141210] border-t border-[#2C2420] text-right">
              <button
                onClick={() => setShowPageGuideModal(false)}
                className="py-2 px-5 rounded-lg bg-[#E07A5F] text-[#12100E] font-semibold text-xs transition-colors cursor-pointer"
              >
                Close & Return to Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
