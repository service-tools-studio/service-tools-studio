'use client';
import { useState } from 'react';
import { CONTACT_EMAIL, CALENDLY_URL, PRIMARY_CTA_CLASSNAME } from '@/app/constants';

export default function IntakeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
    needs: '',
    timeline: '',
    budget: '$1,000–$1,500',
    // openToRebuild: 'yes',
  });


  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState('idle');

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('Failed to send');
      }

      setSubmitState('sent');
    } catch {
      // Fallback to mail client so leads are never blocked.
      const subject = encodeURIComponent('New Website Project Inquiry');
      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Business: ${form.business}`,
          `Current website: ${form.website || 'N/A'}`,
          '',
          `What you need built:`,
          `${form.needs}`,
          '',
          `Timeline: ${form.timeline || 'Not specified'}`,
          `Budget: ${form.budget || 'Not specified'}`,
        ].join('\n')
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (<>
    <p className="mb-4 text-sm text-stone-600">
      Share a few details and we&apos;ll follow up with a simple next step. No pressure. This form doesn&apos;t lock you into anything, it just starts the conversation.
    </p>

    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2"
    >
      <div className="md:col-span-1">
        <label className="block text-xs font-medium text-ink/90">
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          />
        </label>
      </div>

      <div className="md:col-span-1">
        <label className="block text-xs font-medium text-ink/90">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          />
        </label>
      </div>

      <div className="md:col-span-1">
        <label className="block text-xs font-medium text-ink/90">
          Business name
          <input
            type="text"
            name="business"
            value={form.business}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          />
        </label>
      </div>

      <div className="md:col-span-1">
        <label className="block text-xs font-medium text-ink/90">
          Current website (if any)
          <input
            type="url"
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="https://example.com"
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          />
        </label>
      </div>

      <div className="md:col-span-2">
        <label className="block text-xs font-medium text-ink/90">
          What do you need built?
          <textarea
            name="needs"
            value={form.needs}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
            placeholder="New 3-page site, full rebuild of my current site, a focused page for a specific offer, etc."
          />
        </label>
      </div>

      <div className="md:col-span-1">
        <label className="block text-xs font-medium text-ink/90">
          Timeline
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          >
            <option value="">Select an option</option>
            <option value="asap">ASAP (within ~2 weeks)</option>
            <option value="this-month">This month</option>
            <option value="flexible">I’m flexible</option>
          </select>
        </label>
      </div>

      {/* <div className="md:col-span-1">
        <span className="block text-xs font-medium text-ink/90">
          Open to a full rebuild if that&apos;s best?
        </span>
        <div className="mt-1 flex gap-4 text-xs text-ink/90">
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="openToRebuild"
              value="yes"
              checked={form.openToRebuild === 'yes'}
              onChange={handleChange}
              className="h-3 w-3 border-stone-300 text-ink focus:ring-stone-500"
            />
            Yes
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="openToRebuild"
              value="maybe"
              checked={form.openToRebuild === 'maybe'}
              onChange={handleChange}
              className="h-3 w-3 border-stone-300 text-ink focus:ring-stone-500"
            />
            Maybe
          </label>
        </div>
      </div> */}

      <div className="md:col-span-1">
        <label className="block text-xs font-medium text-ink/90">
          What level of investment are you comfortable making to improve your online presence?
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          >
            <option value="1000-2500">$1,000 – $2,500</option>
            <option value="2500-5000">$2,500 – $5,000</option>
            <option value="5000-8000">$5,000 – $8,000</option>
            <option value="8000-15000">$8,000 – $15,000+</option>
          </select>
        </label>
      </div>


      <div className="md:col-span-2 flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className={PRIMARY_CTA_CLASSNAME}
        >
          <span className="sparkle-layer" aria-hidden />
          <span className="relative z-10">
            {isSubmitting ? 'Sending...' : 'Get your website plan ✨'}
          </span>
        </button>

        <p className="text-xs text-stone-500">
          No spam, no automated lists. We'll follow up with a simple next step.
        </p>
      </div>
      {submitState === 'sent' && (
        <p className="md:col-span-2 text-sm text-emerald-700">
          Thanks! Your request was sent. We&apos;ll follow up by email soon.
        </p>
      )}
    </form>

    {CALENDLY_URL && (
      <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-ink/90 shadow-sm">
        <p>
          Prefer to talk it through first?{' '}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-ink underline underline-offset-2 hover:text-ink/90"
          >
            Book a short intro call
          </a>
        </p>
      </div>
    )}
  </>
  )
}