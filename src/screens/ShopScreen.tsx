import React, { useState, useMemo } from 'react';
import { Product, CategoryId, Department } from '../types';
import { ProductCard } from '../components/ProductCard';
import { 
  Filter, 
  SlidersHorizontal, 
  Search, 
  X, 
  ArrowUpDown, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';

interface ShopScreenProps {
  products: Product[];
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDepartment: Department | 'Todas';
  onDepartmentChange: (dept: Department | 'Todas') => void;
}

const CATEGORY_OPTIONS: { id: CategoryId; label: string }[] = [
  { id: 'todos', label: 'Todas las Categorías' },
  { id: 'arte-diseno', label: 'Arte & Diseño' },
  { id: 'alimentos', label: 'Alimentos & Bebidas' },
  { id: 'artesanias', label: 'Artesanías' },
  { id: 'cosmetica', label: 'Cosmética Natural' },
  { id: 'joyeria', label: 'Joyería' },
  { id: 'textiles', label: 'Ropa & Textiles' },
  { id: 'mascotas', label: 'Mascotas' },
  { id: 'accesorios', label: 'Accesorios' },
];

export const ShopScreen: React.FC<ShopScreenProps> = ({
  products,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(600);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category
        if (selectedCategory !== 'todos' && p.category !== selectedCategory) {
          return false;
        }
        // Department
        if (selectedDepartment !== 'Todas' && p.department !== selectedDepartment) {
          return false;
        }
        // Price
        if (p.price > maxPrice) {
          return false;
        }
        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchStore = p.storeName.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          if (!matchName && !matchStore && !matchDesc) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, selectedDepartment, maxPrice, searchQuery, sortBy]);

  const resetFilters = () => {
    onSelectCategory('todos');
    onDepartmentChange('Todas');
    setMaxPrice(600);
    onSearchChange('');
    setSortBy('featured');
  };

  return (
    <div className="bg-[#f8f9ff] py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Nuestra Tienda & Catálogo Completo
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {filteredProducts.length} productos hechos a mano por productoras bolivianas
            </p>
          </div>

          {/* Sort selector & Mobile filter button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-2xs"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#00A896]" />
              <span>Filtros</span>
            </button>

            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs shadow-2xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-500 font-medium hidden sm:inline">Ordenar:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Menor Precio</option>
                <option value="price-desc">Mayor Precio</option>
                <option value="rating">Mejor Calificados</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Layout: Left Sidebar + Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          
          {/* Left Sidebar (3 cols) */}
          <aside className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-6">
              
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#00A896]" />
                  Filtros de Búsqueda
                </h3>
                {(selectedCategory !== 'todos' || selectedDepartment !== 'Todas' || maxPrice < 600 || searchQuery) && (
                  <button
                    onClick={resetFilters}
                    className="text-[11px] font-bold text-[#E41878] hover:underline cursor-pointer"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {/* Department Filter */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-800 block">Departamento</span>
                <div className="space-y-1 text-xs">
                  {['Todas', 'La Paz', 'Cochabamba', 'Tarija', 'Santa Cruz'].map((dept) => (
                    <button
                      key={dept}
                      onClick={() => onDepartmentChange(dept as any)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                        selectedDepartment === dept
                          ? 'bg-teal-50 text-[#007A6E] font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{dept === 'Todas' ? 'Todos los Departamentos' : dept}</span>
                      {selectedDepartment === dept && <span className="h-1.5 w-1.5 rounded-full bg-[#007A6E]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-800 block">Categorías</span>
                <div className="space-y-1 text-xs">
                  {CATEGORY_OPTIONS.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => onSelectCategory(cat.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-teal-50 text-[#007A6E] font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.label}</span>
                      {selectedCategory === cat.id && <span className="h-1.5 w-1.5 rounded-full bg-[#007A6E]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter Slider */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">Precio Máximo:</span>
                  <span className="font-black text-[#007A6E]">{maxPrice} Bs.</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="600"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#00A896] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>10 Bs.</span>
                  <span>600 Bs.</span>
                </div>
              </div>

              {/* Sello Garantía */}
              <div className="pt-4 border-t border-slate-100 bg-teal-50/70 p-3 rounded-lg text-[11px] text-teal-800 space-y-1">
                <span className="font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#00A896]" />
                  Comercio Solidario
                </span>
                <p className="text-teal-700 leading-snug">
                  Tus compras impulsan directamente el sustento de familias artesanas en Bolivia.
                </p>
              </div>

            </div>
          </aside>

          {/* Right Products Grid (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto stroke-1" />
                <h3 className="text-lg font-bold text-slate-800">No encontramos productos</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Prueba modificando tus términos de búsqueda, la categoría o el rango de precio seleccionado.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#00A896] text-white font-bold text-xs px-5 py-2.5 rounded-full hover:bg-[#007A6E] transition-colors cursor-pointer shadow-xs"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredProducts.map((prod) => (
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
            )}
          </main>

        </div>

      </div>
    </div>
  );
};
