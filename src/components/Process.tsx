type Step = {
  step: string;
  title: string;
  text: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    step: '01',
    title: 'Quick intro & fit check',
    text: "Tell us what you need. We’ll listen and guide you — no tech knowledge required.",
    icon: '👋',
  },
  {
    step: '02',
    title: 'Simple plan & price',
    text: "We map out a clear scope, timeline, and price. No surprises.",
    icon: '📝',
  },
  {
    step: '03',
    title: 'Design & build',
    text: "We handle everything while you focus on your business.",
    icon: '👩🏽‍💻',
  },
  {
    step: '04',
    title: 'Launch & handoff',
    text: "Your site goes live, fully set up and ready to go.",
    icon: '🎉',
  },
];

export default function Process() {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {STEPS.map((step, idx) => (
          <article
            key={step.step}
            className={[
              'group relative text-left',
              'rounded-2xl bg-white p-6 shadow-sm',
              'transition-shadow duration-200',
              'hover:shadow-md',
              'animate-fade-in-up',
            ].join(' ')}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--btn-primary) 10%, transparent)',
                }}
              >
                {step.icon}
              </div>

              <div className="flex min-w-0 items-center gap-2">
                <div className="text-xs font-semibold tracking-widest text-accent-600">{step.step}</div>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm text-stone-600">{step.text}</p>
          </article>
        ))}
      </div>

      <div className="my-25 rounded-2xl bg-accent-50 p-6 text-center">
        <p className="text-sm text-stone-700">
          Not techy? No worries. We'll handle everything from design to launch. It's all <i>done for you</i>.
        </p>
      </div>
    </>
  );
}
