import React, { useState } from 'react';
import { HankoSeal } from './HankoSeal';
import { PROJECTS_DATA } from '../data/portfolio';
import { Project } from '../types';

interface ProjectsOverlayProps {
  opacity: number;
}

export const ProjectsOverlay: React.FC<ProjectsOverlayProps> = ({ opacity }) => {
  // Por defecto el primer proyecto está preseleccionado
  const [activeProject, setActiveProject] = useState<Project | null>(PROJECTS_DATA[0] || null);
  const [isHoveringList, setIsHoveringList] = useState<boolean>(false);

  return (
    <div
      id="proyectos"
      className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-16 z-20 transition-opacity duration-300 pointer-events-none"
      style={{
        opacity,
        pointerEvents: opacity > 0.4 ? 'auto' : 'none',
      }}
    >
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-5 sm:gap-6 max-w-5xl w-full">
        {/* Contenedor de la lista de proyectos (Izquierda) */}
        <div
          className="w-full lg:w-[440px] shrink-0 bg-ink-900/85 backdrop-blur-md border border-ink-border p-5 sm:p-6 rounded-sm shadow-xl"
          onMouseEnter={() => setIsHoveringList(true)}
          onMouseLeave={() => setIsHoveringList(false)}
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-ink-border">
            <div className="flex items-center gap-2">
              <HankoSeal kanji="作" size="sm" />
              <h2 className="font-serif font-bold text-sm sm:text-base text-washi tracking-wide">
                Proyectos Seleccionados
              </h2>
            </div>
            <span className="text-[10px] text-cinnabar tracking-wider uppercase font-medium">
              Portfolio
            </span>
          </div>

          {/* Lista de proyectos interactiva */}
          <div className="divide-y divide-ink-border/80">
            {PROJECTS_DATA.map((project) => {
              const isSelected = activeProject?.id === project.id;
              return (
                <a
                  key={project.id}
                  href={project.webUrl || project.demoUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveProject(project)}
                  onFocus={() => setActiveProject(project)}
                  className={`block py-3 px-2 -mx-2 rounded-sm transition-all duration-200 group cursor-pointer ${
                    isSelected ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1 h-3 rounded-full transition-all duration-200 ${
                          isSelected ? 'bg-cinnabar scale-y-100' : 'bg-transparent scale-y-50'
                        }`}
                      />
                      <h3
                        className={`font-serif font-semibold text-xs sm:text-sm transition-colors ${
                          isSelected ? 'text-white' : 'text-washi group-hover:text-white'
                        }`}
                      >
                        {project.number}. {project.title}
                      </h3>
                    </div>
                    <span className="text-[10px] text-cinnabar shrink-0 font-medium inline-flex items-center gap-1">
                      {project.stackBadge}
                      <span className="text-washi-subtle group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </div>
                  <p className="text-[11px] text-washi-muted mt-1 pl-3 font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="mt-3.5 pt-2.5 border-t border-ink-border flex justify-between items-center text-[10px] text-washi-subtle">
            <span>Haz clic para abrir la web</span>
            <span className="font-serif text-washi-muted text-[11px]">目利き</span>
          </div>
        </div>

        {/* Tarjeta flotante con esquinas redondeadas y vista previa a la derecha */}
        {activeProject && (
          <div
            className={`w-full lg:w-[360px] xl:w-[400px] shrink-0 bg-ink-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl transition-all duration-300 ease-out ${
              isHoveringList ? 'scale-[1.01] border-cinnabar/40' : 'scale-100'
            }`}
          >
            {/* Imagen del proyecto con esquinas redondeadas */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-ink-950 border border-white/5 mb-3.5 group">
              {activeProject.imageUrl ? (
                <img
                  src={activeProject.imageUrl}
                  alt={`Captura de ${activeProject.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Si no encuentra la imagen, muestra fallback sin romper el diseño
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : null}

              {/* Overlay y badge sobre la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-2.5 right-2.5">
                <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-ink-950/80 backdrop-blur-md border border-white/10 text-white">
                  {activeProject.stackBadge}
                </span>
              </div>
            </div>

            {/* Info rápida del proyecto */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-sm text-washi">
                  {activeProject.title}
                </h4>
                <HankoSeal kanji="作" size="sm" />
              </div>

              <p className="text-xs text-washi-muted leading-relaxed font-light">
                {activeProject.description}
              </p>

              {/* Tags de tecnologías */}
              {activeProject.tags && activeProject.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] bg-white/[0.05] border border-white/[0.06] rounded-md text-washi-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Botón directo de visita */}
              <div className="pt-2">
                <a
                  href={activeProject.webUrl || activeProject.demoUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-cinnabar hover:bg-cinnabar-dark text-white font-serif font-semibold text-xs tracking-wider rounded-lg transition-colors shadow-lg active:scale-[0.99]"
                >
                  <span>Ver Proyecto</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={activeProject.githubUrl || activeProject.demoUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-cinnabar hover:bg-cinnabar-dark text-white font-serif font-semibold text-xs tracking-wider rounded-lg transition-colors shadow-lg active:scale-[0.99]"
                >
                  <span>Ver Proyecto en GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
