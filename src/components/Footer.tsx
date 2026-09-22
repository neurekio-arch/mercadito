import React from 'react';
import { ActiveScreen, CategoryId } from '../types';
import { 
  Globe, 
  Share2, 
  MessageCircle, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ActiveScreen) => void;
  onSelectCategory: (cat: CategoryId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  return (
    <footer className="bg-[#121c2a] text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800 text-xs">
          
          {/* Col 1: Identity & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-[#00A896]">Mercadito</span>
              <span className="text-xl font-extrabold text-[#E41878]">Digital</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Una vitrina virtual para el empoderamiento económico de jóvenes y mujeres microemprendedoras de Bolivia. Fomentamos el comercio justo, sostenible y local con estándares de calidad y transparencia.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a 
                href="#web" 
                aria-label="Sitio web oficial"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00A896] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href="#compartir" 
                aria-label="Compartir catálogo"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00A896] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/59171234567" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp Soporte"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contacto@mercaditodigital.bo" 
                aria-label="Correo de contacto"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#E41878] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: ENLACES DE INTERÉS (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              ENLACES DE INTERÉS
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-white transition-colors cursor-pointer">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('nosotros')} className="hover:text-white transition-colors cursor-pointer">
                  ¿Quiénes Somos?
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vender')} className="hover:text-white transition-colors cursor-pointer">
                  Registra tu Emprendimiento
                </button>
              </li>
              <li>
                <a href="#pagos-envios" className="hover:text-white transition-colors">
                  Medios de Pago & Envíos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto & Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: CATEGORÍAS POPULARES (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              CATEGORÍAS POPULARES
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => { onSelectCategory('arte-diseno'); onNavigate('tienda'); }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Arte & Diseño Gráfico
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('alimentos'); onNavigate('tienda'); }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Alimentos & Bebidas Artesanales
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('artesanias'); onNavigate('tienda'); }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Artesanías Bolivianas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('cosmetica'); onNavigate('tienda'); }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Cosmética Natural & Ecológica
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('joyeria'); onNavigate('tienda'); }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Joyería & Bisutería Hecha a Mano
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('textiles'); onNavigate('tienda'); }} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Ropa & Textiles Autóctonos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: GOBERNANZA & ALIANZAS (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              GOBERNANZA & ALIANZAS
            </h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Iniciativa comunitaria y solidaria con el respaldo técnico y financiero de organizaciones comprometidas con los derechos socioeconómicos:
            </p>
            <ul className="space-y-2 text-slate-300 text-[11px]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Unión Europea en Bolivia</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>ONG FIE • Fomento a Iniciativas Económicas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Coordinadora de la Mujer</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>CCIMCAT & Instituto de Formación Femenina Integral</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 Mercadito Digital Bolivia. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="#terminos" className="hover:text-slate-400 transition-colors">Términos de Servicio</a>
            <span>•</span>
            <a href="#privacidad" className="hover:text-slate-400 transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="#rendicion" className="hover:text-slate-400 transition-colors">Rendición de Cuentas</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
