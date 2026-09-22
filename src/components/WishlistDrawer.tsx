import React from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#E41878] fill-[#E41878]" />
            <h3 className="font-extrabold text-slate-900 text-base">
              Tus Productos Favoritos
            </h3>
            <span className="text-xs bg-pink-100 text-[#E41878] font-bold px-2 py-0.5 rounded-full">
              {wishlist.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <Heart className="w-16 h-16 text-slate-200 mb-3 stroke-1" />
              <p className="font-bold text-slate-700 text-sm">No tienes favoritos guardados</p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Guarda los productos que más te gusten haciendo clic en el corazón para comprarlos más tarde.
              </p>
            </div>
          ) : (
            wishlist.map((prod) => (
              <div 
                key={prod.id} 
                className="p-3 bg-white rounded-xl border border-slate-200 flex gap-3 shadow-2xs items-center justify-between"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-lg object-cover bg-slate-100 shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 font-medium block">
                      Tienda: {prod.storeName}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {prod.name}
                    </h4>
                    <span className="text-xs font-black text-slate-900 tabular-nums">
                      {prod.price.toFixed(2)} Bs.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onAddToCart(prod);
                      onRemoveFromWishlist(prod);
                    }}
                    title="Mover al carrito"
                    className="w-8 h-8 rounded-full bg-[#00A896] hover:bg-[#007A6E] text-white flex items-center justify-center transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(prod)}
                    title="Eliminar de favoritos"
                    className="p-1.5 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <button
            onClick={onClose}
            className="w-full py-2.5 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Seguir Explorando
          </button>
        </div>

      </div>
    </div>
  );
};
