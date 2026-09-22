import React, { useState } from 'react';
import { Product } from '../types';
import { 
  X, 
  Store, 
  Star, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Truck 
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'descripcion' | 'artesano' | 'envios'>('descripcion');

  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `¡Hola! Vi el producto "${product.name}" de la tienda "${product.storeName}" en el Mercadito Digital y me interesa adquirir ${quantity} unidad(es). ¿Está disponible?`
    );
    window.open(`https://wa.me/59171234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Media Gallery */}
          <div className="relative bg-slate-100 p-6 flex flex-col items-center justify-center min-h-[300px]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-h-80 w-full object-contain rounded-xl drop-shadow-md"
            />
            
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              <span className="bg-[#007A6E] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                {product.categoryLabel}
              </span>
              <span className="bg-white/90 text-slate-700 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#00A896]" /> {product.department}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantía de artesanía auténtica</span>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              
              {/* Store header */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Store className="w-3.5 h-3.5 text-[#00A896]" />
                  <span>Tienda: <strong className="text-slate-900">{product.storeName}</strong></span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896]" />
                </div>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className="text-slate-400 hover:text-[#E41878] p-1 transition-colors cursor-pointer"
                  title="Guardar en favoritos"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#E41878] text-[#E41878]' : ''}`} />
                </button>
              </div>

              {/* Product Title */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                <span className="text-xs text-slate-400">({product.reviewCount} valoraciones)</span>
              </div>

              {/* Price */}
              <div className="mt-4 pb-4 border-b border-slate-100 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums">
                  {product.price.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-sm font-bold text-[#007A6E]">Bs.</span>
                <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium ml-2">
                  En Stock ({product.stock} disponibles)
                </span>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 border-b border-slate-100 text-xs font-semibold mt-4">
                <button
                  onClick={() => setActiveTab('descripcion')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'descripcion' ? 'text-[#00A896] border-b-2 border-[#00A896]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Descripción
                </button>
                <button
                  onClick={() => setActiveTab('artesano')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'artesano' ? 'text-[#00A896] border-b-2 border-[#00A896]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Historia de la Productora
                </button>
                <button
                  onClick={() => setActiveTab('envios')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'envios' ? 'text-[#00A896] border-b-2 border-[#00A896]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Envíos
                </button>
              </div>

              {/* Tab Content */}
              <div className="py-3 text-xs text-slate-600 leading-relaxed min-h-[90px]">
                {activeTab === 'descripcion' && (
                  <div className="space-y-2">
                    <p>{product.description}</p>
                    {product.materials && (
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <strong className="text-slate-800">Materiales: </strong>
                        {product.materials}
                      </div>
                    )}
                  </div>
                )}
                {activeTab === 'artesano' && (
                  <p className="italic text-slate-700">
                    &quot;{product.artisanStory || 'Elaborado con amor por mujeres emprendedoras capacitadas por el proyecto EMPRENDER.'}&quot;
                  </p>
                )}
                {activeTab === 'envios' && (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Truck className="w-3.5 h-3.5 text-[#00A896]" />
                      <span>Envíos directos a <strong>La Paz, Cochabamba y Tarija</strong></span>
                    </div>
                    <p className="text-slate-500">
                      Entregas en 24 a 48 horas mediante servicios de encomienda segura o recojo coordinado con la artesana.
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Actions: Quantity + Add to Cart + WhatsApp */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              
              <div className="flex items-center gap-3">
                {/* Quantity stepper */}
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-9 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-xs font-bold text-slate-900 tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-8 h-9 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200 transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-1 bg-[#00A896] hover:bg-[#007A6E] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Añadir al Carrito</span>
                </button>
              </div>

              {/* WhatsApp direct order */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full border border-[#25D366] text-[#128C7E] hover:bg-emerald-50/60 font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Contactar a la Emprendedora por WhatsApp</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
