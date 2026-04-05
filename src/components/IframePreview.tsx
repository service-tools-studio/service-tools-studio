'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

export default function IframePreview({
  url,
  title,
  variant = 'desktop',
}: {
  url: string;
  title: string;
  detailsHref?: string;
  variant?: 'desktop' | 'mobile';
}) {
  // Measure the viewport box so we can fit the iframe perfectly
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!viewportRef.current) return;

    const el = viewportRef.current;

    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setBox({ w: r.width, h: r.height });
    });

    ro.observe(el);

    const r = el.getBoundingClientRect();
    setBox({ w: r.width, h: r.height });

    return () => ro.disconnect();
  }, []);

  const ratioClass =
    variant === 'mobile' ? 'aspect-[9/19.5] w-full' : 'aspect-[16/10] w-full';

  const frameW = variant === 'mobile' ? 700 : 1150;
  const frameH = Math.round(frameW * (10 / 16));

  const scale = useMemo(() => {
    if (!box.w || !box.h) return 1;
    const fit = Math.min(box.w / frameW, box.h / frameH);
    return fit;
  }, [box.w, box.h, frameW, frameH]);

  return (
    <>
      <div className="mx-auto w-full max-w-[520px] min-w-0 overflow-hidden px-0 pb-0">
        <div className="overflow-hidden rounded-3xl bg-white/90 shadow-sm backdrop-blur">
          <div className="relative z-30 border-b border-stone-200 bg-white/90 px-3 py-2 backdrop-blur">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-2 text-left"
              style={{ touchAction: 'manipulation' }}
              aria-label={`Open live site: ${title}`}
            >
              <span className="flex shrink-0 items-center gap-1" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-red-500/70" />
                <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </span>

              <span className="min-w-0 truncate text-[11px] text-stone-500">{url}</span>

              <span className="ml-auto shrink-0 rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[10px] font-medium text-stone-600 group-hover:border-stone-300 group-hover:bg-white">
                Open live site ↗
              </span>
            </a>
          </div>

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
                <iframe
                  src={url}
                  title={title}
                  className="h-full w-full border-0"
                  style={{ pointerEvents: 'none' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
