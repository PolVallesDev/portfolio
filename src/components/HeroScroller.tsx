import React from 'react';
import { useCanvasScroller } from '../hooks/useCanvasScroller';
import { IntroOverlay } from './IntroOverlay';
import { SkillsOverlay } from './SkillsOverlay';
import { ProjectsOverlay } from './ProjectsOverlay';
import { ProgressBar } from './ProgressBar';

export const HeroScroller: React.FC = () => {
  const {
    canvasRef,
    scrollTrackRef,
    loadProgress,
    isPreloadComplete,
    introOpacity,
    skillsOpacity,
    projectsOpacity,
  } = useCanvasScroller();

  return (
    <>
      {/* Top Preload Progress Indicator */}
      <ProgressBar progress={loadProgress} isComplete={isPreloadComplete} />

      {/* Side Japanese Calligraphy (Fixed Editorial Detail) */}
      <aside
        className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-6 pointer-events-none opacity-30 select-none"
        aria-hidden="true"
      >
        <span className="writing-vertical font-serif text-xs tracking-[0.35em] text-washi-muted">
          直心是道場 · 鍛錬
        </span>
        <div className="w-[1px] h-12 bg-white/10"></div>
      </aside>

      {/* 520vh Scroll Track */}
      <div id="scroll-track" ref={scrollTrackRef} className="relative w-full" style={{ height: '520vh' }}>
        {/* Sticky Fullscreen Viewport */}
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-ink-950">
          {/* HTML5 Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.70] contrast-[1.18] saturate-[0.88]"
          />

          {/* Vignette & cinematic gradient blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/50 via-transparent to-ink-950/50 pointer-events-none"></div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, transparent 35%, rgba(7,7,9,0.75) 100%)',
            }}
          ></div>

          {/* Overlays */}
          <IntroOverlay opacity={introOpacity} />
          <SkillsOverlay opacity={skillsOpacity} />
          <ProjectsOverlay opacity={projectsOpacity} />
        </div>
      </div>
    </>
  );
};
