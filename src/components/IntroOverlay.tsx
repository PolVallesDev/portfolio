import React from 'react';

interface IntroOverlayProps {
  opacity: number;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ opacity }) => {
  return (
    <div
      id="hero"
      className="absolute inset-0 flex flex-col items-center justify-end pb-28 md:pb-24 px-6 text-center z-20 transition-opacity duration-300"
      style={{
        opacity,
        pointerEvents: opacity > 0.4 ? 'auto' : 'none',
      }}
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="h-px w-6 bg-white/20"></span>
        <span className="font-serif text-xs tracking-[0.25em] text-washi-muted uppercase">
          Desarrollo de Software y IA
        </span>
        <span className="h-px w-6 bg-white/20"></span>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-white max-w-4xl leading-tight">
        POL VALLÉS
      </h1>

      <p className="mt-4 font-sans text-sm sm:text-base text-washi-muted max-w-lg font-normal leading-relaxed">
        Estudiante de 1º de DAM, enfocado en <a className='font-bold'>desarrollo multiplataforma</a> y <a className='font-bold'>Inteligencia Artificial</a>. Sin adornos innecesarios.
      </p>

      {/* Subtle scroll cue */}
      <div className="mt-8 flex flex-col items-center gap-2.5 text-washi-subtle text-xs">
        <div className="w-[1px] h-8 bg-gradient-to-b from-washi-muted to-transparent"></div>
        <span className="tracking-[0.2em] text-[10px] uppercase text-washi-subtle">
          Deslizar para continuar
        </span>
      </div>
    </div>
  );
};
