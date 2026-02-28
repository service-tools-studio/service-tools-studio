'use client';
import { useState } from 'react';
import { CONTACT_EMAIL, CALENDLY_URL } from '@/app/constants';

export default function IntakeForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
    needs: '',
    timeline: '',
    projectType: 'One-page Site / Landing Page (typically $1,000–$1,500)',
    openToRebuild: 'yes',
  });


  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
        `Open to full rebuild: ${form.openToRebuild}`,
        `Project Type & budget: ${form.projectType || 'Not specified'}`,
      ].join('\n')
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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

      <div className="md:col-span-1">
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
      </div>

      <div className="md:col-span-1">
        <label className="block text-xs font-medium text-ink/90">
          Project type & budget
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          >
            <option value="one-pager">One-page Site / Landing Page (typically $1,000–$1,500)</option>
            <option value="structured-build">Structured Build (typically $4,000–$6,000)</option>
            <option value="custom-design">Custom Design (starting at $12,000)</option>
          </select>
        </label>

        <div className="mt-2 text-xs text-stone-500">
          <ul>
            <li>Landing page = focused page built around one clear CTA.</li>
            <li>Structured build = faster build using a guided layout system.</li>
            <li>Custom design = fully tailored visual system and features from scratch.</li>
          </ul>
        </div>
      </div>


      <div className="md:col-span-2 flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="
    sparkle-btn
    relative inline-flex items-center justify-center
    overflow-hidden
    rounded-full
    px-6 py-2.5
    text-sm font-medium text-stone-50
    shadow-sm
    transition-all duration-500
    focus:outline-none focus-visible:ring-2 focus-visible:ring-btn-primary
  "
        >
          <span className="sparkle-layer" aria-hidden />
          <span className="relative z-10">Send project details</span>
        </button>

        <p className="text-xs text-stone-500">
          This will open an email draft with your answers—no spam, no automated lists.
        </p>
      </div>
    </form>

    {/* {
      CALENDLY_URL && (
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
            </a>{' '}
            —we&apos;re happy to walk you through the process with zero tech speak.
          </p>
        </div>
      )
    } */}
  </>
  )
}