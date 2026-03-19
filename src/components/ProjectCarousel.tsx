'use client';

import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import Link from 'next/link';
import IframePreview from '@/components/IframePreview';
import type { Project } from '@/types';

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragStartScrollLeft = useRef(0);

  const projectsWithIndex = useMemo(() => projects ?? [], [projects]);

  function scrollByAmount(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(1, el.clientWidth);
    const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
    const next = el.scrollLeft + amount * direction;
    const clamped = Math.min(maxScrollLeft, Math.max(0, next));
    el.scrollTo({ left: clamped, behavior: 'smooth' });
  }

  function onScroll() {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
    const epsilon = 2; // avoids flicker due to sub-pixel scrolling
    setCanScrollPrev(el.scrollLeft > epsilon);
    setCanScrollNext(el.scrollLeft < maxScrollLeft - epsilon);

    const slideWidth = Math.max(1, el.clientWidth);
    const current = Math.round(el.scrollLeft / slideWidth) + 1;
    setActiveIndex(clamp(current, 1, projectsWithIndex.length));
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByAmount(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByAmount(-1);
    }
  }

  function handleMouseDown(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    if (target.closest('a, button, input, textarea, select, iframe')) return;

    const el = scrollerRef.current;
    if (!el) return;

    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartScrollLeft.current = el.scrollLeft;
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!isDragging || dragStartX.current == null) return;
    const el = scrollerRef.current;
    if (!el) return;

    const delta = e.clientX - dragStartX.current;
    el.scrollLeft = dragStartScrollLeft.current - delta;
  }

  function handleMouseUpOrLeave() {
    if (!isDragging) return;
    setIsDragging(false);
    dragStartX.current = null;
  }

  if (!projectsWithIndex.length) return null;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
      const epsilon = 2;
      setCanScrollPrev(el.scrollLeft > epsilon);
      setCanScrollNext(el.scrollLeft < maxScrollLeft - epsilon);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [projectsWithIndex.length]);

  return (
    <div>
      {/* Carousel */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className={`flex overflow-x-auto scroll-smooth snap-x snap-mandatory ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        style={{ WebkitOverflowScrolling: 'touch' }}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        tabIndex={0}
        role="region"
        aria-label="Project carousel"
      >
        {projectsWithIndex.map((project, idx) => {
          const detailsHref = project.slug ? `/work/${project.slug}` : '/work';

          return (
            <div
              key={`${project.slug ?? idx}-${project.title}`}
              className="snap-start flex-none w-full"
            >
              <div className="px-0 py-4 sm:px-0 sm:py-6">
                {/* <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
                  Case study
                </p> */}

                <h3 className="text-sm font-semibold text-ink">{project.title}</h3>

                {project.subtitle && (
                  <p className="mt-1 text-xs text-stone-500">{project.subtitle}</p>
                )}

                <div className="mt-4 flex w-full flex-wrap justify-center gap-3 px-4">
                  {project.slug && (
                    <Link
                      href={detailsHref}
                      className="sparkle-btn inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-stone-50 hover:bg-stone-800 transition"
                      aria-label={`Open details for ${project.title}`}
                    >
                      View details →
                    </Link>
                  )}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live site for ${project.title} in a new tab`}
                    className="
                      sparkle-btn sparkle-btn--soft
                      relative inline-flex items-center justify-center
                      overflow-hidden rounded-full
                      px-4 py-2
                      text-xs font-medium
                      transition-all duration-500
                    "
                  >
                    <span className="sparkle-layer" aria-hidden />
                    <span className="relative z-10">Live site ↗</span>
                  </a>
                </div>

                <div className="mt-4">
                  <IframePreview
                    url={project.liveUrl}
                    title={project.previewTitle}
                    detailsHref={project.slug}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next (below the iframe) */}
      <div className="mx-auto flex w-full max-w-[520px] items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          disabled={!canScrollPrev}
          aria-disabled={!canScrollPrev}
          className={`flex items-center justify-center rounded-full border border-stone-200 bg-white/90 px-3 py-2 shadow-sm transition ${canScrollPrev ? 'hover:bg-white' : 'cursor-not-allowed opacity-50'
            }`}
          aria-label="Previous project"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          disabled={!canScrollNext}
          aria-disabled={!canScrollNext}
          className={`flex items-center justify-center rounded-full border border-stone-200 bg-white/90 px-3 py-2 shadow-sm transition ${canScrollNext ? 'hover:bg-white' : 'cursor-not-allowed opacity-50'
            }`}
          aria-label="Next project"
        >
          →
        </button>
      </div>
      <div className="mt-2 text-center text-xs font-medium text-stone-600" aria-live="polite">
        {activeIndex} / {projectsWithIndex.length}
      </div>
    </div>
  );
}

