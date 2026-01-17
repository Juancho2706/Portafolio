import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Juan Villegas | Creative Developer",
  description: "Creative Developer & Frontend Specialist. Crafting immersive digital experiences with Next.js, React, and Framer Motion.",
  keywords: ["Creative Developer", "Frontend Developer", "Next.js", "React", "Framer Motion", "Juan Villegas", "Web Design"],
  authors: [{ name: "Juan Villegas", url: "https://juanvillegas.dev" }],
  metadataBase: new URL('https://juanvillegas.dev'),
  alternates: {
    canonical: '/',
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
    url: 'https://juanvillegas.dev',
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${syne.variable} ${manrope.variable} font-sans antialiased bg-void text-starlight overflow-x-hidden selection:bg-ethereal selection:text-void`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
