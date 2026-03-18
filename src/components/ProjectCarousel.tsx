'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: 'touch' }}
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
    </div>
  );
}

