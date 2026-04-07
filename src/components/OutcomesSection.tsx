'use client';

import { motion, useReducedMotion } from 'framer-motion';

const ITEMS = [
  {
    title: 'Built-in tools',
    description:
      'Let customers get a quote & book instantly — no back-and-forth.',
    icon: '🧰',
  },
  {
    title: 'Clear calls to action',
    description: 'Every page guides visitors toward calling or booking.',
    icon: '⚡',
  },
  {
    title: 'Fast, mobile-first design',
    description: 'Loads quickly & looks great on phones.',
    icon: '📱',
  },
  {
    title: 'Done-for-you, start to finish',
    description: 'We handle everything so you can focus on your business.',
    icon: '🤝',
  },
] as const;

export default function OutcomesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="outcomes"
      className="scroll-mt-20 mb-10 w-full bg-accent/10 py-20"
    >
      <div className="mx-auto w-full min-w-0 max-w-5xl px-4">
        <div className="mb-6 max-w-2xl">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-600"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            What's included
          </motion.p>
          <motion.h2
            className="mt-3 mb-10 text-2xl font-semibold text-ink sm:text-3xl lg:text-5xl"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
          >
            Built to turn visitors into booked customers
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35, margin: '0px 0px -56px 0px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.06 }}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4 text-2xl">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
