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
  description: "Creative Developer & UI/UX Enthusiast. Crafting digital experiences with Next.js and WebGL.",
  keywords: ["Creative Developer", "Front End", "Next.js", "React", "WebGL", "Juan Villegas"],
  authors: [{ name: "Juan Villegas" }],
  openGraph: {
    title: "Juan Villegas | Creative Developer",
    description: "Digital experiences crafted with code.",
    type: "website",
    locale: "es_ES",
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
