import type { Metadata } from "next";
import { Manrope, Roboto_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html
      lang="en"
      className={`${manrope.className} ${manrope.variable} ${robotoMono.variable}`}
    >
      <body className="antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
