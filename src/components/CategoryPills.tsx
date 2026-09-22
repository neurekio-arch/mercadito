import React from 'react';
import { CategoryId } from '../types';
import { 
  LayoutGrid, 
  Palette, 
  Utensils, 
  Wrench, 
  Sparkles, 
  Gem, 
  Shirt, 
  Dog, 
  Award 
} from 'lucide-react';

interface CategoryPillsProps {
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
}

interface NavCategory {
  id: CategoryId;
  label: string;
  icon: React.ElementType;
}

const CATEGORIES: NavCategory[] = [
  { id: 'todos', label: 'Todos', icon: LayoutGrid },
  { id: 'arte-diseno', label: 'Arte & Diseño', icon: Palette },
  { id: 'alimentos', label: 'Alimentos', icon: Utensils },
  { id: 'artesanias', label: 'Artesanías', icon: Wrench },
  { id: 'cosmetica', label: 'Cosmética Natural', icon: Sparkles },
  { id: 'joyeria', label: 'Joyería', icon: Gem },
  { id: 'textiles', label: 'Ropa & Textiles', icon: Shirt },
  { id: 'mascotas', label: 'Mascotas', icon: Dog },
];

export const CategoryPills: React.FC<CategoryPillsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="bg-white border-b border-slate-100 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2.5 overflow-x-auto scrollbar-none flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 shrink-0">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#00A896] text-white shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 100% Hecho en Bolivia Trust Badge */}
        <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-[#E41878] font-bold rounded-full border border-pink-200/60 shrink-0 select-none">
          <Award className="w-3.5 h-3.5" />
          <span>100% Hecho en Bolivia</span>
        </div>
      </div>
    </div>
  );
};
