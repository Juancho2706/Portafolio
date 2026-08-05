import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/constants/site";
import { siteSchema } from "@/constants/schema";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

const TITLE = "Juan Villegas | Desarrollador Web Frontend en Chile";
const DESCRIPTION =
  "Desarrollador web frontend en Chile. Diseño y programo páginas web y aplicaciones a medida con Next.js y React: rápidas, responsivas y pensadas para convertir visitas en clientes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Juan Villegas",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "desarrollador web Chile",
    "desarrollador frontend",
    "páginas web a medida",
    "diseño web Chile",
    "crear página web",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Juan Villegas",
    "portafolio desarrollador web",
  ],
  authors: [{ name: "Juan Villegas", url: SITE_URL }],
  creator: "Juan Villegas",
  publisher: "Juan Villegas",
  category: "technology",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_CL",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Juan Villegas — Desarrollador web frontend en Chile | webdevjv.cl",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${syne.variable} ${manrope.variable} font-sans antialiased bg-void text-starlight overflow-x-hidden selection:bg-ethereal selection:text-void`}>
        <JsonLd data={siteSchema} />
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
