import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, ShoppingBag, Store, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Badge background styling depending on category or region
  const getBadgeStyle = () => {
    if (product.categoryLabel.toLowerCase().includes('cochabamba') || product.department === 'Cochabamba') {
      return 'bg-amber-100/90 text-amber-900 border-amber-200';
    }
    if (product.categoryLabel.toLowerCase().includes('cosmética') || product.category === 'cosmetica') {
      return 'bg-emerald-100/90 text-emerald-900 border-emerald-200';
    }
    if (product.categoryLabel.toLowerCase().includes('mascota') || product.category === 'mascotas') {
      return 'bg-blue-100/90 text-blue-900 border-blue-200';
    }
    if (product.categoryLabel.toLowerCase().includes('artesanía')) {
      return 'bg-pink-100/90 text-[#E41878] border-pink-200';
    }
    return 'bg-teal-100/90 text-[#007A6E] border-teal-200';
  };

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image Container */}
      <div className="relative aspect-square w-full bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        {/* Category / Region Tag */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${getBadgeStyle()}`}>
            {product.categoryLabel}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label="Guardar en favoritos"
          className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-[#E41878] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-[#E41878] text-[#E41878]' : 'text-slate-400'
            }`}
          />
        </button>

        {/* Product Image with Fallback Container */}
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-slate-100 text-slate-400">
            <ShoppingBag className="w-10 h-10 text-teal-300 mb-2" />
            <span className="text-xs font-semibold text-center text-slate-600 line-clamp-1">{product.name}</span>
            <span className="text-[10px] text-slate-400">{product.storeName}</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {/* Product Content & Details */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between gap-2.5">
        
        <div className="space-y-1">
          {/* Store Name with Store Icon */}
          <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium">
            <Store className="w-3 h-3 text-[#00A896]" />
            <span className="line-clamp-1">Tienda: <strong className="font-semibold text-slate-700">{product.storeName}</strong></span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-[15px] font-bold text-slate-900 leading-snug line-clamp-2 hover:text-[#00A896] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} 
                />
              ))}
            </div>
            <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
          </div>
        </div>

        {/* Bottom Price & Add to Cart button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div>
            <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Precio</span>
            <span className="text-base font-extrabold text-slate-900 tabular-nums">
              {product.price.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-xs font-semibold text-slate-700">Bs.</span>
            </span>
          </div>

          {/* Circular Teal Add to Cart Button */}
          <button
            onClick={() => onAddToCart(product)}
            aria-label={`Añadir ${product.name} al carrito`}
            className="w-9 h-9 rounded-full bg-[#00A896] hover:bg-[#007A6E] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            title="Añadir al carrito"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
