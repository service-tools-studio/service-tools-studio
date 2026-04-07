export default function Section({
  id,
  eyebrow,
  title,
  className,
  titleClassName,
  style,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  className?: string;
  titleClassName?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={["scroll-mt-20", className].filter(Boolean).join(" ")}
      style={style}
    >
      <div className="mx-auto w-full min-w-0 max-w-5xl px-4 mb-10">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2
            className={[
              eyebrow ? 'mt-3 ' : '',
              'mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink',
              titleClassName || '',
            ].join('')}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}