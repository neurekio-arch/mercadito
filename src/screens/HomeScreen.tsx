import React, { useState, useRef } from 'react';
import { Product, CategoryId, ActiveScreen } from '../types';
import { HERO_IMAGE } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { FeaturedCommunityProducts } from '../components/FeaturedCommunityProducts';
import { CommunityReviewSection } from '../components/CommunityReviewSection';
import { GovernanceSection } from '../components/GovernanceSection';
import { 
  ShoppingBag, 
  Store, 
  Users, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Palette, 
  Utensils, 
  Wrench, 
  Gem, 
  Shirt, 
  Dog, 
  Cake, 
  ArrowRight,
  Award
} from 'lucide-react';

interface HomeScreenProps {
  products: Product[];
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onNavigate: (screen: ActiveScreen) => void;
  onSelectCategory: (cat: CategoryId) => void;
  onOpenReviewModal: () => void;
}

const CATEGORIES_HIGHLIGHT = [
  { id: 'arte-diseno', name: 'Arte & Diseño', sub: 'Manualidades, Retratos', icon: Palette, bg: 'bg-blue-50 text-blue-700' },
  { id: 'alimentos', name: 'Alimentos', sub: 'Keto, Miel & Granos', icon: Utensils, bg: 'bg-emerald-50 text-emerald-700' },
  { id: 'artesanias', name: 'Artesanías', sub: 'Tejidos & Cerámica', icon: Wrench, bg: 'bg-pink-50 text-[#E41878]' },
  { id: 'cosmetica', name: 'Cosmética...', sub: 'Cremas & Óleos', icon: Sparkles, bg: 'bg-teal-50 text-[#00A896]' },
  { id: 'joyeria', name: 'Joyería', sub: 'Aros, Collares', icon: Gem, bg: 'bg-purple-50 text-purple-700' },
  { id: 'mascotas', name: 'Mascotas', sub: 'Snacks Lumopet', icon: Dog, bg: 'bg-amber-50 text-amber-700' },
  { id: 'textiles', name: 'Ropa & Textiles', sub: 'Alpaca & Moda', icon: Shirt, bg: 'bg-cyan-50 text-cyan-700' },
  { id: 'reposteria', name: 'Repostería', sub: 'Tortas & Postres', icon: Cake, bg: 'bg-rose-50 text-rose-700' },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  products,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onNavigate,
  onSelectCategory,
  onOpenReviewModal,
}) => {
  const [catalogFilter, setCatalogFilter] = useState<'todos' | 'arte-diseno' | 'alimentos' | 'mascotas'>('todos');
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Filter products for the catalog section
  const catalogProducts = products.filter(p => {
    if (catalogFilter === 'todos') return true;
    return p.category === catalogFilter;
  }).slice(0, 10);

  return (
    <div className="bg-[#f8f9ff]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-10 pb-12 bg-gradient-to-b from-white to-[#f8f9ff] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Official Platform Tag */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-[#E41878] text-xs font-bold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Plataforma Oficial de Empoderamiento Económico</span>
              </div>

              {/* Headings */}
              <div className="space-y-2">
                <span className="block text-xs sm:text-sm font-black uppercase tracking-widest text-slate-400">
                  BIENVENID@ A
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Una vitrina virtual para el{' '}
                  <span className="text-[#00A896] underline decoration-wavy decoration-[#00A896]/60">
                    empoderamiento
                  </span>{' '}
                  de jóvenes y mujeres
                </h1>
              </div>

              {/* Subtitle paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                En el <strong className="text-slate-900 font-semibold">Mercadito Digital</strong> encontrarás una gran variedad de servicios y productos <span className="text-[#E41878] font-bold">¡100% nacionales!</span> Conectando a emprendedoras y artesanos de La Paz, Cochabamba y Tarija con clientes de todo el país.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('tienda')}
                  className="bg-[#00A896] hover:bg-[#007A6E] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explorar Productos</span>
                </button>

                <button
                  onClick={() => onNavigate('nosotros')}
                  className="border-1.5 border-[#00A896] text-[#007A6E] hover:bg-teal-50 font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Store className="w-4 h-4" />
                  <span>Conoce las Tiendas</span>
                </button>
              </div>

              {/* Trust & Stats Pills */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 max-w-lg">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#00A896] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-slate-900">+150</span>
                    <span className="text-[10px] text-slate-500 font-medium">Emprendedoras</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 text-[#E41878] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-slate-900">3 Regiones</span>
                    <span className="text-[10px] text-slate-500 font-medium">LPZ, CBBA, TJA</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-slate-900">100%</span>
                    <span className="text-[10px] text-slate-500 font-medium">Hecho en Bolivia</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Featured Banner Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-xl overflow-hidden group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src={HERO_IMAGE}
                    alt="Feria de Productoras Bolivianas"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent flex flex-col justify-between p-5 text-white">
                    {/* Top pill */}
                    <div className="self-start">
                      <span className="bg-[#E41878] text-white text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <Award className="w-3.5 h-3.5" />
                        Talento Local Boliviano
                      </span>
                    </div>

                    {/* Bottom Title inside Photo */}
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        Feria de Productores y Productoras
                      </h3>
                      <p className="text-xs text-slate-200 mt-0.5">
                        Productos directos sin intermediarios, apoyando a familias locales.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Ribbon below Photo */}
                <div className="p-3.5 flex items-center justify-between text-xs bg-slate-50/70 rounded-b-xl">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Proyecto &quot;EMPRENDER&quot; - Para crecer y fortalecer negocios locales</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Oficial
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CATEGORÍAS DESTACADAS (Carousel / Slider) */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A896] flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> EXPLORA NUESTRO CATÁLOGO
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Categorías Destacadas
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollCarousel('left')}
                aria-label="Anterior categoría"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 transition-colors cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                aria-label="Siguiente categoría"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 transition-colors cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Cards */}
          <div 
            ref={carouselRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-none pb-2 scroll-smooth"
          >
            {CATEGORIES_HIGHLIGHT.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id as CategoryId);
                    onNavigate('tienda');
                  }}
                  className="w-36 sm:w-40 shrink-0 bg-[#F9FAFB] hover:bg-white p-4 rounded-xl border border-slate-200/80 hover:border-[#00A896] shadow-2xs hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${cat.bg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#00A896] transition-colors line-clamp-1">
                    {cat.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                    {cat.sub}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CATÁLOGO VERIFICADO - NUESTROS PRODUCTOS (10 products grid) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Section Header & Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E41878] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> CATÁLOGO VERIFICADO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                Nuestros productos
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Producción artesanal directa de emprendimientos apoyados en Bolivia
              </p>
            </div>

            {/* Filter Tabs matching screenshot: Todos, Arte & Diseño, Alimentos, Mascotas */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-full shadow-2xs">
              {(['todos', 'arte-diseno', 'alimentos', 'mascotas'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCatalogFilter(tab)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    catalogFilter === tab
                      ? 'bg-[#007A6E] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab === 'todos' ? 'Todos' : tab === 'arte-diseno' ? 'Arte & Diseño' : tab === 'alimentos' ? 'Alimentos' : 'Mascotas'}
                </button>
              ))}
            </div>
          </div>

          {/* 10 Products Grid (matching screenshot layout) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {catalogProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                isWishlisted={wishlist.some(w => w.id === prod.id)}
                onToggleWishlist={onToggleWishlist}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>

          {/* Call To Action: Ver catálogo completo */}
          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('tienda')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#007A6E] hover:text-[#00A896] py-2.5 px-6 rounded-full border border-[#007A6E]/30 hover:border-[#007A6E] bg-white transition-all shadow-2xs cursor-pointer group"
            >
              <span>Ver catálogo completo con más de 200 productos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. PRODUCTOS +VALORADOS (3 featured cards) */}
      <FeaturedCommunityProducts
        products={products}
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
        onViewAllFavorites={() => onNavigate('tienda')}
      />

      {/* 5. TEAL COMMUNITY & REVIEW BANNER */}
      <CommunityReviewSection
        onOpenWriteReview={onOpenReviewModal}
        onRegisterBusiness={() => onNavigate('vender')}
      />

      {/* 6. GOBERNANZA & ALIANZAS ESTRATÉGICAS */}
      <GovernanceSection />

    </div>
  );
};
