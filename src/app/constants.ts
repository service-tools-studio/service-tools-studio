import { Project } from '../types';
export const CONTACT_EMAIL = 'service.tools.studio@gmail.com';
export const CALENDLY_URL =
  'https://calendly.com/service-tools-studio/15min';
export const GOLDEN_HOUR_URL = 'https://goldenhourcleaningco.com/residential';
export const TESS_SITE_URL = 'https://theconsciousmvt.com';
export const HAW_URL = 'https://structured-build-haw.vercel.app/';
export const CLEANING_QUOTE_URL = 'https://service-tools-studio.github.io/cleaning-quote/';


export const PROJECTS: Project[] = [
  {
    title: 'Golden Hour Cleaning Co.',
    slug: 'golden-hour',
    category: 'custom',
    subtitle: 'Premium eco-minded cleaning',
    liveUrl: GOLDEN_HOUR_URL,
    previewTitle: 'Golden Hour Cleaning Co. website preview',
    description: [
      'A premium eco-cleaning brand and website I designed and built from scratch. The site includes a custom quote calculator and booking flow so visitors can go from “curious” to “scheduled” in a few clicks.',
      'Behind the scenes, the site handles pricing logic, estimated cleaning time, and lead capture automatically—so the owner spends less time in the inbox and more time doing great work.',
    ],
    pills: [
      'Custom quote calculator',
      'Booking flow & lead capture',
      'Coded from scratch (no templates)',
      'Mobile-friendly layout',
      'Deployed to custom domain',
    ],
  },
  {
    title: 'The Conscious Movement',
    slug: 'the-conscious-mvt',
    category: 'custom',
    subtitle: 'Sound healing, private sessions, and in-person events',
    liveUrl: TESS_SITE_URL,
    previewTitle: 'The Conscious Movement sound healing website preview',
    description: [
      'A calm, immersive website I designed and built for a sound healer and facilitator offering group journeys, private sessions, and in-person events.',
      'The experience guides visitors from resonance to action with clear offerings, gentle storytelling, and an intuitive layout—making it easy to explore sessions, understand what to expect, and sign up with confidence.',
    ],
    pills: [
      'Custom design & layout',
      'Event & session-focused UX',
      'Calm visual system',
      'Mobile-first build',
      'Deployed to custom domain',
    ],
  },
  {
    title: 'Heart Aligned Wellness LLC',
    slug: 'heart-aligned-wellness',
    category: 'structured',
    subtitle: 'Sound healing, private sessions, and in-person events',
    liveUrl: HAW_URL,
    previewTitle: 'Heart Aligned Wellness structured website preview',
    description: [
      'A grounded, calming website built for Heart Aligned Wellness, a sound healing and wellness practice offering private sessions, group journeys, and in-person events.',
      'This project uses a structured site framework with intentional customization—refining color palette, typography, spacing, and visual accents to reflect the brand’s soothing, heart-centered energy while keeping the core layout intact for clarity and ease of use.',
    ],
    pills: [
      'Structured build with custom styling',
      'Brand-aligned colors & typography',
      'Session & event-focused UX',
      'Calm, grounded visual system',
      'Mobile-first responsive build',
    ],
  },
  {
    title: 'Cleaning Quote Calculator Landing Page',
    slug: 'cleaning-quote-calculator-landing',
    category: 'one-pager',
    subtitle: 'A conversion-focused landing page to demo real-time quoting and lead capture tool',
    liveUrl: CLEANING_QUOTE_URL,
    previewTitle: 'Cleaning quote calculator landing page preview',
    description: [
      'A conversion-focused info page that explains the Cleaning Quote Calculator tool and how it works.',
      'Visitors can click into a live demo to test the calculator, then sign up to become a client and embed the calculator on their own website—positioning the tool as a premium upgrade for cleaning businesses.',
    ],
    pills: [
      'Interactive quote calculator',
      'Conversion-focused one-pager',
      'Real-world business use case',
      'Mobile-first responsive build',
      'Deployed via GitHub Pages',
    ],
  },
  {
    title: 'Instant Quote & Book — Golden Hour Cleaning Co.',
    slug: 'instant-quote-book-golden-hour',
    category: 'one-pager',
    subtitle: 'A production landing page for real-time quoting and booking on a local cleaning business website',
    liveUrl: 'https://www.goldenhourcleaningco.com/residential/instant-quote',
    previewTitle: 'Instant Quote & Book feature page preview',
    description: [
      'A production Instant Quote & Book landing page built for Golden Hour Cleaning Co., allowing customers to generate real-time cleaning quotes and book services directly on the website.',
      'The page showcases dynamic pricing logic, lead capture, and booking flow in a real business context—demonstrating how interactive tools can increase conversions for service-based businesses.',
    ],
    pills: [
      'Instant quote & booking flow',
      'Live on a cleaning business website',
      'Conversion-focused one-pager',
      'Mobile-first responsive build',
      'Custom pricing logic',
    ],
  }




  // Example structured build project stub (replace with real ones):
  // {
  //   title: 'Structured Build — Example',
  //   slug: 'structured-example',
  //   category: 'structured',
  //   subtitle: 'A guided build with a proven layout',
  //   liveUrl: 'https://example.com',
  //   previewTitle: 'Structured Build website preview',
  //   description: [
  //     'A structured build using a proven page layout system—fast turnaround, clean UX, and a polished finish.',
  //   ],
  //   pills: ['Structured build system', 'Fast turnaround', 'Mobile-first'],
  // },
];