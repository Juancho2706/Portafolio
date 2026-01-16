'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-32 relative bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Visual Side - Social Link Card */}
                    <div className="relative group perspective">
                        <div className="absolute inset-0 bg-primary/20 transform rotate-6 scale-105 rounded-xl border-2 border-primary" />
                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-4 border-white bg-tartarus shadow-[10px_10px_0px_#1A4CD2] transform transition-transform group-hover:rotate-0 group-hover:scale-100">
                            {/* Tarot Card Effect */}
                            <div className="absolute top-2 left-2 text-white font-impact text-xl z-20 drop-shadow-md">XXI</div>
                            <div className="absolute bottom-4 center w-full text-center text-white font-impact text-3xl z-20 drop-shadow-md tracking-widest uppercase">The Developer</div>

                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        </div>
                    </div>

                    {/* Stats Side - Parameters */}
                    <div>
                        <div className="inline-block px-3 py-1 bg-secondary text-tartarus font-bold font-mono mb-4 -skew-x-12">
                            <span className="skew-x-12 block">CONFIDANT RANK 10</span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-impact text-white mb-8 tracking-tighter uppercase">
                            {t.about.title}
                        </h2>

                        <div className="bg-white/5 border-l-4 border-accent p-6 mb-8 backdrop-blur-sm">
                            <p className="text-gray-300 leading-relaxed text-lg font-sans">
                                {t.about.content}
                            </p>
                        </div>

                        {/* Social Stats - Pentagon Style (Simplified to bars for web) */}
                        <div className="space-y-6">
                            <div className="relative">
                                <div className="flex justify-between text-sm font-mono text-gray-400 mb-1">
                                    <span>EXPERIENCE</span>
                                    <span>{t.about.stats.years}</span>
                                </div>
                                <div className="h-4 bg-white/10 w-full rounded-full overflow-hidden skew-x-[-20deg]">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '40%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <div className="flex justify-between text-sm font-mono text-gray-400 mb-1">
                                    <span>PROJECTS_COMPLETED</span>
                                    <span>{t.about.stats.projects}</span>
                                </div>
                                <div className="h-4 bg-white/10 w-full rounded-full overflow-hidden skew-x-[-20deg]">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '85%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="h-full bg-secondary"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <div className="flex justify-between text-sm font-mono text-gray-400 mb-1">
                                    <span>MOTIVATION</span>
                                    <span>MAX</span>
                                </div>
                                <div className="h-4 bg-white/10 w-full rounded-full overflow-hidden skew-x-[-20deg]">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.6 }}
                                        className="h-full bg-accent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
