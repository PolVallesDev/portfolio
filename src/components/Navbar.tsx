import React from 'react';
import { HankoSeal } from './HankoSeal';

export const Navbar: React.FC = () => {
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, target: 'hero' | 'disciplinas' | 'proyectos' | 'contacto') => {
    e.preventDefault();

    if (target === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'contacto') {
      const contactEl = document.getElementById('contacto');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const track = document.getElementById('scroll-track');
    if (!track) return;

    const trackTop = track.offsetTop;
    const trackScrollable = track.offsetHeight - window.innerHeight;

    if (target === 'disciplinas') {
      // Phase 2 is centered around 38%
      const targetY = trackTop + trackScrollable * 0.38;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    } else if (target === 'proyectos') {
      // Phase 4 is centered around 82%
      const targetY = trackTop + trackScrollable * 0.82;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 py-5 backdrop-blur-md bg-ink-950/80 border-b border-ink-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand: Hanko Seal + Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavigate(e, 'hero')}
          className="flex items-center gap-3 group"
        >
          <HankoSeal kanji="波" size="md" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm sm:text-base tracking-wider text-washi group-hover:text-white transition">
              POL VALLÉS
            </span>
            <span className="text-[10px] text-washi-subtle tracking-widest uppercase">
              Developer | IA
            </span>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-washi-muted font-medium">
          <a
            href="#hero"
            onClick={(e) => handleNavigate(e, 'hero')}
            className="hover:text-washi transition-colors"
          >
            Inicio
          </a>
          <a
            href="#disciplinas"
            onClick={(e) => handleNavigate(e, 'disciplinas')}
            className="hover:text-washi transition-colors"
          >
            Competencias
          </a>
          <a
            href="#proyectos"
            onClick={(e) => handleNavigate(e, 'proyectos')}
            className="hover:text-washi transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleNavigate(e, 'contacto')}
            className="hover:text-washi transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Action button */}
        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            onClick={(e) => handleNavigate(e, 'contacto')}
            className="text-xs font-medium text-washi px-3.5 py-1.5 border border-ink-border hover:border-washi-subtle hover:bg-white/5 transition rounded-sm"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
};
