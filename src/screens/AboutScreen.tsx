import React from 'react';
import { ActiveScreen } from '../types';
import { 
  ShieldCheck, 
  MapPin, 
  Users, 
  Sparkles, 
  Globe, 
  Heart, 
  TrendingUp, 
  Award,
  ArrowRight,
  Store
} from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f8f9ff] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#007A6E] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NUESTRA HISTORIA & COMPROMISO</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Empoderamiento económico para el futuro de Bolivia
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            El <strong>Mercadito Digital</strong> es una plataforma de comercio justo e inclusión tecnológica que conecta a más de 150 jóvenes y mujeres productoras con consumidores conscientes en todo el país.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#00A896] flex items-center justify-center">
              <Heart className="w-6 h-6 fill-[#00A896]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Comercio Justo & Directo</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Eliminamos intermediarios innecesarios. El 100% de los ingresos de cada venta va destinado directamente a las manos de las artesanas y sus familias.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E41878] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Inclusión de Género</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Fortalecemos el liderazgo femenino brindando capacitación integral en marketing digital, finanzas, fotografía de producto y gestión logística.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Sello Hecho en Bolivia</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Rescatamos materias primas autóctonas: fibra de alpaca, miel del Gran Chaco, plantas medicinales de los valles y café orgánico de altura.
            </p>
          </div>
        </div>

        {/* Regional Impact Map & Statistics */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E41878]">
                COBERTURA NACIONAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Presencia activa en 3 departamentos clave
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                El proyecto «Aprender y Fortalecer para Emprender» opera directamente en comunidades urbanas y rurales donde las mujeres lideran iniciativas productivas:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-teal-100 text-[#007A6E] flex items-center justify-center font-bold text-xs shrink-0">
                    LP
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">La Paz & El Alto</h4>
                    <p className="text-[11px] text-slate-500">
                      Especializado en confecciones en alpaca, joyería en plata 950 y nutrición animal artesanal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                    CB
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Cochabamba & Valles Centrales</h4>
                    <p className="text-[11px] text-slate-500">
                      Líderes en cosmética botánica natural, repostería keto y alimentos agroecológicos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-pink-100 text-[#E41878] flex items-center justify-center font-bold text-xs shrink-0">
                    TJ
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Tarija & Gran Chaco</h4>
                    <p className="text-[11px] text-slate-500">
                      Producción de miel cruda silvestre, juguetes educativos y accesorios en mostacilla.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metric Card */}
            <div className="bg-[#007A6E] text-white p-8 rounded-2xl w-full lg:w-80 shadow-lg space-y-6 shrink-0">
              <div className="text-center space-y-1 border-b border-teal-600/60 pb-5">
                <span className="text-4xl font-black tabular-nums">+150</span>
                <span className="block text-xs text-teal-100 font-medium">Emprendedoras Tituladas</span>
              </div>

              <div className="text-center space-y-1 border-b border-teal-600/60 pb-5">
                <span className="text-4xl font-black tabular-nums">100%</span>
                <span className="block text-xs text-teal-100 font-medium">Producción Nacional</span>
              </div>

              <div className="text-center space-y-1">
                <span className="text-4xl font-black tabular-nums">0%</span>
                <span className="block text-xs text-teal-100 font-medium">Comisión por Venta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Backing */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              ALIANZAS INTERNACIONALES
            </span>
            <h3 className="text-2xl font-bold mt-1">
              Financiado por la Unión Europea
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              La Unión Europea apoya decididamente el empoderamiento económico de las mujeres bolivianas como motor fundamental para el desarrollo sostenible, la equidad de género y la erradicación de la pobreza.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('tienda')}
              className="bg-[#00A896] hover:bg-[#007A6E] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explorar el Catálogo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('vender')}
              className="bg-[#E41878] hover:bg-[#B80E5E] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Store className="w-4 h-4" />
              <span>Sumar mi Emprendimiento</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
