type PageTopSectionProps = {
  slug: String,
  title: String,
  description: String,
}

export default function PageTopSection({
  slug,
  title,
  description,
}: PageTopSectionProps) {
  return (
    <section className="bg-[#f3ecfd] mb-10">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-18">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700 shimmer-text">
          {slug}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-stone-600">
          {description}
        </p>
      </div>
    </section>
  )
}