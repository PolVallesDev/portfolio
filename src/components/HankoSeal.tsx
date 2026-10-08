import React from 'react';

interface HankoSealProps {
  kanji: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const HankoSeal: React.FC<HankoSealProps> = ({ kanji, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5 text-[11px]',
    md: 'w-[26px] h-[26px] text-[13px]',
    lg: 'w-8 h-8 text-[16px]',
  };

  return (
    <span
      className={`inline-flex items-center justify-center border-[1.5px] border-cinnabar text-cinnabar font-serif font-bold leading-none rounded-[2px] select-none ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      {kanji}
    </span>
  );
};
