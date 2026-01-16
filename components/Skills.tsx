'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const skills = [
    { name: 'TypeScript', level: 'Intermediate', icon: 'XXI' }, // Arcana style icons could be cool, sticking to simple text/emoji for now or custom
    { name: 'React', level: 'Advanced', icon: 'XIII' },
    { name: 'Next.js', level: 'Advanced', icon: 'XIX' },
    { name: 'Tailwind', level: 'Advanced', icon: 'VII' },
    { name: 'Git', level: 'Intermediate', icon: 'IV' },
    { name: 'Supabase', level: 'Basic', icon: 'X' },
] as const;

const Skills = () => {
    const { t } = useLanguage();

    return (
        <section id="skills" className="py-32 relative bg-tartarus overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-[10%] left-[50%] w-[1000px] h-2 bg-primary -rotate-45" />
                <div className="absolute top-[20%] left-[50%] w-[1000px] h-1 bg-secondary -rotate-45" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-right mb-20 relative"
                >
                    <div className="inline-block bg-white text-tartarus px-4 py-2 font-bold font-mono text-xl transform skew-x-[-12deg] mb-4">
                        <span className="transform skew-x-[12deg] block">PLAYER STATS</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-impact text-white tracking-widest uppercase italic">
                        {t.skills.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-black/40 border-2 border-white/20 p-6 relative group overflow-hidden"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
                        >
                            {/* Hover Background */}
                            <div className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-2xl font-impact text-white/20 group-hover:text-white transition-colors">0{index + 1}</span>
                                    <span className="font-mono text-secondary text-lg">{skill.icon}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 font-impact tracking-wide uppercase group-hover:text-secondary transition-colors">{skill.name}</h3>

                                <div className="mt-auto">
                                    <div className="flex justify-between text-xs text-gray-400 font-mono mb-1 uppercase">
                                        <span>Mastery</span>
                                        <span>{(skill.level === 'Advanced' ? '90' : skill.level === 'Intermediate' ? '70' : '40')}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 skew-x-[-20deg]">
                                        <div
                                            className="h-full bg-gradient-to-r from-secondary to-primary"
                                            style={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '40%' }}
                                        />
                                    </div>
                                    <p className="text-right text-xs text-accent mt-1 font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        {t.skills.levels[skill.level]}
                                    </p>
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
