'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {t.experience.title}
                    </h2>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />

                    <div className="space-y-12">
                        {t.experience.items.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#FF00E5]" />

                                <div className="flex-1 md:w-1/2" />

                                <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                                    <div className="glass-premium p-6 rounded-xl border border-glass-border hover:border-accent/30 transition-colors">
                                        <span className="text-accent font-mono text-sm mb-2 block">{exp.year}</span>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{exp.company}</p>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
