export default function OutcomesSection() {
  const items = [
    {
      title: "Built-in tools",
      description:
        "Let customers get a quote & book instantly — no back-and-forth.",
      icon: "🧰",
    },
    {
      title: "Clear calls to action",
      description:
        "Every page guides visitors toward calling or booking.",
      icon: "⚡",
    },
    {
      title: "Fast, mobile-first design",
      description:
        "Loads quickly & looks great on phones.",
      icon: "📱",
    },
    {
      title: "Done-for-you, start to finish",
      description:
        "We handle everything so you can focus on your business.",
      icon: "🤝",
    },
  ];

  return (
    <section
      id="outcomes"
      className="scroll-mt-20 mb-10 w-full bg-[#F9F7FB] py-20"
    >
      <div className="mx-auto w-full min-w-0 max-w-5xl px-4">
        {/* Heading */}
        <div className="max-w-2xl mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent shimmer-text">
            What's included
          </p>
          <h2 className="mt-3 mb-10 text-2xl text-ink sm:text-3xl lg:text-5xl font-semibold">
            Built to turn visitors into booked customers
          </h2>
          {/* <p className="text-gray-600 text-sm">
            Designed to make it easy for people to understand your
            services, trust your business, and take action.
          </p> */}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-ink mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
