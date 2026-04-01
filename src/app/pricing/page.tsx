import Link from 'next/link';
import PageTopSection from '@/components/PageTopSection';

const TIERS = [
  {
    name: 'Launch Site',
    subtitle: 'Landing page / One-page site',
    price: '$1,000 – $1,500',
    description: 'A single focused page for one offer, event, or lead capture. Clear structure, one clear CTA, mobile-friendly.',
    features: [
      '📝 One page, one goal',
      '💌 Contact form or booking link',
      '📱 Mobile-responsive',
      '🖼️ Copy and images you provide',
    ],
    cta: 'Get a quote',
    href: '/intake',
    featured: false,
  },
  {
    name: 'Business Site',
    subtitle: 'Multi-page professional website for a growing business.',
    price: '$4,000 – $8,000',
    description: 'A multi-page site built on a proven layout system. Faster turnaround, clean UX, your brand applied throughout.',
    features: [
      '📖 Typically 3–5 pages',
      '📚 Proven layout structure',
      '🖼️ Your colors, copy, and images',
      '💌 Contact forms and clear navigation',
      '📱 Mobile + desktop polish',
    ],
    cta: 'Get a quote',
    href: '/intake',
    featured: true,
  },
  {
    name: 'Custom Build',
    subtitle: 'Advanced custom design platform',
    price: 'Starting at $12,000',
    description: 'Fully tailored site from strategy to design to build. Custom layout, visual system, and features for brands ready to stand out.',
    features: [
      '🎨 Custom design and UX',
      '📖 As many pages as you need',
      '🦄 Unique layout and components',
      '💬 Ongoing collaboration on look and feel',
      '🚀 Launch and handoff support',
    ],
    cta: 'Get a quote',
    href: '/intake',
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageTopSection
        slug="Pricing"
        title="Simple, transparent pricing"
        description="We offer three ways to work with us. Our pricing is based on the complexity of the project and the time it will take to complete."
      />
      <div className="mx-auto max-w-5xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl bg-white p-6 shadow-sm ${tier.featured ? 'ring-2 ring-accent-200' : ''
                }`}
            >
              {tier.featured && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-700">
                  Most popular
                </p>
              )}
              <h3 className="text-lg font-semibold text-ink">
                {tier.name}
              </h3>
              {tier.subtitle && (
                <p className="mt-0.5 text-sm font-normal text-stone-500">
                  {tier.subtitle}
                </p>
              )}
              <p className="mt-2 text-2xl font-semibold text-ink">{tier.price}</p>
              <p className="mt-3 text-sm text-stone-600">{tier.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`mt-6 flex w-full items-center justify-center rounded-full py-2.5 text-sm font-medium transition ${tier.featured
                  ? 'sparkle-btn relative overflow-hidden text-white shadow-sm'
                  : 'border border-stone-300 bg-white text-ink hover:border-stone-400'
                  }`}
              >
                {tier.featured ? (
                  <>
                    <span className="sparkle-layer" aria-hidden />
                    <span className="relative z-10">{tier.cta}</span>
                  </>
                ) : (
                  tier.cta
                )}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-stone-600">
          Not sure which tier fits?{' '}
          <Link href="/intake" className="font-medium text-ink underline underline-offset-2 hover:text-accent-700">
            Tell us about your project
          </Link>{' '}
          and we’ll recommend the best option.
        </p>
      </div>
    </>
  );
}
