import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Service Tools Studio — Custom Websites for Service Businesses | Portland, OR",
  description:
    "Portland-based, female-owned web studio. We build clear, professional websites for service business owners—no tech experience needed. Local to Oregon, working with clients worldwide.",
  openGraph: {
    title: "Service Tools Studio — Custom Websites for Service Businesses | Portland, OR",
    description:
      "Portland-based, female-owned web studio. We build clear, professional websites for service business owners—no tech experience needed. Local to Oregon, working with clients worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Tools Studio — Custom Websites for Service Businesses | Portland, OR",
    description:
      "Portland-based, female-owned web studio. We build clear, professional websites for service business owners—no tech experience needed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
