'use client';

import { motion } from 'framer-motion';

const skills = [
    { name: 'HTML5', level: 'Advanced', icon: '🌐' },
    { name: 'CSS3', level: 'Advanced', icon: '🎨' },
    { name: 'JavaScript', level: 'Intermediate', icon: '⚡' },
    { name: 'TypeScript', level: 'Intermediate', icon: '📘' },
    { name: 'React', level: 'Intermediate', icon: '⚛️' },
    { name: 'Next.js', level: 'Intermediate', icon: '▲' },
    { name: 'Tailwind', level: 'Advanced', icon: '🌬️' },
    { name: 'Node.js', level: 'Basic', icon: '🟢' },
    { name: 'Git', level: 'Intermediate', icon: '📦' },
    { name: 'Figma', level: 'Basic', icon: '🖌️' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        The tools and technologies I use to build the metaverse.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-premium p-6 rounded-xl text-center border border-glass-border hover:border-accent/50 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                                    {skill.icon}
                                </div>
                                <h3 className="text-white font-medium mb-2 font-mono">{skill.name}</h3>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-accent"
                                        style={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '40%' }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
