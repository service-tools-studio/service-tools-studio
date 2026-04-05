import { CALENDLY_URL } from "@/app/constants";
import { usePathname } from "next/navigation";

export const site = {
  cta: {
    calendly: {
      label: "Book a call",
      href: CALENDLY_URL,
    },
    intake: {
      label: "Start your project",
      href: "/intake",
    },
  },

  footer: {
    finePrint: `© ${new Date().getFullYear()} Service Tools Studio LLC`,
    note: "We build websites for service businesses.",
  },
} as const;

function FooterCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Ready to move forward?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg/70">
          Book a call or start your project — we’ll guide you from there.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={site.cta.calendly.href}
            target="_blank"
            rel="noreferrer"
            className="
              sparkle-btn sparkle-btn--ink
              relative inline-flex items-center justify-center
              overflow-hidden rounded-full px-6 py-3
              text-sm font-medium text-white transition-all duration-500
            "
          >
            <span className="sparkle-layer" aria-hidden />
            <span className="relative z-10 flex items-center gap-2">
              {site.cta.calendly.label}
            </span>
          </a>

          <p className="text-sm text-fg/50">or</p>

          <a
            href={site.cta.intake.href}
            className="text-sm font-medium text-fg underline underline-offset-4 transition hover:text-fg/80"
          >
            {site.cta.intake.label} →
          </a>

          <p className="mt-1 text-sm text-fg/50">
            No pressure. We’ll recommend the best path.
          </p>
        </div>
      </div>
    </section>
  );
}

function PortlandNote() {
  return (
    <div className="pb-12 sm:pb-14">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <div className="rounded-3xl bg-muted/40 px-6 py-6 text-center sm:px-8 sm:py-8">
          <div className="text-2xl" aria-hidden>
            ☕️
          </div>

          <h3 className="mt-3 text-base font-semibold text-fg sm:text-lg">
            Optional in-person planning (Portland)
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-fg/70 sm:text-base">
            Prefer meeting in person? Coffee shop, co-working, or your space.
            Just note it in your{" "}
            <a
              href="/intake"
              className="font-medium text-fg underline underline-offset-2 hover:text-fg/90"
            >
              intake form
            </a>{" "}
            and we’ll make it happen.
          </p>
        </div>
      </div>
    </div>
  );
}

function FooterMeta() {
  return (
    <div className="border-t border-border/60 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-center sm:px-6 sm:text-left md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-fg/60">{site.footer.finePrint}</div>

        {site.footer.note && (
          <div className="text-sm text-fg/50">{site.footer.note}</div>
        )}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  const pathname = usePathname();
  const isIntakePage = pathname === "/intake";
  const isHomePage = pathname === "/";

  if (isIntakePage || isHomePage) {
    return (
      <footer className="bg-bg">
        <PortlandNote />
        <FooterMeta />
      </footer>
    );
  }

  return (
    <footer className="bg-bg">
      <FooterCTA />
      <PortlandNote />
      <FooterMeta />
    </footer>
  );
}