'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();

    // Helper to safely access experience data
    const experienceData = t.experience || { title: "Experience", items: [] };

    return (
        <section id="experience" className="py-20 bg-void relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center md:text-left"
                >
                    <span className="text-ethereal font-mono text-xs tracking-widest uppercase block mb-4">
                        {t.skills.stack === "STACK" ? (t.language === 'es' ? 'TRAYECTORIA' : 'JOURNEY') : 'JOURNEY'}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display text-starlight">
                        {experienceData.title}
                    </h2>
                </motion.div>

                <div className="space-y-12 relative border-l border-white/10 ml-3 md:ml-0 pl-8 md:pl-0">
                    {experienceData.items.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative md:grid md:grid-cols-5 md:gap-8 group"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-void border border-ethereal group-hover:bg-ethereal transition-colors duration-300 md:hidden" />

                            {/* Year - Desktop: Left col, Mobile: Top */}
                            <div className="md:col-span-1 mb-2 md:mb-0">
                                <span className="text-ethereal/80 font-mono text-sm tracking-wider">
                                    {item.year}
                                </span>
                            </div>

                            {/* Content - Desktop: Right 4 cols */}
                            <div className="md:col-span-4 relative">
                                {/* Desktop Dot */}
                                <div className="hidden md:block absolute -left-[41px] top-2 w-3 h-3 rounded-full bg-void border border-ethereal group-hover:bg-ethereal transition-colors duration-300" />

                                <h3 className="text-2xl font-display text-starlight mb-1 flex items-center gap-2">
                                    {item.role}
                                </h3>
                                <p className="text-starlight/50 font-sans text-sm tracking-widest uppercase mb-4">
                                    {item.company}
                                </p>
                                <p className="text-starlight/70 font-sans leading-relaxed max-w-2xl">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
