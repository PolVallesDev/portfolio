import React from 'react';
import { HankoSeal } from './HankoSeal';
import { SKILLS_DATA } from '../data/portfolio';

interface SkillsOverlayProps {
  opacity: number;
}

export const SkillsOverlay: React.FC<SkillsOverlayProps> = ({ opacity }) => {
  return (
    <div
      id="disciplinas"
      className="absolute inset-0 flex items-center justify-end px-6 md:px-14 lg:px-20 z-20 transition-opacity duration-300"
      style={{
        opacity,
        pointerEvents: opacity > 0.4 ? 'auto' : 'none',
      }}
    >
      <div className="w-full max-w-lg bg-ink-900/85 backdrop-blur-md border border-ink-border p-5 sm:p-6 rounded-sm shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-ink-border">
          <div className="flex items-center gap-2">
            <HankoSeal kanji="技" size="sm" />
            <h2 className="font-serif font-bold text-sm sm:text-base text-washi tracking-wide">
              Competencias y Fundamentos
            </h2>
          </div>
          <span className="text-[10px] text-washi-subtle">DAM · 1º Año</span>
        </div>

        <p className="text-xs text-washi-muted leading-relaxed mb-4">
          Bases técnicas orientadas a la robustez, buenas prácticas de desarrollo y arquitectura de datos.
        </p>

        <div className="space-y-3 text-xs sm:text-sm">
          {SKILLS_DATA.map((skill, index) => (
            <div
              key={skill.title}
              className={`pb-2.5 ${
                index < SKILLS_DATA.length - 1 ? 'border-b border-ink-border/80' : 'pt-0.5'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-medium text-washi">{skill.title}</span>
                <span className="text-[11px] text-washi-subtle">{skill.category}</span>
              </div>
              <p className="text-[11px] text-washi-muted mt-0.5 font-light leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-2.5 border-t border-ink-border flex items-center justify-between text-[10px] text-washi-subtle">
          <span>Entorno: Git, GitHub, Vercel</span>
          <span className="font-serif text-cinnabar text-[11px]">規律</span>
        </div>
      </div>
    </div>
  );
};
