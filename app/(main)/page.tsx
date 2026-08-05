import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { JsonLd } from '@/components/JsonLd';
import { PERSON_ID, webPageSchema } from '@/constants/schema';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const homeSchema = {
  ...webPageSchema({
    type: 'ProfilePage',
    path: '/',
    name: 'Juan Villegas | Desarrollador Web Frontend en Chile',
    description:
      'Portafolio de Juan Villegas: proyectos, stack y experiencia en desarrollo web frontend con Next.js, React y Tailwind CSS.',
  }),
  mainEntity: { '@id': PERSON_ID },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={homeSchema} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
