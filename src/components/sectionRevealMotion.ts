import type { Variants } from 'framer-motion';

/** Section blur: re-run each time the band enters/leaves the viewport. */
export const SECTION_VIEWPORT = { once: false, amount: 0.2 as const };

/**
 * Each card is observed on its own box (important for tall mobile stacks).
 */
export const CARD_VIEWPORT = {
  once: false,
  amount: 0.4,
  margin: '0px 0px -56px 0px',
} as const;

export const sectionRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export function cardItemVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
  };
}
