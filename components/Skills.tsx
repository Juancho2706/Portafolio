'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Code2, Globe, Database, Palette, Layers, Terminal, GitBranch } from 'lucide-react';

const Skills = () => {
    const { t } = useLanguage();

    const skills = [
        { name: "TypeScript", icon: Code2, level: "advanced" },
        { name: "React", icon: Globe, level: "advanced" },
        { name: "Next.js", icon: Layers, level: "advanced" },
        { name: "Tailwind CSS", icon: Palette, level: "advanced" },
        { name: "Node.js", icon: Terminal, level: "advanced" },
        { name: "Git", icon: GitBranch, level: "intermediate" },
        { name: "Supabase", icon: Database, level: "basic" },
    ] as const;

    // Helper to get translated level
    const getLevelLabel = (levelByKey: keyof typeof t.skills.levels) => {
        if (!t.skills.levels) return levelByKey; // Fallback
        return t.skills.levels[levelByKey] || levelByKey;
    };

    return (
        <section id="skills" className="py-32 bg-void relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ethereal/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="text-ethereal font-mono text-xs tracking-widest uppercase block mb-4">
                        {t.skills.stack}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display text-starlight whitespace-pre-line">
                        {t.skills.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-ethereal/50 transition-colors duration-500 overflow-hidden"
                            >
                                {/* Hover Gradient BG */}
                                <div className="absolute inset-0 bg-gradient-to-br from-ethereal/0 via-ethereal/0 to-ethereal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-ethereal/10 text-starlight/70 group-hover:text-ethereal transition-colors duration-500">
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="text-starlight font-sans text-sm tracking-wide font-medium group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs font-mono text-starlight/40 uppercase tracking-widest group-hover:text-ethereal/60 transition-colors">
                                            {getLevelLabel(skill.level)}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
