'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Projects from '@/components/Projects';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AgendaPage() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            // Threshold to switch from hero button to sticky banner
            setScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappLink = "https://api.whatsapp.com/send/?phone=56992733206&text=Hola+vi+tu+instagram+y+quiero+cotizar+una+web";

    return (
        <main className="min-h-screen bg-void selection:bg-ethereal selection:text-void flex flex-col items-center relative overflow-x-hidden">

            {/* Sticky WhatsApp Banner */}
            <AnimatePresence>
                {scrolled && (
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        className="fixed top-0 left-0 right-0 z-50 bg-ethereal text-void py-3 px-4 shadow-lg flex justify-between items-center"
                    >
                        <span className="font-display font-bold text-lg uppercase tracking-wider">
                            Juan Villegas
                        </span>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-void text-ethereal px-4 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-void/90 transition-colors flex items-center gap-2"
                        >
                            <span>Cotizar Ahora</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center w-full max-w-4xl mx-auto">
                {/* Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-ethereal/5 blur-[120px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-display text-starlight mb-6 leading-tight">
                        COTIZA <span className="text-ethereal">TU WEB</span>
                    </h1>
                    <p className="text-starlight/60 text-lg md:text-xl font-sans mb-12 max-w-xl mx-auto">
                        Lleva tu negocio al siguiente nivel con una presencia digital impactante y profesional.
                    </p>

                    {/* Giant WhatsApp Button */}
                    <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center gap-4 bg-ethereal text-void px-8 py-6 rounded-full text-xl md:text-2xl font-bold tracking-widest uppercase overflow-hidden shadow-[0_0_20px_rgba(93,253,255,0.3)] hover:shadow-[0_0_40px_rgba(93,253,255,0.6)] transition-shadow duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            Agendar en WhatsApp
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-12 text-starlight/40 text-sm uppercase tracking-widest animate-pulse"
                    >
                        O desliza para ver mis trabajos
                        <div className="mt-2 text-2xl">↓</div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Projects Section reused */}
            <Projects />

            {/* Simple footer for this landing page */}
            <footer className="w-full py-8 text-center text-starlight/20 text-xs uppercase tracking-widest border-t border-white/5">
                © {new Date().getFullYear()} Juan Villegas
            </footer>
        </main>
    );
}
