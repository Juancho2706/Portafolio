import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Anton, Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const teko = Teko({ subsets: ["latin"], variable: "--font-teko" });

export const metadata: Metadata = {
  title: "Juan Villegas | Desarrollador Front End",
  description: "Portafolio de Juan Villegas, Desarrollador Front End especializado en Next.js, React y Tailwind CSS. Diseños UI/UX modernos y experiencias web inmersivas.",
  keywords: ["Front End Developer", "Next.js", "React", "Tailwind CSS", "Portfolio", "Juan Villegas", "Web Developer"],
  authors: [{ name: "Juan Villegas" }],
  openGraph: {
    title: "Juan Villegas | Desarrollador Front End",
    description: "Portafolio profesional de desarrollo web con estética moderna.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${anton.variable} ${teko.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
