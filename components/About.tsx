'use client';

import { motion } from 'framer-motion';

const About = () => {
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
                            <div className="w-full h-full flex items-center justify-center text-white/20 text-6xl font-bold font-mono">
                                {/* Placeholder for Image */}
                                &lt;DEV/&gt;
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">The Dev</span>
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            Hello! I'm a passionate Junior Web Developer with a knack for creating visually stunning and user-friendly websites. My journey in web development started with a curiosity for how things work on the internet, which quickly turned into a career path.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                            I specialize in the JavaScript ecosystem, particularly React and Next.js. I love experimenting with new libraries and frameworks to find the best solutions for my projects. When I'm not coding, you can find me exploring new design trends or gaming.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
                                <h4 className="text-accent font-bold text-3xl font-mono mb-1">1+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
                                <h4 className="text-secondary font-bold text-3xl font-mono mb-1">10+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
