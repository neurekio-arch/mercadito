import React, { useState } from 'react';
import { Product, Review, Department } from '../types';
import { X, Star, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSubmitReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  products,
  onSubmitReview,
}) => {
  const [selectedProductId, setSelectedProductId] = useState(products[0]?.id || '');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [department, setDepartment] = useState<Department>('La Paz');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = products.find(p => p.id === selectedProductId);
    if (!product) return;

    onSubmitReview({
      productId: product.id,
      productName: product.name,
      userName: userName || 'Cliente Anónimo',
      department,
      rating,
      comment,
      verifiedPurchase: true,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setComment('');
      setUserName('');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">¡Muchas Gracias!</h3>
            <p className="text-xs text-slate-500 max-w-xs">
              Tu valoración ha sido registrada. Apoyas enormemente el crecimiento de las emprendedoras bolivianas.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-[#007A6E]">
              <MessageSquare className="w-5 h-5 text-[#E41878]" />
              <h3 className="text-base font-extrabold text-slate-900">
                Escribir una Valoración
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Comparte tu experiencia con los productos de artesanas y productoras locales.
            </p>

            {/* Product selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Selecciona el Producto *
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.storeName})
                  </option>
                ))}
              </select>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Calificación *
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 cursor-pointer transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-semibold text-slate-600 ml-2">
                  {rating === 5 ? '¡Excelente!' : rating === 4 ? 'Muy bueno' : rating === 3 ? 'Bueno' : 'Regular'}
                </span>
              </div>
            </div>

            {/* Name & Department */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tu Nombre *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Sofía Vargas"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tu Departamento *</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value as Department)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                >
                  <option value="La Paz">La Paz</option>
                  <option value="Cochabamba">Cochabamba</option>
                  <option value="Tarija">Tarija</option>
                  <option value="Santa Cruz">Santa Cruz</option>
                  <option value="Chuquisaca">Chuquisaca</option>
                  <option value="Oruro">Oruro</option>
                  <option value="Potosí">Potosí</option>
                </select>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Tu Comentario *</label>
              <textarea
                required
                rows={3}
                placeholder="¿Qué te pareció el producto, el empaque o la atención de la artesana?..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00A896] hover:bg-[#007A6E] text-white font-bold text-xs py-3 rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              Publicar Valoración
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
