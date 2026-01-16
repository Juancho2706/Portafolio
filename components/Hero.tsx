'use client';

import { motion } from 'framer-motion';
import { Download, Code, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-background">
            {/* Background Water/Moon Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px] animate-[gradient_4s_linear_infinite]" />
                <div className="absolute right-[-10%] bottom-[-20%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute left-[-10%] top-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[80px]" />
            </div>

            {/* Geometric Polygons */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[15%] left-[5%] w-32 h-32 border-2 border-white/10 rotate-45" />
                <div className="absolute bottom-[20%] right-[10%] w-64 h-64 border border-primary/20 -rotate-12" />
                <div className="absolute top-[40%] right-[30%] w-0 h-0 border-l-[50px] border-l-transparent border-b-[80px] border-b-secondary/20 border-r-[50px] border-r-transparent rotate-12" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Content - Text */}
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "circOut" }}
                        >
                            <div className="inline-block bg-accent text-tartarus px-4 py-1 font-bold font-mono mb-6 -skew-x-12 shadow-[4px_4px_0px_#1A4CD2]">
                                <span className="skew-x-12 block">{t.hero.role} // LV. 24</span>
                            </div>

                            <h1 className="text-7xl md:text-9xl font-impact text-white mb-2 leading-[0.9] tracking-tighter uppercase italic drop-shadow-lg">
                                <span className="block text-stroke-sm">{t.hero.greeting}</span>
                                <span className="block text-secondary text-glow">{t.hero.name || "JUAN"}</span>
                            </h1>

                            <div className="h-1 w-32 bg-primary my-6 skew-x-[-20deg]" />

                            <p className="text-gray-300 text-lg md:text-2xl font-tech max-w-xl mb-10 tracking-wide border-l-4 border-secondary pl-4 bg-white/5 py-4">
                                {t.hero.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="#projects"
                                    className="group relative px-8 py-4 bg-white text-black font-bold font-impact text-xl uppercase tracking-wider overflow-hidden clip-path-button hover:-translate-y-1 transition-transform border-2 border-transparent"
                                >
                                    <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                                    <span className="relative z-10 flex items-center gap-2 group-hover:text-tartarus transition-colors">
                                        {t.hero.cta} <Zap size={24} className="group-hover:rotate-12 transition-transform" />
                                    </span>
                                </a>

                                <a
                                    href="/cv.pdf"
                                    className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-tech text-xl uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2 hover:border-secondary hover:text-secondary"
                                >
                                    Download CV <Download size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                        className="flex-1 relative hidden md:block"
                    >
                        {/* Decorative Circle/Moon */}
                        <div className="relative w-[500px] h-[500px]">
                            <div className="absolute inset-0 rounded-full border-[20px] border-white/5 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-[30px] rounded-full border-[2px] border-secondary/30 border-dashed animate-[spin_15s_linear_infinite_reverse]" />

                            {/* Central Symbolic Element */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 bg-primary/80 rotate-45 backdrop-blur-md shadow-[0_0_50px_rgba(93,253,255,0.4)] flex items-center justify-center border-4 border-white/20">
                                    <div className="w-full h-full border-4 border-black/30 absolute top-2 left-2" />
                                    <Code size={80} className="text-white -rotate-45" />
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-20 bg-tartarus border border-secondary px-4 py-2 text-secondary font-mono text-xs shadow-[4px_4px_0_#FFF]"
                            >
                                FRONT END
                            </motion.div>
                            <motion.div
                                animate={{ y: [15, -15, 15] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-10 bg-tartarus border border-accent px-4 py-2 text-accent font-mono text-xs shadow-[-4px_4px_0_#FFF]"
                            >
                                NEXT.JS EXPERT
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
