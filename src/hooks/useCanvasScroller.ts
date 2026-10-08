import { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 240;

interface UseCanvasScrollerReturn {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  scrollTrackRef: React.RefObject<HTMLDivElement>;
  loadProgress: number;
  isPreloadComplete: boolean;
  introOpacity: number;
  skillsOpacity: number;
  projectsOpacity: number;
}

export function useCanvasScroller(): UseCanvasScrollerReturn {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isPreloadComplete, setIsPreloadComplete] = useState(false);

  const [introOpacity, setIntroOpacity] = useState(1);
  const [skillsOpacity, setSkillsOpacity] = useState(0);
  const [projectsOpacity, setProjectsOpacity] = useState(0);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);

  const getFramePath = useCallback((index: number) => {
    const padded = String(index).padStart(4, '0');
    return `/assets/frames/frame_${padded}.webp`;
  }, []);

  const drawCover = useCallback(
    (ctx: CanvasRenderingContext2D, img: HTMLImageElement, width: number, height: number) => {
      if (!img || !img.complete) return;
      const iWidth = img.naturalWidth || 1280;
      const iHeight = img.naturalHeight || 720;

      const scale = Math.max(width / iWidth, height / iHeight);
      const x = (width - iWidth * scale) / 2;
      const y = (height - iHeight * scale) / 2;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, x, y, iWidth * scale, iHeight * scale);
    },
    []
  );

  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameImg = framesRef.current[Math.round(currentFrameRef.current)];
    if (frameImg && frameImg.complete) {
      drawCover(ctx, frameImg, canvas.width, canvas.height);
    }
  }, [drawCover]);

  // Preload frames
  useEffect(() => {
    let loaded = 0;
    const preloadedFrames: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        const percent = (loaded / TOTAL_FRAMES) * 100;
        setLoadProgress(percent);

        if (loaded === 1) {
          const canvas = canvasRef.current;
          if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame();
          }
        }

        if (loaded === TOTAL_FRAMES) {
          setTimeout(() => {
            setIsPreloadComplete(true);
          }, 300);
        }
      };
      preloadedFrames.push(img);
    }

    framesRef.current = preloadedFrames;
  }, [getFramePath, renderFrame]);

  // Canvas resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [renderFrame]);

  // Scroll listener and overlay calculations
  useEffect(() => {
    const handleScroll = () => {
      const track = scrollTrackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const trackHeight = track.offsetHeight - window.innerHeight;
      const scrollTop = -rect.top;

      const progress = Math.max(0, Math.min(1, scrollTop / trackHeight));
      targetFrameRef.current = Math.floor(progress * (TOTAL_FRAMES - 1));

      // Phase 1: 0% - 22% (Intro)
      if (progress < 0.22) {
        setIntroOpacity(Math.max(0, 1 - progress / 0.18));
        setSkillsOpacity(0);
        setProjectsOpacity(0);
      }
      // Phase 2: 24% - 56% (Skills)
      else if (progress >= 0.24 && progress < 0.56) {
        setIntroOpacity(0);
        let op = 1;
        if (progress < 0.32) op = (progress - 0.24) / 0.08;
        if (progress > 0.48) op = (0.56 - progress) / 0.08;
        setSkillsOpacity(Math.max(0, Math.min(1, op)));
        setProjectsOpacity(0);
      }
      // Phase 3: 56% - 66% (Teleport Jutsu action moment)
      else if (progress >= 0.56 && progress < 0.66) {
        setIntroOpacity(0);
        setSkillsOpacity(0);
        setProjectsOpacity(0);
      }
      // Phase 4: 68% - 100% (Projects)
      else if (progress >= 0.68) {
        setIntroOpacity(0);
        setSkillsOpacity(0);
        const op = Math.min(1, (progress - 0.68) / 0.08);
        setProjectsOpacity(Math.max(0, op));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth linear interpolation animation loop (Lerp at 60 FPS)
  useEffect(() => {
    const animLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.16;
        renderFrame();
      }
      animFrameIdRef.current = requestAnimationFrame(animLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(animLoop);

    return () => {
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [renderFrame]);

  return {
    canvasRef,
    scrollTrackRef,
    loadProgress,
    isPreloadComplete,
    introOpacity,
    skillsOpacity,
    projectsOpacity,
  };
}
