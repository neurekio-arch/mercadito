import React from 'react';
import { MessageSquare, Store, Quote, Sparkles } from 'lucide-react';

interface CommunityReviewSectionProps {
  onOpenWriteReview: () => void;
  onRegisterBusiness: () => void;
}

export const CommunityReviewSection: React.FC<CommunityReviewSectionProps> = ({
  onOpenWriteReview,
  onRegisterBusiness,
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Deep Teal Card Container */}
        <div className="bg-[#007A6E] rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          
          {/* Subtle background wave/circles decoration */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-teal-600/30 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Call to review */}
            <div className="lg:col-span-6 flex flex-col items-start gap-4">
              {/* Icon badge in pink/magenta */}
              <div className="w-12 h-12 rounded-xl bg-[#E41878] flex items-center justify-center text-white shadow-md">
                <MessageSquare className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-teal-200">
                  ¿NO VALORASTE UN PRODUCTO?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  ¡Realiza la valoración de los productos y apoya lo nuestro!
                </h3>
                <p className="text-teal-100 text-xs sm:text-sm max-w-lg leading-relaxed font-light">
                  Tus comentarios ayudan a las productoras a ganar credibilidad y expandir sus ventas digitales en todo el país.
                </p>
              </div>

              <button
                onClick={onOpenWriteReview}
                className="mt-2 bg-white hover:bg-teal-50 text-[#007A6E] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Escribir una Valoración
              </button>
            </div>

            {/* Right Column: Quotes */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Quote 1 */}
              <div className="bg-teal-800/60 backdrop-blur-xs border border-teal-600/50 rounded-xl p-5 relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white text-sm sm:text-base font-medium italic leading-snug">
                      “Un espacio hecho para mostrar lo mejor del talento emprendedor boliviano.”
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-teal-200">
                      <span className="font-bold text-emerald-300">ONG FIE</span>
                      <span>•</span>
                      <span>Mercadito Digital</span>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-teal-400/40 shrink-0 rotate-180" />
                </div>
              </div>

              {/* Quote 2 */}
              <div className="bg-teal-800/60 backdrop-blur-xs border border-teal-600/50 rounded-xl p-5 relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white text-sm sm:text-base font-medium italic leading-snug">
                      “Tu emprendimiento merece estar en el mapa digital.”
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-teal-200">
                      <span className="font-bold text-emerald-300">ONG FIE</span>
                      <span>•</span>
                      <span>Mercadito Digital</span>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-teal-400/40 shrink-0 rotate-180" />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Banner Ribbon: Join as merchant */}
          <div className="mt-8 pt-6 border-t border-teal-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-emerald-100">
              <Store className="w-5 h-5 text-teal-300 shrink-0" />
              <span>¿Eres emprendedora en Bolivia? Suma tu tienda hoy.</span>
            </div>

            <button
              onClick={onRegisterBusiness}
              className="bg-[#E41878] hover:bg-[#B80E5E] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              Registra tu Negocio
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
