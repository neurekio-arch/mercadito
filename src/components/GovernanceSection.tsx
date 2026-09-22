import React from 'react';
import { TrendingUp, Truck, Users, ShieldCheck, AlertCircle, Globe, Heart } from 'lucide-react';

export const GovernanceSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#F9FAFB] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#00A896]">
            GOBERNANZA & ALIANZAS ESTRATÉGICAS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            ¿Quién impulsa esta iniciativa?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Este proyecto es financiado por la <strong className="text-slate-900 font-semibold">Unión Europea</strong> y ejecutado por la <strong className="text-slate-900 font-semibold">Coordinadora de la Mujer</strong>, en alianza con organizaciones con vasta trayectoria social:
          </p>
        </div>

        {/* 4 Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          
          {/* Card 1: Unión Europea */}
          <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#003399] text-white flex items-center justify-center font-bold text-xl mb-3 shadow-xs">
              €
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              FINANCIAMIENTO
            </span>
            <h4 className="text-base font-bold text-slate-900 mb-1">
              Unión Europea
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Cooperación para el desarrollo inclusivo y derechos económicos.
            </p>
          </div>

          {/* Card 2: ONG FIE */}
          <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#E41878] text-white flex items-center justify-center mb-3 shadow-xs">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              ALIADO CLAVE
            </span>
            <h4 className="text-base font-bold text-slate-900 mb-1">
              ONG FIE
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Centro de Fomento a Iniciativas Económicas en Bolivia.
            </p>
          </div>

          {/* Card 3: CCIMCAT */}
          <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#00A896] text-white flex items-center justify-center mb-3 shadow-xs">
              <Truck className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              ALIADO TARIJA
            </span>
            <h4 className="text-base font-bold text-slate-900 mb-1">
              CCIMCAT
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Capacitación e Investigación de la Mujer Campesina de Tarija.
            </p>
          </div>

          {/* Card 4: IFFI */}
          <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#007A6E] text-white flex items-center justify-center mb-3 shadow-xs">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              ALIADO INTEGRAL
            </span>
            <h4 className="text-base font-bold text-slate-900 mb-1">
              IFFI
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Instituto de Formación Femenina Integral.
            </p>
          </div>

        </div>

        {/* EU Institutional Disclaimer Banner */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-start gap-3.5">
            {/* European Flag representation */}
            <div className="w-8 h-8 rounded bg-[#003399] flex items-center justify-center text-yellow-300 font-bold shrink-0 text-sm shadow-xs">
              ★
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
              &quot;Este sitio web ha sido creado y mantenido con el apoyo financiero de la <strong className="text-slate-800">Unión Europea</strong>. Su contenido es responsabilidad exclusiva del proyecto «Aprender y Fortalecer para Emprender» y no necesariamente refleja los puntos de vista de la Unión Europea.&quot;
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blue-200 rounded-full text-xs font-semibold text-[#003399] shrink-0 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Comercio Seguro & Transparente</span>
          </div>
        </div>

        {/* Pink Alert Box: Marketplace Disclaimer */}
        <div className="bg-pink-50/70 border border-pink-200 rounded-xl p-3.5 sm:p-4 flex items-start gap-3 text-xs text-pink-950 mb-6">
          <AlertCircle className="w-4 h-4 text-[#E41878] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Nota importante:</strong> Mercadito Digital es una vitrina de emprendimientos que exponen productos y/o servicios de los proveedores; la responsabilidad de venta y entregas de los mismos es exclusiva del proveedor.
          </p>
        </div>

        {/* Bottom Institutional Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 pt-3 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#003399]">€</span>
            <span>Proyecto financiado por la <strong>Unión Europea</strong>, ejecutado por <strong>Coordinadora de la Mujer</strong> en alianza con <strong>ONG FIE</strong>, <strong>CCIMCAT</strong> e <strong>IFFI</strong>.</span>
          </div>

          <div className="flex items-center gap-4 text-[#007A6E] font-medium shrink-0">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> Cooperación Internacional
            </span>
            <span className="flex items-center gap-1 text-[#E41878]">
              <Heart className="w-3.5 h-3.5 fill-[#E41878]" /> Empoderamiento Femenino
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
