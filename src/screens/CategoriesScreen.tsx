import React from 'react';
import { CategoryId, ActiveScreen } from '../types';
import { 
  Palette, 
  Utensils, 
  Wrench, 
  Sparkles, 
  Gem, 
  Shirt, 
  Dog, 
  Cake, 
  Package, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface CategoriesScreenProps {
  onSelectCategory: (cat: CategoryId) => void;
  onNavigate: (screen: ActiveScreen) => void;
}

const CATEGORY_SECTORS = [
  {
    id: 'arte-diseno' as CategoryId,
    title: 'Arte & Diseño',
    subtitle: 'Ilustración, grabado, papelería y recuerdos andinos',
    icon: Palette,
    accent: 'from-blue-500 to-cyan-600',
    stats: '24 artesanas activas',
    description: 'Creaciones visuales contemporáneas inspiradas en la flora, fauna y cosmovisión boliviana.',
  },
  {
    id: 'alimentos' as CategoryId,
    title: 'Alimentos & Agroecología',
    subtitle: 'Café de altura, miel pura chaqueña, repostería keto y granos andinos',
    icon: Utensils,
    accent: 'from-emerald-500 to-teal-600',
    stats: '38 productoras',
    description: 'Transformación artesanal de productos agrícolas cultivados de manera limpia y sostenible.',
  },
  {
    id: 'artesanias' as CategoryId,
    title: 'Artesanías Tradicionales',
    subtitle: 'Cerámica, tallados en madera, títeres de tela y cestería',
    icon: Wrench,
    accent: 'from-pink-500 to-rose-600',
    stats: '31 talleres',
    description: 'Saberes heredados de madres a hijas que preservan el patrimonio cultural boliviano.',
  },
  {
    id: 'cosmetica' as CategoryId,
    title: 'Cosmética Natural & Bienestar',
    subtitle: 'Cremas de rosa mosqueta, jabones saponificados y óleos botánicos',
    icon: Sparkles,
    accent: 'from-teal-500 to-emerald-600',
    stats: '19 laboratorios artesanales',
    description: 'Fórmulas limpias, biodegradables y libres de crueldad animal a base de botánica local.',
  },
  {
    id: 'joyeria' as CategoryId,
    title: 'Joyería & Filigrana',
    subtitle: 'Alianzas, aros en plata 950 boliviana y piedras semipreciosas',
    icon: Gem,
    accent: 'from-purple-500 to-indigo-600',
    stats: '15 maestras orfebres',
    description: 'Piezas exclusivas talladas a mano con plata certificada y técnicas de filigrana andina.',
  },
  {
    id: 'textiles' as CategoryId,
    title: 'Ropa & Textiles de Alpaca',
    subtitle: 'Chales, ponchos, poleras con toques de aguayo y tejidos finos',
    icon: Shirt,
    accent: 'from-cyan-600 to-blue-700',
    stats: '42 tejedoras',
    description: 'Moda sostenible y térmica confeccionada en fibra pura de alpaca y algodón de alta calidad.',
  },
  {
    id: 'mascotas' as CategoryId,
    title: 'Nutrición & Cuidado de Mascotas',
    subtitle: 'Snacks deshidratados saludables, galletas de pollo e indumentaria canina',
    icon: Dog,
    accent: 'from-amber-500 to-orange-600',
    stats: '12 emprendimientos',
    description: 'Nutrición natural formulada por veterinarias para consentir sanamente a perros y gatos.',
  },
  {
    id: 'reposteria' as CategoryId,
    title: 'Repostería Saludable',
    subtitle: 'Brownies keto, tortas libres de gluten y dulces tradicionales',
    icon: Cake,
    accent: 'from-rose-500 to-pink-600',
    stats: '16 pastelerías artesanales',
    description: 'Opciones nutritivas y deliciosas aptas para celíacos, diabéticos y paladares gourmet.',
  },
];

export const CategoriesScreen: React.FC<CategoriesScreenProps> = ({
  onSelectCategory,
  onNavigate,
}) => {
  return (
    <div className="bg-[#f8f9ff] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A896]">
            SECTORES PRODUCTIVOS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Descubre las Categorías del Mercadito
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            Cada sector reúne a emprendedoras bolivianas apoyadas por el proyecto EMPRENDER, garantizando calidad, autenticidad y comercio justo.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORY_SECTORS.map((sector) => {
            const Icon = sector.icon;

            return (
              <div
                key={sector.id}
                onClick={() => {
                  onSelectCategory(sector.id);
                  onNavigate('tienda');
                }}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${sector.accent} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00A896] transition-colors">
                    {sector.title}
                  </h3>

                  <span className="inline-block text-[11px] font-semibold text-[#E41878] mt-1 mb-2">
                    {sector.stats}
                  </span>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#007A6E]">
                  <span>Ver Productos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#007A6E] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">¿Tienes un taller o negocio en alguna de estas áreas?</h3>
            <p className="text-xs text-teal-100 font-light">
              Postula para recibir capacitación, vitrina digital y apoyo comercial gratuito.
            </p>
          </div>

          <button
            onClick={() => onNavigate('vender')}
            className="bg-[#E41878] hover:bg-[#B80E5E] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-md shrink-0 cursor-pointer"
          >
            Registrar mi Negocio
          </button>
        </div>

      </div>
    </div>
  );
};
