import React, { useState } from 'react';
import { Department } from '../types';
import { MapPin, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface TopBarProps {
  currentDepartment: Department;
  onDepartmentChange: (dept: Department) => void;
  onOpenHelp: () => void;
}

const DEPARTMENTS: Department[] = ['La Paz', 'Cochabamba', 'Tarija', 'Santa Cruz', 'Chuquisaca', 'Oruro', 'Potosí'];

export const TopBar: React.FC<TopBarProps> = ({
  currentDepartment,
  onDepartmentChange,
  onOpenHelp,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-[#007A6E] text-white text-xs font-medium py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left Side: Program banner */}
        <div className="flex items-center gap-2 text-emerald-50 tracking-wide text-[11px] sm:text-xs">
          <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-emerald-200">EMPRENDER</span>
          <span>para crecer y fortalecer • Apoyado por la Unión Europea</span>
        </div>

        {/* Right Side: Department selector & Help */}
        <div className="flex items-center gap-4 relative">
          {/* Department Selector */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-2 py-1 rounded bg-teal-800/60 hover:bg-teal-800 text-white transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-200" />
              <span className="text-teal-100 font-normal">Departamento:</span>
              <span className="font-semibold">{currentDepartment}</span>
              <ChevronDown className="w-3 h-3 text-teal-200 ml-0.5" />
            </button>

            {dropdownOpen && (
              <div 
                className="absolute right-0 mt-1 w-44 bg-white rounded-md shadow-xl py-1 z-50 text-slate-800 border border-slate-200 text-xs"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-100">
                  Seleccionar Región
                </div>
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      onDepartmentChange(dept);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-teal-50 transition-colors ${
                      dept === currentDepartment ? 'text-[#007A6E] font-bold bg-teal-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>{dept}</span>
                    {dept === currentDepartment && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#007A6E]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="text-teal-400/60">|</span>

          {/* Help link */}
          <button
            onClick={onOpenHelp}
            className="flex items-center gap-1 hover:text-emerald-200 transition-colors cursor-pointer text-[11px] sm:text-xs"
          >
            <HelpCircle className="w-3.5 h-3.5 text-teal-200" />
            <span>Ayuda & Preguntas</span>
          </button>
        </div>
      </div>
    </div>
  );
};
