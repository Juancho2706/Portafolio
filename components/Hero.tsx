'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useRef } from 'react';

const Hero = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Split greeting safely, fallback to empty array if undefined
    const greetingText = t.hero.greeting || "JUAN VILLEGAS";
    const nameParts = greetingText.split(" ");
    const firstName = nameParts[0] || "JUAN";
    const lastName = nameParts[1] || "VILLEGAS";

    return (
        <section ref={containerRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-void">
            {/* Fluid Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-purple-900/40 rounded-full blur-[120px] animate-float delay-0" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] bg-ethereal/20 rounded-full blur-[100px] animate-float delay-1000" />
                <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-blue-900/30 rounded-full blur-[80px] animate-pulse" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mix-blend-difference">
                <motion.div style={{ y, opacity }} className="space-y-6">
                    {/* Role / Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center items-center gap-4"
                    >
                        <div className="h-[1px] w-12 bg-starlight/50"></div>
                        <span className="text-starlight/80 font-sans tracking-[0.2em] text-sm uppercase">
                            {t.hero.role}
                        </span>
                        <div className="h-[1px] w-12 bg-starlight/50"></div>
                    </motion.div>

                    {/* Main Title - Kinetic */}
                    <h1 className="text-6xl md:text-9xl font-display font-bold uppercase leading-none text-starlight tracking-tighter">
                        <motion.div className="overflow-hidden flex justify-center">
                            {firstName.split("").map((char: string, index: number) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 + index * 0.05, ease: [0.33, 1, 0.68, 1] }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                        <motion.div className="overflow-hidden flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-starlight via-ethereal to-starlight bg-[length:200%_auto] animate-gradient">
                            {lastName.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 + index * 0.05, ease: [0.33, 1, 0.68, 1] }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="max-w-xl mx-auto text-starlight/60 text-lg md:text-xl font-sans leading-relaxed"
                    >
                        {t.hero.description}
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-starlight/40 font-sans">{t.hero.scroll}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-starlight/0 via-starlight/50 to-starlight/0" />
            </motion.div>
        </section>
    );
};

export default Hero;
