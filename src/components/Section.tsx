export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
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