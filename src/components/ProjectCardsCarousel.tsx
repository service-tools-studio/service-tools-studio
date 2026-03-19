'use client';

import { useEffect, useMemo, useRef, useState, type TouchEvent, type WheelEvent } from 'react';
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
  const [autoPaused, setAutoPaused] = useState(false);
  const [interactivePaused, setInteractivePaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const wheelLock = useRef(false);
  const wheelReleaseTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const interactiveSlidesRef = useRef<Set<number>>(new Set());

  function goNext() {
    setIndex((prev) => prev + 1);
  }

  function goPrev() {
    setIndex((prev) => prev - 1);
  }

  function pauseAutoAdvance() {
    setAutoPaused(true);
    if (resumeTimerRef.current != null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setAutoPaused(false);
      resumeTimerRef.current = null;
    }, 5000);
  }

  useEffect(() => {
    if (projects.length <= 1 || autoPaused || interactivePaused) return;

    const timer = window.setInterval(() => {
      goNext();
    }, 3000);

    return () => window.clearInterval(timer);
  }, [projects.length, autoPaused, interactivePaused]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current != null) {
        window.clearTimeout(resumeTimerRef.current);
      }
      if (wheelReleaseTimerRef.current != null) {
        window.clearTimeout(wheelReleaseTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    interactiveSlidesRef.current.clear();
    setInteractivePaused(false);
  }, [projects.length]);

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
    pauseAutoAdvance();

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

    pauseAutoAdvance();
    if (delta > 0) goNext();
    else goPrev();
  }

  function handleSlideInteractiveChange(slideIdx: number, isInteractive: boolean) {
    if (isInteractive) interactiveSlidesRef.current.add(slideIdx);
    else interactiveSlidesRef.current.delete(slideIdx);

    setInteractivePaused(interactiveSlidesRef.current.size > 0);
  }

  if (!projects.length) return null;

  return (
    <div className="overflow-hidden">
      <div
        className={`flex ${animate ? 'transition-transform duration-500 ease-out' : ''}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((project, i) => (
          <div key={`${project.slug ?? project.title}-${i}`} className="w-full shrink-0">
            <ProjectCard
              project={project}
              href={project.slug ? `/work/${project.slug}` : '/work'}
              onInteractiveChange={(interactive) => handleSlideInteractiveChange(i, interactive)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

