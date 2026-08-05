'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useRef } from 'react';

const About = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} id="about" className="py-32 bg-void relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Visual Side - Image */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-ethereal/20 rounded-none transform rotate-3 scale-95 group-hover:rotate-0 transition-transform duration-700 ease-out" />
                        <motion.div
                            style={{ y }}
                            className="relative aspect-[3/4] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                        >
                            <img
                                src="/profile.png"
                                alt="Juan Villegas, desarrollador web frontend en Chile"
                                width={1024}
                                height={1024}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm font-mono text-starlight/50 uppercase tracking-widest mb-8 flex items-center gap-4"
                        >
                            <span className="w-12 h-[1px] bg-starlight/20" />
                            {t.about.title}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-display text-3xl md:text-5xl leading-tight text-starlight/90"
                        >
                            <p className="mb-8">
                                {t.about.intro}
                            </p>
                            <p className="text-lg md:text-xl text-starlight/60 font-sans font-light leading-relaxed">
                                {t.about.description}
                            </p>
                        </motion.div>

                        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h3 className="text-starlight text-2xl font-display mb-1">2.5+</h3>
                                <p className="text-starlight/40 text-xs font-mono uppercase tracking-widest">{t.about.stats.years}</p>
                            </div>
                            <div>
                                <h3 className="text-starlight text-2xl font-display mb-1">15+</h3>
                                <p className="text-starlight/40 text-xs font-mono uppercase tracking-widest">{t.about.stats.projects}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
