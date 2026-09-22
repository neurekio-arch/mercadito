import React, { useState } from 'react';
import { CartItem, Department } from '../types';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  ArrowRight, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  department: Department;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  department,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'delivery' | 'transfer'>('qr');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal > 150 ? 0 : 15.0;
  const total = subtotal + (items.length > 0 ? shipping : 0);

  const handleFinishOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const handleWhatsAppSend = () => {
    const summaryList = items
      .map(i => `• ${i.quantity}x ${i.product.name} (Tienda: ${i.product.storeName}) - ${(i.product.price * i.quantity).toFixed(2)} Bs.`)
      .join('\n');
    
    const message = encodeURIComponent(
      `¡Hola Mercadito Digital! Deseo confirmar mi pedido:\n\n${summaryList}\n\n` +
      `Subtotal: ${subtotal.toFixed(2)} Bs.\n` +
      `Envío (${department}): ${shipping === 0 ? 'GRATIS' : shipping.toFixed(2) + ' Bs.'}\n` +
      `Total: ${total.toFixed(2)} Bs.\n\n` +
      `Datos del cliente:\nNombre: ${customerName}\nTeléfono: ${customerPhone}\nDirección: ${customerAddress}, ${department}\nMétodo de pago: ${paymentMethod.toUpperCase()}`
    );

    window.open(`https://wa.me/59171234567?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#00A896]" />
            <h3 className="font-extrabold text-slate-900 text-base">
              Tu Carrito de Compras
            </h3>
            <span className="text-xs bg-teal-100 text-[#007A6E] font-bold px-2 py-0.5 rounded-full">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <ShoppingBag className="w-16 h-16 text-slate-200 mb-3 stroke-1" />
              <p className="font-bold text-slate-700 text-sm">Tu carrito está vacío</p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Explora las creaciones de las artesanas y emprendedoras de Bolivia para añadir productos.
              </p>
              <button
                onClick={onClose}
                className="mt-5 bg-[#00A896] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-xs cursor-pointer hover:bg-[#007A6E] transition-colors"
              >
                Comenzar a Comprar
              </button>
            </div>
          ) : checkoutStep === 'cart' ? (
            <div className="space-y-3">
              {items.map((item) => (
                <div 
                  key={item.product.id}
                  className="p-3 bg-white rounded-xl border border-slate-200 flex gap-3 shadow-2xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover bg-slate-100 shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <span className="text-[10px] text-slate-400 font-medium block">
                          Tienda: {item.product.storeName}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 truncate">
                          {item.product.name}
                        </h4>
                      </div>
                      
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-slate-300 hover:text-red-500 transition-colors p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-slate-200 rounded-md bg-slate-50 text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200"
                        >
                          -
                        </button>
                        <span className="w-7 text-center font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-extrabold text-slate-900 tabular-nums">
                        {(item.product.price * item.quantity).toFixed(2)} Bs.
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Free shipping progress */}
              <div className="bg-teal-50 border border-teal-200/70 rounded-xl p-3 text-xs text-teal-800 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#007A6E] shrink-0" />
                <span>
                  {subtotal >= 150
                    ? '¡Felicidades! Tienes envío bonificado para tu pedido.'
                    : `Agrega ${(150 - subtotal).toFixed(2)} Bs. más para obtener envío gratuito.`}
                </span>
              </div>
            </div>
          ) : checkoutStep === 'checkout' ? (
            <form id="checkout-form" onSubmit={handleFinishOrder} className="space-y-4 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-700">
                <h4 className="font-bold text-slate-900 mb-1">Datos de Envío a {department}</h4>
                <p className="text-[11px] text-slate-500">Coordinaremos la entrega directa con las productoras.</p>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Carmen Salinas"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Celular / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="Ej. 71234567"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Dirección de Entrega *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Zona, calle, número de casa o referencia..."
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Método de Pago</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('qr')}
                    className={`p-2 rounded-lg border text-center font-bold cursor-pointer transition-colors ${
                      paymentMethod === 'qr'
                        ? 'border-[#00A896] bg-teal-50 text-[#007A6E]'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    QR Simple
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('delivery')}
                    className={`p-2 rounded-lg border text-center font-bold cursor-pointer transition-colors ${
                      paymentMethod === 'delivery'
                        ? 'border-[#00A896] bg-teal-50 text-[#007A6E]'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    Contra Entrega
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('transfer')}
                    className={`p-2 rounded-lg border text-center font-bold cursor-pointer transition-colors ${
                      paymentMethod === 'transfer'
                        ? 'border-[#00A896] bg-teal-50 text-[#007A6E]'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    Transferencia
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                ¡Pedido Generado con Éxito!
              </h4>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Gracias por apoyar a las emprendedoras de Bolivia. Hemos preparado tu comprobante digital.
              </p>

              <button
                onClick={handleWhatsAppSend}
                className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Pedido por WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onClearCart();
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Volver a la tienda
              </button>
            </div>
          )}

        </div>

        {/* Footer Summary & Action */}
        {items.length > 0 && checkoutStep !== 'success' && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span className="font-semibold tabular-nums text-slate-800">{subtotal.toFixed(2)} Bs.</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Envío estimado ({department})</span>
                <span className="font-semibold tabular-nums text-slate-800">
                  {shipping === 0 ? <span className="text-emerald-600">Gratis</span> : `${shipping.toFixed(2)} Bs.`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total a Pagar</span>
                <span className="text-[#007A6E] tabular-nums">{total.toFixed(2)} Bs.</span>
              </div>
            </div>

            {checkoutStep === 'cart' ? (
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full bg-[#00A896] hover:bg-[#007A6E] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Continuar con la Compra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="px-3 py-2.5 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex-1 bg-[#E41878] hover:bg-[#B80E5E] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirmar Pedido</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
