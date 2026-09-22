import React, { useState } from 'react';
import { Logo } from './Logo';
import { ActiveScreen, CategoryId } from '../types';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  User, 
  Store, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  activeScreen: ActiveScreen;
  onNavigate: (screen: ActiveScreen) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: CategoryId;
  onCategoryChange: (cat: CategoryId) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenLogin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('tienda');
  };

  return (
    <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <Logo onClick={() => onNavigate('inicio')} />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-semibold text-slate-700">
            <button
              onClick={() => onNavigate('inicio')}
              className={`transition-colors hover:text-[#00A896] pb-0.5 cursor-pointer ${
                activeScreen === 'inicio' ? 'text-[#00A896] border-b-2 border-[#00A896]' : ''
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate('nosotros')}
              className={`transition-colors hover:text-[#00A896] pb-0.5 cursor-pointer ${
                activeScreen === 'nosotros' ? 'text-[#00A896] border-b-2 border-[#00A896]' : ''
              }`}
            >
              Nosotros
            </button>
            <button
              onClick={() => onNavigate('tienda')}
              className={`transition-colors hover:text-[#00A896] pb-0.5 cursor-pointer ${
                activeScreen === 'tienda' ? 'text-[#00A896] border-b-2 border-[#00A896]' : ''
              }`}
            >
              Nuestra Tienda
            </button>
            <button
              onClick={() => onNavigate('categorias')}
              className={`transition-colors hover:text-[#00A896] pb-0.5 cursor-pointer ${
                activeScreen === 'categorias' ? 'text-[#00A896] border-b-2 border-[#00A896]' : ''
              }`}
            >
              Categorías
            </button>
          </nav>
        </div>

        {/* Center: Search Bar with Category Dropdown */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="hidden md:flex items-center flex-1 max-w-md bg-slate-50 border border-slate-200 rounded-full pl-3.5 pr-1.5 py-1.5 focus-within:border-[#00A896] focus-within:ring-2 focus-within:ring-[#00A896]/15 transition-all shadow-2xs"
        >
          <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Buscar productos, artesanías..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />

          <div className="h-4 w-px bg-slate-300 mx-2 shrink-0" />

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as CategoryId)}
            className="text-[11px] font-medium text-slate-600 bg-transparent focus:outline-none pr-1 cursor-pointer shrink-0"
          >
            <option value="todos">Todas las Categorías</option>
            <option value="arte-diseno">Arte & Diseño</option>
            <option value="alimentos">Alimentos</option>
            <option value="artesanias">Artesanías</option>
            <option value="cosmetica">Cosmética Natural</option>
            <option value="joyeria">Joyería</option>
            <option value="textiles">Ropa & Textiles</option>
            <option value="mascotas">Mascotas</option>
          </select>

          {/* Submit Search button */}
          <button
            type="submit"
            aria-label="Buscar"
            className="w-7 h-7 rounded-full bg-[#00A896] hover:bg-[#007A6E] text-white flex items-center justify-center shrink-0 ml-1 transition-transform active:scale-95 cursor-pointer shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </form>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Ver favoritos"
            className="relative p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          >
            <Heart className="w-5 h-5 text-[#E41878]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E41878] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Ver carrito"
            className="relative p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-[#00A896]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#00A896] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Ingresar Button */}
          <button
            onClick={onOpenLogin}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <User className="w-4 h-4 text-slate-500" />
            <span>Ingresar</span>
          </button>

          {/* Vender CTA Button */}
          <button
            onClick={() => onNavigate('vender')}
            className="flex items-center gap-1.5 bg-[#E41878] hover:bg-[#B80E5E] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Store className="w-4 h-4" />
            <span>Vender</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-3">
          {/* Mobile Search Input */}
          <form onSubmit={handleSearchSubmit} className="flex items-center bg-slate-100 rounded-full px-3 py-2">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Buscar en Mercadito Digital..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-transparent text-xs focus:outline-none"
            />
          </form>

          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <button
              onClick={() => { onNavigate('inicio'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-lg text-left ${activeScreen === 'inicio' ? 'bg-teal-50 text-[#00A896]' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Inicio
            </button>
            <button
              onClick={() => { onNavigate('nosotros'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-lg text-left ${activeScreen === 'nosotros' ? 'bg-teal-50 text-[#00A896]' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Nosotros
            </button>
            <button
              onClick={() => { onNavigate('tienda'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-lg text-left ${activeScreen === 'tienda' ? 'bg-teal-50 text-[#00A896]' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Nuestra Tienda
            </button>
            <button
              onClick={() => { onNavigate('categorias'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-lg text-left ${activeScreen === 'categorias' ? 'bg-teal-50 text-[#00A896]' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Categorías
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <button onClick={onOpenLogin} className="flex items-center gap-1.5 text-slate-600">
              <User className="w-4 h-4" />
              <span>Mi Cuenta / Ingresar</span>
            </button>
            <span className="text-emerald-700 font-medium">100% Hecho en Bolivia</span>
          </div>
        </div>
      )}
    </header>
  );
};
