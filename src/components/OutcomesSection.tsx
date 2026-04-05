'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  CARD_VIEWPORT,
  SECTION_VIEWPORT,
  cardItemVariants,
  sectionRevealVariants,
} from '@/components/sectionRevealMotion';

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
  const itemVariants = cardItemVariants(reduceMotion);

  return (
    <motion.section
      id="outcomes"
      className="scroll-mt-20 mb-10 w-full bg-[#F9F7FB] py-20"
      variants={sectionRevealVariants}
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={SECTION_VIEWPORT}
    >
      <div className="mx-auto w-full min-w-0 max-w-5xl px-4">
        <div className="mb-6 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent shimmer-text">
            What's included
          </p>
          <h2 className="mt-3 mb-10 text-2xl font-semibold text-ink sm:text-3xl lg:text-5xl">
            Built to turn visitors into booked customers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              initial={reduceMotion ? 'visible' : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={CARD_VIEWPORT}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4 text-2xl">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
