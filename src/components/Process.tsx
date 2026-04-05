import { PROCESS_STEPS } from '@/components/processSteps';

export default function Process() {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROCESS_STEPS.map((step) => (
          <article
            key={step.step}
            className={[
              'group relative text-left',
              'rounded-2xl bg-white p-6 shadow-sm',
              'transition-shadow duration-200',
              'hover:shadow-md',
            ].join(' ')}
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

      <div className="my-12 text-center sm:my-16">
        <p className="text-sm text-stone-700">
          Not techy? No worries. We&apos;ll handle everything from design to launch. It&apos;s all <i>done for you</i>.
        </p>
      </div>
    </>
  );
}
