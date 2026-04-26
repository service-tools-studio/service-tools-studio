import Image from "next/image";
import { Play, Star, Clock, MapPin, TrendingUp } from "lucide-react";
import { GOOGLE_REVIEWS_URL, PRIMARY_CTA_CLASSNAME } from "@/app/constants";

const TRUST_LOGOS = [
  {
    src: "/images/golden-hour-st-logo.png",
    alt: "Golden Hour Cleaning Co.",
  },
  {
    src: "/images/heart-aligned-wellness-st-logo.png",
    alt: "Heart Aligned Wellness",
  },
  {
    src: "/images/conscious-mvt-st-logo.png",
    alt: "The Conscious Movement",
  },
  {
    src: "/images/odyssey-st-logo.png",
    alt: "Odyssey Hauling",
  },
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbf8f7] text-[#2d1447]">
      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-6 pb-8 pt-6 lg:grid-cols-2 lg:gap-8 lg:px-20 lg:pb-10 lg:pt-10">
        {/* Left copy */}
        <div className="relative z-10 flex flex-col justify-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2d1447]/90 sm:text-sm">
            Done-for-you websites that work
          </p>

          <h1 className="max-w-2xl text-[clamp(1.75rem,4.2vw+0.35rem,2.75rem)] leading-[1.06] tracking-[-0.03em] text-[#35164f] sm:text-[clamp(1.875rem,3.5vw+0.5rem,2.875rem)] lg:max-w-3xl lg:text-[clamp(2rem,2.8vw+1rem,3rem)] xl:text-[clamp(2.125rem,2.4vw+1.1rem,3.25rem)]">
            Websites that look premium. Systems that bring in clients.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#3d3448]/80 sm:text-base lg:mt-5 lg:text-base">
            We build high-converting websites and lead systems for local service
            businesses so you can get more calls, more leads, and more bookings.
          </p>

          <div className="mt-5 flex flex-col gap-3 lg:mt-6 lg:flex-row lg:items-center lg:gap-4">
            <a
              href="#intake"
              className={`${PRIMARY_CTA_CLASSNAME} w-full justify-center sm:w-auto`}
            >
              <span className="sparkle-layer" aria-hidden />
              <span className="relative z-10">
                See how your site could convert better ✨
              </span>
            </a>

            <a
              href="#projects"
              className="flex items-center gap-3 text-sm font-medium text-[#2d1447] sm:gap-3.5 sm:text-base"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2d1447]/10 bg-white shadow-sm sm:h-11 sm:w-11">
                <Play className="h-4 w-4 fill-[#2d1447] sm:h-[1.05rem] sm:w-[1.05rem]" />
              </span>
              View our work
            </a>
          </div>

          {/* Proof strip desktop */}
          <div className="mt-6 hidden grid-cols-4 gap-0 divide-x divide-[#2d1447]/15 lg:mt-8 lg:grid">
            <ProofItem
              icon={<Star />}
              label="5-Star Rated on Google"
              href={GOOGLE_REVIEWS_URL}
            />
            <ProofItem icon={<Clock />} label="2-Week Delivery" />
            <ProofItem icon={<MapPin />} label="Built for Local Businesses" />
            <ProofItem icon={<TrendingUp />} label="Conversion Focused" />
          </div>
        </div>

        {/* Right visual — artboard height matches gradient so the mockup can center vertically inside it */}
        <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] xl:min-h-[480px]">
          <div className="relative mx-auto h-[280px] w-full max-w-[720px] sm:h-[320px] lg:ml-auto lg:mr-0 lg:h-[440px] xl:h-[520px]">
            <div
              className="absolute inset-0 rounded-tl-[8rem] bg-gradient-to-br from-[#f4ebe6] to-[#eee2ff]"
              aria-hidden
            />

            <div
              className="absolute right-2 top-2 bottom-2 hidden w-[48%] rounded-tl-[8rem] bg-[repeating-linear-gradient(90deg,#efe2dc_0px,#efe2dc_8px,#f8f0ec_8px,#f8f0ec_18px)] opacity-70 lg:block"
              aria-hidden
            />

            <img
              src="/images/plant.png"
              alt=""
              className="absolute right-[42%] top-4 z-10 hidden w-[250px] lg:block xl:top-6 xl:w-[320px]"
            />

            <img
              src="/images/website-demo.svg"
              alt="Website examples shown on phone and laptop"
              className="absolute left-1/2 top-1/2 z-20 w-[min(100%,520px)] max-w-[92%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_20px_36px_rgba(45,20,71,0.16)] sm:w-[min(100%,580px)] lg:w-[min(100%,640px)]"
            />
          </div>
        </div>

        {/* Proof strip mobile */}
        <div className="relative z-20 grid grid-cols-4 divide-x divide-[#2d1447]/15 rounded-3xl bg-white p-5 shadow-[0_16px_40px_rgba(45,20,71,0.08)] lg:hidden">
          <ProofItem
            icon={<Star />}
            label="5-Star Rated on Google"
            href={GOOGLE_REVIEWS_URL}
          />
          <ProofItem icon={<Clock />} label="2-Week Delivery" />
          <ProofItem icon={<MapPin />} label="Built for Local Businesses" />
          <ProofItem icon={<TrendingUp />} label="Conversion Focused" />
        </div>
      </div>

      {/* Logo strip */}
      <div className="border-t border-[#2d1447]/10 bg-[#fdfefe] px-6 py-10 text-center">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5a3b78]">
          Trusted by businesses in Portland and beyond
        </p>

        <div className="mx-auto grid max-w-6xl grid-cols-2 items-center justify-items-center gap-8 gap-y-10 md:grid-cols-4 md:gap-y-8">
          {TRUST_LOGOS.map((logo) => (
            <div
              key={logo.src}
              className="relative flex h-20 w-full max-w-[300px] items-center justify-center sm:h-24 sm:max-w-[340px] lg:h-32 lg:max-w-[min(100%,400px)]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={400}
                height={200}
                className="h-full w-full object-contain object-center"
                sizes="(max-width: 1023px) 50vw, 28vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="h-7 w-7 shrink-0">{icon}</div>
      <span className="text-[11px] font-medium leading-tight sm:text-xs lg:text-sm">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-2 px-3 text-center text-[#2d1447] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d1447]/30 lg:flex-row lg:justify-center lg:text-left"
        aria-label={`Open Google reviews for Service Tools Studio`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 px-3 text-center text-[#2d1447] lg:flex-row lg:justify-center lg:text-left">
      {content}
    </div>
  );
}