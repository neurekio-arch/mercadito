import React from 'react';
import { X, HelpCircle, MessageCircle, Phone, Truck, ShieldCheck } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#007A6E] mb-3">
          <HelpCircle className="w-6 h-6 text-[#00A896]" />
          <h3 className="text-lg font-extrabold text-slate-900">
            Centro de Ayuda & Preguntas Frecuentes
          </h3>
        </div>

        <div className="space-y-3.5 text-xs text-slate-600 max-h-[70vh] overflow-y-auto pr-1">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-4 h-4 text-[#00A896]" /> ¿Qué es Mercadito Digital?
            </h4>
            <p className="leading-relaxed">
              Es una vitrina virtual promovida por el proyecto «Aprender y Fortalecer para Emprender», financiado por la Unión Europea y ejecutado por Coordinadora de la Mujer en alianza con ONG FIE, CCIMCAT e IFFI, para visibilizar e impulsar las ventas de productoras bolivianas.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <Truck className="w-4 h-4 text-[#00A896]" /> ¿Cómo funcionan los envíos?
            </h4>
            <p className="leading-relaxed">
              Los envíos se realizan desde los talleres de las productoras en La Paz, Cochabamba y Tarija hacia todo el país. Al realizar tu pedido, se coordinará la entrega a domicilio o retiro mediante courier y mensajería directa.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <Phone className="w-4 h-4 text-[#00A896]" /> ¿Cuáles son los métodos de pago?
            </h4>
            <p className="leading-relaxed">
              Puedes abonar mediante QR Simple boliviano (interbancario), transferencia bancaria directa o contra entrega en efectivo según la disponibilidad de la tienda artesanal.
            </p>
          </div>

          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200 text-teal-900 flex items-center justify-between gap-3">
            <div>
              <p className="font-bold">¿Necesitas soporte personalizado?</p>
              <p className="text-[11px] text-teal-700">Comunícate con nuestro equipo técnico en Bolivia</p>
            </div>
            <a
              href="https://wa.me/59171234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
