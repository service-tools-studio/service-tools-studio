import type { ReactNode } from 'react';

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
  icon: ReactNode;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Quick intro & fit check',
    text: "Tell us what you need. We’ll listen and guide you — no tech knowledge required.",
    icon: '👋',
  },
  {
    step: '02',
    title: 'Simple plan & price',
    text: 'We map out a clear scope, timeline, and price. No surprises.',
    icon: '📝',
  },
  {
    step: '03',
    title: 'Design & build',
    text: 'We handle everything while you focus on your business.',
    icon: '👩🏽‍💻',
  },
  {
    step: '04',
    title: 'Launch & handoff',
    text: 'Your site goes live, fully set up and ready to go.',
    icon: '🎉',
  },
];
