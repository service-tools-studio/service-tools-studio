import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { CONTACT_EMAIL } from '@/app/constants';

type IntakePayload = {
  name?: string;
  email?: string;
  business?: string;
  website?: string;
  needs?: string;
  timeline?: string;
  budget?: string;
};

export async function POST(req: Request) {
  const payload = (await req.json()) as IntakePayload;
  const name = (payload.name ?? '').trim();
  const email = (payload.email ?? '').trim();
  const needs = (payload.needs ?? '').trim();

  if (!name || !email || !needs) {
    return NextResponse.json(
      { error: 'Missing required fields.' },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailAppPassword) {
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const text = [
    'New Website Project Inquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${(payload.business ?? '').trim() || 'N/A'}`,
    `Current website: ${(payload.website ?? '').trim() || 'N/A'}`,
    '',
    'What you need built:',
    needs,
    '',
    `Timeline: ${(payload.timeline ?? '').trim() || 'Not specified'}`,
    `Budget: ${(payload.budget ?? '').trim() || 'Not specified'}`,
  ].join('\n');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_FROM_EMAIL || gmailUser,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: 'New Website Project Inquiry',
      text,
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
