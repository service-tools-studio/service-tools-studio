'use client';

import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent, type TouchEvent, type WheelEvent } from 'react';
import type { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectCardsCarousel({ projects }: { projects: Project[] }) {
  const slides = useMemo(() => {
    if (!projects.length) return [];
    const first = projects[0];
    const last = projects[projects.length - 1];
    return [last, ...projects, first];
  }, [projects]);

  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const wheelLock = useRef(false);
  const wheelReleaseTimerRef = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const isMouseDragging = useRef(false);

  function goNext() {
    setIndex((prev) => prev + 1);
  }

  function goPrev() {
    setIndex((prev) => prev - 1);
  }

  useEffect(() => {
    return () => {
      if (wheelReleaseTimerRef.current != null) {
        window.clearTimeout(wheelReleaseTimerRef.current);
      }
    };
  }, []);

  function handleTransitionEnd() {
    if (!projects.length) return;

    if (index === projects.length + 1) {
      setAnimate(false);
      setIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    } else if (index === 0) {
      setAnimate(false);
      setIndex(projects.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }
  }

  function handleWheel(e: WheelEvent<HTMLDivElement>) {
    if (projects.length <= 1) return;

    const delta = e.deltaX;
    if (Math.abs(delta) < 8) return;

    e.preventDefault();

    // Treat one wheel/trackpad gesture as one slide move.
    if (!wheelLock.current) {
      wheelLock.current = true;
      if (delta > 0) goNext();
      else goPrev();
    }

    // Keep lock active while wheel events continue (momentum/inertia included).
    if (wheelReleaseTimerRef.current != null) {
      window.clearTimeout(wheelReleaseTimerRef.current);
    }
    wheelReleaseTimerRef.current = window.setTimeout(() => {
      wheelLock.current = false;
      wheelReleaseTimerRef.current = null;
    }, 250);
  }

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    if (projects.length <= 1 || touchStartX.current == null) return;
    const endX = e.changedTouches[0]?.clientX;
    if (typeof endX !== 'number') return;

    const delta = touchStartX.current - endX;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;

    if (delta > 0) goNext();
    else goPrev();
  }

  function handleMouseDown(e: MouseEvent<HTMLDivElement>) {
    // Don't hijack interactions on controls/links/iframe content.
    const target = e.target as HTMLElement;
    if (target.closest('a, button, input, textarea, select, iframe')) return;
    mouseStartX.current = e.clientX;
    isMouseDragging.current = true;
  }

  function handleMouseUp(e: MouseEvent<HTMLDivElement>) {
    if (!isMouseDragging.current || mouseStartX.current == null) return;
    const delta = mouseStartX.current - e.clientX;
    mouseStartX.current = null;
    isMouseDragging.current = false;

    if (Math.abs(delta) < 40) return;
    if (delta > 0) goNext();
    else goPrev();
  }

  function handleMouseLeave() {
    mouseStartX.current = null;
    isMouseDragging.current = false;
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    }
  }

  const currentProjectNumber = (() => {
    if (!projects.length) return 0;
    if (index <= 0) return projects.length;
    if (index > projects.length) return 1;
    return index;
  })();

  if (!projects.length) return null;

  return (
    <div className="overflow-hidden">
      <div
        className={`flex cursor-grab ${animate ? 'transition-transform duration-500 ease-out' : ''}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Project carousel"
      >
        {slides.map((project, i) => (
          <div key={`${project.slug ?? project.title}-${i}`} className="w-full shrink-0">
            <ProjectCard
              project={project}
              href={project.slug ? `/work/${project.slug}` : '/work'}
              noBottomSpace
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white text-sm text-ink transition hover:border-stone-400"
          aria-label="Previous project"
        >
          ←
        </button>
        <span className="min-w-12 text-center text-xs font-medium text-stone-600" aria-live="polite">
          {currentProjectNumber} / {projects.length}
        </span>
        <button
          type="button"
          onClick={goNext}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white text-sm text-ink transition hover:border-stone-400"
          aria-label="Next project"
        >
          →
        </button>
      </div>
    </div>
  );
}

