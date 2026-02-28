import Link from "next/link";
import { CALENDLY_URL } from '@/app/constants';
export const site = {
  cta: {
    calendly: {
      label: "Book a call",
      href: CALENDLY_URL,
    },
    intake: {
      label: "Project intake form",
      href: "/intake",
    },
  },

  footer: {
    finePrint: `© ${new Date().getFullYear()} Service Tools Studio.`,
    note:
      "We build websites for service business owners.",
  },
} as const;


export default function SiteFooter() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">

        {/* CTA block */}
        <div className="mb-10 rounded-3xl bg-muted/40 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-fg">
                Ready to move forward?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-fg/70">
                Book a short call or fill out the intake form to get started.
                We'll reply with next steps.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={site.cta.calendly.href}
                target="_blank"
                rel="noreferrer"
                className="
                  sparkle-btn
                  relative inline-flex items-center justify-center
                  overflow-hidden
                  rounded-full
                  px-6 py-2.5
                  text-sm font-medium text-white
                  transition-all duration-500
                "
              >
                {/* Sparkle background layer */}
                <span className="sparkle-layer" aria-hidden />

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  {site.cta.calendly.label}
                </span>
              </a>

              <a
                href={site.cta.intake.href}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-bg px-5 py-3 text-sm font-semibold text-fg hover:bg-muted"
              >
                {site.cta.intake.label}
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mb-8 flex flex-col gap-4 sm:gap-5">
          {/* In-person meeting — star-shaped hero badge */}
          <div
            className="footer-in-person-star mx-auto flex max-w-md flex-col items-center justify-center gap-2 bg-accent-50 px-6 py-6 sm:px-8 sm:py-8 text-center shadow-[0_0_0_2px_rgba(222,71,163,0.35)] drop-shadow-md"
            role="img"
            aria-label="Optional in-person website planning in Portland"
          >
            <span className="text-2xl sm:text-3xl" aria-hidden>☕️</span>
            <p className="text-sm font-bold text-accent-700 sm:text-base">
              Optional in-person planning in Portland
            </p>
            <p className="text-xs text-accent-700/90 sm:text-sm leading-snug">
              Sick of Zoom meetings? Are you the kind of person who prefers to meet in person? (Me too!)
              Coffee shop, co-working space, or wherever you feel comfortable — your spot or mine.
              Just let me know on your <a href="/intake" className="text-accent-700 underline">intake form</a> and we'll make it happen.
            </p>
          </div>
        </div>

        {/* Footer meta */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-fg/60">{site.footer.finePrint}</div>

          {site.footer.note && (
            <div className="max-w-md text-xs text-fg/50">
              {site.footer.note}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
