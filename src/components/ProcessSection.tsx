'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PROCESS_STEPS } from '@/components/processSteps';
import {
  CARD_VIEWPORT,
  SECTION_VIEWPORT,
  cardItemVariants,
  sectionRevealVariants,
} from '@/components/sectionRevealMotion';

export default function ProcessSection() {
  const reduceMotion = useReducedMotion();
  const itemVariants = cardItemVariants(reduceMotion);

  return (
    <motion.section
      id="process"
      className="scroll-mt-20 bg-accent-50 py-16 sm:py-20"
      variants={sectionRevealVariants}
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={SECTION_VIEWPORT}
    >
      <div className="mx-auto mb-10 w-full min-w-0 max-w-5xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
          our simple process
        </p>
        <h2 className="mt-3 mb-6 text-2xl font-semibold text-ink sm:text-3xl lg:text-5xl">How it works</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROCESS_STEPS.map((step) => (
            <motion.article
              key={step.step}
              variants={itemVariants}
              initial={reduceMotion ? 'visible' : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={CARD_VIEWPORT}
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
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={CARD_VIEWPORT}
          className="my-12 text-center sm:my-16"
        >
          <p className="text-sm text-stone-700">
            Not techy? No worries. We&apos;ll handle everything from design to launch. It&apos;s all{' '}
            <i>done for you</i>.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
