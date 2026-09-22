import React, { useState } from 'react';
import { Department, CategoryId, ActiveScreen } from '../types';
import { 
  Store, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  UploadCloud, 
  Users, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

interface VendorScreenProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export const VendorScreen: React.FC<VendorScreenProps> = ({ onNavigate }) => {
  const [storeName, setStoreName] = useState('');
  const [artisanName, setArtisanName] = useState('');
  const [department, setDepartment] = useState<Department>('La Paz');
  const [category, setCategory] = useState<CategoryId>('arte-diseno');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [cooperative, setCooperative] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f8f9ff] py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Top Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#E41878] flex items-center justify-center gap-1">
            <Store className="w-3.5 h-3.5" /> PROGRAMA OFICIAL DE INGRESO
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Registra tu Negocio en Mercadito Digital
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Una iniciativa gratuita para mujeres y jóvenes emprendedoras de Bolivia, respaldada por la Unión Europea, ONG FIE y Coordinadora de la Mujer.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-5 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900">
              ¡Postulación Recibida con Éxito!
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Hemos registrado los datos de tu emprendimiento <strong>&quot;{storeName}&quot;</strong>. El equipo técnico del proyecto EMPRENDER se comunicará contigo vía WhatsApp ({whatsapp}) para la sesión de fotos de tus productos y verificación de catálogo.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 max-w-md mx-auto text-xs text-teal-800 space-y-1">
              <span className="font-bold block">Próximos pasos:</span>
              <p className="text-teal-700 leading-normal">
                1. Validación de técnicas artesanales.<br />
                2. Subida de fotos en alta resolución.<br />
                3. Apertura de tu vitrina digital oficial.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('inicio')}
                className="bg-[#00A896] hover:bg-[#007A6E] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            
            {/* Value Props Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 mb-8 border-b border-slate-100 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#00A896] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">100% Gratuito</span>
                  <span className="text-slate-400 text-[11px]">Cero cobros de comisión</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-pink-50 text-[#E41878] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Capacitación</span>
                  <span className="text-slate-400 text-[11px]">Talleres en comercio digital</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Venta Directa</span>
                  <span className="text-slate-400 text-[11px]">Contacto con clientes del país</span>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nombre del Emprendimiento / Marca *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Tejidos Kantuta"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nombre Completo de la Titular *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juana Quispe Mamani"
                    value={artisanName}
                    onChange={(e) => setArtisanName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Departamento de Operación *
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value as Department)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
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

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Rubro / Categoría Principal *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as CategoryId)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                  >
                    <option value="arte-diseno">Arte & Diseño</option>
                    <option value="alimentos">Alimentos & Bebidas</option>
                    <option value="artesanias">Artesanías</option>
                    <option value="cosmetica">Cosmética Natural</option>
                    <option value="joyeria">Joyería & Filigrana</option>
                    <option value="textiles">Ropa & Textiles</option>
                    <option value="mascotas">Mascotas</option>
                    <option value="reposteria">Repostería</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Número de WhatsApp para Pedidos *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 71234567"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Descripción de tus Productos & Proceso de Elaboración *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Cuéntanos qué productos elaboras, qué materiales utilizas (ej. alpaca, plata boliviana, madera local) y cuál es tu técnica artesanal..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  ¿Perteneces a alguna asociación, colectivo o comunidad de mujeres? (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Asociación de Tejedoras de El Alto, Red de Mujeres de Tarija..."
                  value={cooperative}
                  onChange={(e) => setCooperative(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    required
                    className="mt-0.5 accent-[#00A896]"
                  />
                  <span className="text-slate-600 leading-tight">
                    Declaro que mis productos son elaborados en Bolivia de forma artesanal o semi-industrial y acepto los lineamientos de calidad y transparencia del proyecto EMPRENDER.
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#E41878] hover:bg-[#B80E5E] text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-full shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Store className="w-4 h-4" />
                  <span>Enviar Solicitud de Registro</span>
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
