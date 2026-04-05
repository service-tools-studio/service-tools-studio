import { LinkedinIcon } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flow-root">
      {/* Float right so body copy wraps along the left and under the image */}
      <div className="float-right mb-4 ml-3 w-40 pt-0.5 sm:mb-6 sm:ml-8 sm:w-[min(280px,calc(100%-2rem))] sm:max-w-[280px] sm:pt-1 lg:ml-12">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/cathedral-headshot.jpg"
            alt="Jasmin, founder of Service Tools Studio"
            width={768}
            height={1365}
            sizes="(max-width: 640px) 160px, 280px"
            className="h-auto w-full object-cover object-center"
            priority={false}
          />
        </div>
      </div>

      <div className="min-w-0 space-y-3 text-sm text-stone-700">
        <p>
          <span className="font-semibold text-stone-900">Hi, I&apos;m Jasmin, owner and founder of Service Tools Studio.</span>{' '}
          I&apos;m a web engineer who builds clean, modern websites for small businesses and founders who want a fresh start online.
        </p>
        <p>
          By day, I work as a senior engineer at Nike on marketing experimentation and analytics systems for nike.com. On the side, I build custom websites from scratch. Allow me to deliver your website to you ready to go, including design and build from start to launch.
        </p>
        <p>
          I care about clarity, structure, and making sure your site actually works for your business. My style is calm, collaborative, and practical—I&apos;ll explain things clearly and keep your build simple and solid.
        </p>
        <p>📍 <strong>Locally owned in Portland, OR</strong> — serving clients across the US and worldwide.</p>

        <div className="clear-right mt-4 flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/jasminmirandab/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-stone-700 transition hover:text-violet-700"
            aria-label="Visit my LinkedIn profile"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-violet-700 transition hover:bg-violet-100">
              <LinkedinIcon size={16} />
            </span>
            <span className="underline underline-offset-4">Connect with Jasmin on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}