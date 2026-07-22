'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import ProjectForm from '@/components/ProjectForm';

export default function CreaTuPaginaClient() {
    const { t } = useLanguage();

    if (!t.brief) return null;

    return (
        <main className="min-h-screen bg-void selection:bg-ethereal selection:text-void flex flex-col">

            <section className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-ethereal/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-display text-starlight mb-6 leading-tight">
                            {t.brief.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? 'text-ethereal block md:inline md:ml-3' : ''}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                        <p className="text-starlight/60 text-lg md:text-xl font-sans leading-relaxed">
                            {t.brief.subtitle}
                        </p>
                    </motion.div>

                    <ProjectForm />
                </div>
            </section>
        </main>
    );
}
