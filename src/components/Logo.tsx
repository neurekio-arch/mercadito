import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', onClick }) => {
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.3 : 1;

  return (
    <div 
      onClick={onClick} 
      className={`inline-flex items-center gap-2 cursor-pointer select-none transition-transform hover:scale-[1.02] ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}
    >
      <div className="flex flex-col leading-none">
        {/* Top word: Mercadito with antenna waves above the i */}
        <div className="flex items-end font-extrabold text-[28px] tracking-tight text-[#00A896]">
          <span>Mercad</span>
          {/* Letter i with wifi/broadcast signal */}
          <div className="relative inline-flex flex-col items-center mx-[0.5px]">
            {/* Concentric wifi arches in magenta */}
            <svg className="w-5 h-3 text-[#E41878] -mb-0.5" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 10a12 12 0 0 1 16 0" />
              <path d="M7.5 12a7 7 0 0 1 9 0" />
              <circle cx="12" cy="13" r="1.5" fill="#00A896" />
            </svg>
            <span className="leading-none">ı</span>
          </div>
          <span>to</span>
        </div>

        {/* Bottom word: Digital in Magenta */}
        <div className="text-[26px] font-extrabold text-[#E41878] tracking-tight -mt-1 ml-9">
          Digital
        </div>
      </div>

      {/* Shopping bag with mouse buttons icon */}
      <div className="relative w-12 h-14 -rotate-6 ml-0.5 flex-shrink-0">
        <svg viewBox="0 0 60 70" fill="none" className="w-full h-full text-[#00A896]">
          {/* Bag handle */}
          <path
            d="M22 22 V 12 C 22 5, 38 5, 38 12 V 22"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Bag body */}
          <rect
            x="8"
            y="20"
            width="44"
            height="46"
            rx="6"
            stroke="currentColor"
            strokeWidth="3.5"
            fill="#FFFFFF"
          />
          {/* Computer mouse silhouette inside bag */}
          <path
            d="M20 32 C 20 28, 40 28, 40 32 V 48 C 40 54, 20 54, 20 48 Z"
            stroke="currentColor"
            strokeWidth="2.8"
            fill="none"
          />
          {/* Mouse vertical click button divider */}
          <line
            x1="30"
            y1="29"
            x2="30"
            y2="39"
            stroke="currentColor"
            strokeWidth="2.8"
          />
          {/* Mouse horizontal button divider */}
          <line
            x1="20"
            y1="39"
            x2="40"
            y2="39"
            stroke="currentColor"
            strokeWidth="2.8"
          />
        </svg>
      </div>
    </div>
  );
};
