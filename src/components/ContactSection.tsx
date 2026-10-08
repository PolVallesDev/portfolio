import React from 'react';
import { HankoSeal } from './HankoSeal';
import { CONTACT_DATA } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contacto"
      className="relative z-30 py-24 sm:py-32 px-6 sm:px-10 bg-ink-950 border-t border-ink-border"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <HankoSeal kanji="結" size="sm" />
            <span className="font-serif text-xs uppercase tracking-[0.2em] text-washi-muted">
              Contacto & Prácticas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
            Iniciar Conversación
          </h2>
          <p className="mt-3 text-sm text-washi-muted max-w-md mx-auto leading-relaxed">
            Abierto a proyectos de software, desarrollo multiplataforma y colaboraciones técnicas.
          </p>
        </div>

        {/* Tarjeta limpia de contacto */}
        <div className="bg-ink-900 border border-ink-border p-7 sm:p-10 rounded-sm shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif font-bold text-lg text-white mb-2">Pol Vallés</h3>
              <p className="text-xs text-washi-muted leading-relaxed mb-6 font-light">
                Estudiante de Desarrollo de Aplicaciones Multiplataforma. Comprometido con la calidad del código, la disciplina de trabajo y la resolución metódica de problemas.
              </p>

              <ul className="space-y-2.5 text-xs text-washi-muted">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cinnabar"></span>
                  <span>Ubicación: {CONTACT_DATA.location}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cinnabar"></span>
                  <span>Estudios: {CONTACT_DATA.degree}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cinnabar"></span>
                  <span>Objetivo: {CONTACT_DATA.status}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-xs">
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="flex items-center justify-between p-3.5 bg-ink-950 border border-ink-border hover:border-washi-subtle transition rounded-sm group"
              >
                <span className="text-washi group-hover:text-white">{CONTACT_DATA.email}</span>
                <span className="text-washi-subtle group-hover:text-washi">Email</span>
              </a>
              <a
                href={CONTACT_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-ink-950 border border-ink-border hover:border-washi-subtle transition rounded-sm group"
              >
                <span className="text-washi group-hover:text-white">github.com/PolVallesDev</span>
                <span className="text-washi-subtle group-hover:text-washi">GitHub</span>
              </a>
              <a
                href={CONTACT_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-ink-950 border border-ink-border hover:border-washi-subtle transition rounded-sm group"
              >
                <span className="text-washi group-hover:text-white">linkedin.com/in/pol-valles</span>
                <span className="text-washi-subtle group-hover:text-washi">LinkedIn</span>
              </a>
              <button
                type="button"
                className="w-full py-3.5 bg-cinnabar hover:bg-cinnabar-dark text-white font-serif font-bold tracking-wider transition rounded-sm mt-1 active:scale-[0.99]"
              >
                Descargar Currículum Vitae (PDF)
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-6 border-t border-ink-border text-center text-xs text-washi-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 Pol Vallés · Portafolio de Software Multiplataforma</span>
          <span className="font-serif text-[11px] text-washi-muted">技術 · 規律 · 創造性</span>
        </footer>
      </div>
    </section>
  );
};
