'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-primary opacity-20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-accent opacity-20 blur-[120px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium border-glass-border mb-8">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-gray-300 text-sm font-mono">Open to Work</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Building the</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary text-glow">
                            Future Web
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Crafting immersive digital experiences with <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">Web3</span> technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                                View Projects <ArrowRight size={20} />
                            </span>
                        </a>

                        <a
                            href="/cv.pdf"
                            className="px-8 py-4 rounded-lg glass-premium border border-glass-border text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 hover:box-glow"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Icons */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-[10%] text-white/10 hidden md:block"
            >
                <Code size={48} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-[10%] text-white/10 hidden md:block"
            >
                <Terminal size={48} />
            </motion.div>
        </section>
    );
};

export default Hero;
