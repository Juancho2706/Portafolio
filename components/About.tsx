'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10">
                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            {t.about.title}
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            {t.about.content}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
                                <h4 className="text-accent font-bold text-3xl font-mono mb-1">1+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">{t.about.stats.years}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
                                <h4 className="text-secondary font-bold text-3xl font-mono mb-1">10+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">{t.about.stats.projects}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
