'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

export default function IframePreview({
  url,
  title,
  detailsHref,
  variant = 'desktop',
}: {
  url: string;
  title: string;
  detailsHref?: string;
  variant?: 'desktop' | 'mobile';
}) {
  const [interactive, setInteractive] = useState(false);

  // Measure the viewport box so we can fit the iframe perfectly
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setInteractive(false);
    }
    if (interactive) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [interactive]);

  useEffect(() => {
    if (!viewportRef.current) return;

    const el = viewportRef.current;

    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setBox({ w: r.width, h: r.height });
    });

    ro.observe(el);

    // initial measurement
    const r = el.getBoundingClientRect();
    setBox({ w: r.width, h: r.height });

    return () => ro.disconnect();
  }, []);

  const ratioClass =
    variant === 'mobile' ? 'aspect-[9/19.5] w-full' : 'aspect-[16/10] w-full';

  // “Zoom out” by making the virtual viewport larger.
  // Bigger numbers show more of the page once fit-scaled.
  const frameW = variant === 'mobile' ? 700 : 1150;
  const frameH = Math.round(frameW * (10 / 16)); // match your 16/10 container

  const scale = useMemo(() => {
    if (!box.w || !box.h) return 1;
    const fit = Math.min(box.w / frameW, box.h / frameH);
    return fit; // guaranteed to fit => no clipping
  }, [box.w, box.h, frameW, frameH]);

  return (
    <>
      <div className="mx-auto w-full max-w-[520px] min-w-0 overflow-hidden px-4 sm:px-0 pb-10">
        <div className="overflow-hidden rounded-3xl bg-white/90 shadow-sm backdrop-blur">
          {/* Chrome bar */}
          <div className="relative z-30 border-b border-stone-200 bg-white/90 px-3 py-2 backdrop-blur">
            <button
              type="button"
              onClick={() => setInteractive((v) => !v)}
              className="group flex w-full items-center gap-2 text-left"
              style={{ touchAction: 'manipulation' }}
              aria-label={
                interactive
                  ? 'Disable interactive preview'
                  : 'Enable interactive preview'
              }
            >
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-red-500/70" />
                <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </span>

              <span className="truncate text-[11px] text-stone-500">{url}</span>

              <span className="ml-auto rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[10px] text-stone-600 group-hover:border-stone-300">
                {interactive ? 'Interactive ✓' : 'Tap to interact'}
              </span>
            </button>
          </div>

          {/* Viewport */}
          <div className="bg-stone-950 p-3 sm:p-4">
            <div
              ref={viewportRef}
              className={`relative mx-auto overflow-hidden rounded-2xl bg-white ${ratioClass}`}
            >
              <div
                className="absolute left-1/2 top-0"
                style={{
                  width: frameW,
                  height: frameH,
                  transform: `translateX(-50%) scale(${scale})`,
                  transformOrigin: 'top center',
                }}
              >
                {/* Tap-catcher overlay (so mobile taps reliably enable interaction) */}
                {!interactive && (
                  <button
                    type="button"
                    onClick={() => setInteractive(true)}
                    className="absolute inset-0 z-20 cursor-pointer"
                    style={{ background: 'transparent', touchAction: 'manipulation' }}
                    aria-label="Enable interactive preview"
                  />
                )}

                <iframe
                  src={url}
                  title={title}
                  className="h-full w-full border-0"
                  style={{ pointerEvents: interactive ? 'auto' : 'none' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-end px-6 py-3">
        {detailsHref && (
          <Link
            href={`/work/${detailsHref}`}
            className="sparkle-btn inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-stone-50 transition hover:bg-stone-800"
          >
            View site details →
          </Link>
        )}
      </div> */}
    </>
  );
}
