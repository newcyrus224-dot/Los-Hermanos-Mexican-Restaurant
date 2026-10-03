import React from 'react';
import realLogoImg from '../assets/images/los_hermanos_real_logo_1790998215906.jpg';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'badge';
  alt?: string;
}

export const LosHermanosLogo: React.FC<LogoProps> = ({
  className = 'h-12 w-auto',
  variant = 'full',
  alt = 'Los Hermanos Mexican Restaurant Official Logo',
}) => {
  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={realLogoImg}
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      />
    </div>
  );
};
