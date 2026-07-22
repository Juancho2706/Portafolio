import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL, SOCIAL_LINKS } from "@/constants/site";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Juan Villegas | Creative Developer",
  description: "Creative Developer & Frontend Specialist. Crafting immersive digital experiences with Next.js, React, and Framer Motion.",
  keywords: ["Creative Developer", "Frontend Developer", "Next.js", "React", "Framer Motion", "Juan Villegas", "Web Design"],
  authors: [{ name: "Juan Villegas", url: SITE_URL }],
  metadataBase: new URL(SITE_URL),
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Juan Villegas | Creative Developer",
    description: "Creative Developer & Frontend Specialist. Crafting immersive digital experiences.",
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: 'Juan Villegas Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 1024,
        height: 1024,
        alt: 'Juan Villegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Juan Villegas | Creative Developer",
    description: "Creative Developer & Frontend Specialist.",
    images: ['/profile.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${syne.variable} ${manrope.variable} font-sans antialiased bg-void text-starlight overflow-x-hidden selection:bg-ethereal selection:text-void`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Juan Villegas',
              jobTitle: 'Creative Developer',
              url: SITE_URL,
              image: `${SITE_URL}/profile.png`,
              sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
            }),
          }}
        />
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
