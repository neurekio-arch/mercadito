import React from 'react';
import { Product } from '../types';
import { Star, Store, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

interface FeaturedCommunityProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onViewAllFavorites: () => void;
}

export const FeaturedCommunityProducts: React.FC<FeaturedCommunityProductsProps> = ({
  products,
  onAddToCart,
  onQuickView,
  onViewAllFavorites,
}) => {
  // Grab top 3 items matching screenshot: Lumogalletas, Retratos, Titeres
  const featured = products.filter(p => p.id === 'prod-11' || p.id === 'prod-12' || p.id === 'prod-13');

  return (
    <section className="py-10 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-[#E41878] text-xs font-bold uppercase tracking-wider mb-1">
              <Star className="w-3.5 h-3.5 fill-[#E41878]" />
              <span>RECOMENDADOS POR LA COMUNIDAD</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Productos +valorados
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              Descubre los favoritos de nuestros clientes en todo el país
            </p>
          </div>

          <button
            onClick={onViewAllFavorites}
            className="text-xs sm:text-sm font-bold text-[#00A896] hover:text-[#007A6E] flex items-center gap-1 group cursor-pointer transition-colors"
          >
            <span>Ver todos los favoritos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Image with Tag */}
              <div 
                className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden cursor-pointer"
                onClick={() => onQuickView(prod)}
              >
                {/* Badge top-left */}
                <div className="absolute top-3 left-3 z-10">
                  {prod.id === 'prod-11' && (
                    <span className="bg-pink-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      <Star className="w-3 h-3 fill-white" /> 4.0 Valorado
                    </span>
                  )}
                  {prod.id === 'prod-12' && (
                    <span className="bg-teal-700 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      <Sparkles className="w-3 h-3" /> Exclusivo
                    </span>
                  )}
                  {prod.id === 'prod-13' && (
                    <span className="bg-[#E41878] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      Popular
                    </span>
                  )}
                </div>

                <img
                  src={prod.image}
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="text-teal-700 font-semibold">{prod.categoryLabel}</span>
                    <span className="flex items-center gap-1">
                      <Store className="w-3 h-3 text-slate-400" />
                      Tienda: <strong className="text-slate-700">{prod.storeName}</strong>
                    </span>
                  </div>

                  <h3 
                    onClick={() => onQuickView(prod)}
                    className="font-bold text-slate-900 text-base hover:text-[#00A896] transition-colors cursor-pointer line-clamp-1"
                  >
                    {prod.name}
                  </h3>

                  <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Rating display */}
                  <div className="flex items-center gap-1 text-amber-500 text-xs pt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3.5 h-3.5 ${i < Math.floor(prod.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-bold text-slate-700 ml-1">{prod.rating.toFixed(2)} de 5</span>
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-slate-900 tabular-nums">
                    {prod.price.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                    <span className="text-xs font-semibold text-slate-600">Bs.</span>
                  </span>

                  <button
                    onClick={() => onAddToCart(prod)}
                    className="flex items-center gap-1.5 bg-[#00A896] hover:bg-[#007A6E] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-2xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Añadir</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
