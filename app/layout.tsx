import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Juan Villegas | Creative Developer",
  description: "Creative Developer & Frontend Specialist. Crafting immersive digital experiences with Next.js, React, and Framer Motion.",
  keywords: ["Creative Developer", "Frontend Developer", "Next.js", "React", "Framer Motion", "Juan Villegas", "Web Design"],
  authors: [{ name: "Juan Villegas", url: "https://www.webdevjv.com" }],
  metadataBase: new URL('https://www.webdevjv.com'),
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.webdevjv.com',
  },
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
    url: 'https://www.webdevjv.com',
    siteName: 'Juan Villegas Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 800,
        height: 600,
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
