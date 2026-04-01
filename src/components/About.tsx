import { LinkedinIcon } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-row items-start gap-3 sm:gap-8 lg:gap-12">
      <div className="min-w-0 flex-1 text-sm text-stone-700 space-y-3">
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

        <div className="mt-4 flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/jasminmirandab/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-stone-700 hover:text-violet-700 transition"
            aria-label="Visit my LinkedIn profile"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 transition">
              <LinkedinIcon size={16} />
            </span>
            <span className="underline underline-offset-4">Connect with Jasmin on LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="w-40 shrink-0 pt-0.5 sm:w-auto sm:max-w-[min(100%,280px)] sm:pt-1">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/cathedral-headshot.jpg"
            alt="Jasmin, founder of Service Tools Studio"
            width={768}
            height={1365}
            sizes="(max-width: 640px) 160px, 280px"
            className="w-full h-auto object-cover object-center"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
};