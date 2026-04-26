import type { Metadata } from "next";
import { Playfair_Display, Roboto_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
      className={`${sourceSans3.className} ${sourceSans3.variable} ${robotoMono.variable} ${playfair.variable}`}
    >
      <body className="antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
