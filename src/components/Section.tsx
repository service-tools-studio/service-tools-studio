export default function Section({
  id,
  title,
  className,
  style,
  children,
}: {
  id: string;
  title?: string;
  className?: string;
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
        {title && (
          <h2 className="mb-6 text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}