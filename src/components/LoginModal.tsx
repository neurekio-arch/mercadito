import React, { useState } from 'react';
import { X, User, Store, ShieldCheck, Mail, Lock } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVendor: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSelectVendor,
}) => {
  const [role, setRole] = useState<'buyer' | 'vendor'>('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab switch buyer / vendor */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-4 text-xs font-bold">
          <button
            onClick={() => setRole('buyer')}
            className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              role === 'buyer' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Comprador/a</span>
          </button>
          <button
            onClick={() => setRole('vendor')}
            className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              role === 'vendor' ? 'bg-white text-[#E41878] shadow-2xs' : 'text-slate-500'
            }`}
          >
            <Store className="w-3.5 h-3.5" />
            <span>Emprendedora</span>
          </button>
        </div>

        {isSuccess ? (
          <div className="py-6 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-[#00A896] mx-auto flex items-center justify-center">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="font-extrabold text-slate-900">¡Sesión iniciada!</h4>
            <p className="text-xs text-slate-500">Bienvenid@ a Mercadito Digital Bolivia</p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-3.5 text-xs">
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                {role === 'buyer' ? 'Ingreso para Compradores' : 'Portal de la Emprendedora'}
              </h3>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Accede para gestionar tus compras o catálogo artesanal.
              </p>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Correo Electrónico</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Contraseña</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#00A896]"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-2.5 text-white font-bold rounded-xl transition-all shadow-sm ${
                role === 'buyer' ? 'bg-[#00A896] hover:bg-[#007A6E]' : 'bg-[#E41878] hover:bg-[#B80E5E]'
              }`}
            >
              Iniciar Sesión
            </button>

            {role === 'vendor' && (
              <div className="text-center pt-2 border-t border-slate-100">
                <span className="text-slate-400 text-[11px]">¿Aún no tienes tu tienda? </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectVendor();
                  }}
                  className="text-[#E41878] font-bold text-[11px] hover:underline"
                >
                  Regístrate aquí
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
