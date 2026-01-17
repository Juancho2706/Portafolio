'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, t }: { project: any, t: any }) => {
    return (
        <div className="group relative w-full md:w-[600px] h-[400px] md:h-[500px] flex-shrink-0 bg-white/5 border border-white/10 overflow-hidden">
            {/* Image Placehoder / Gradient */}
            {/* Project Image */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                )}
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent opacity-90" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-ethereal font-mono text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h3 className="text-3xl md:text-4xl font-display text-starlight mb-4">{project.title}</h3>
                    <p className="text-starlight/60 max-w-sm mb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.description}</p>

                    <div className="flex gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <a href={project.links.live} target='_blank' rel='noopener noreferrer' className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-ethereal transition-colors z-20">
                            {t.projects.viewLive} <ExternalLink size={14} />
                        </a>
                        <a href={project.links.github} target='_blank' rel='noopener noreferrer' className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-white transition-colors z-20">
                            {t.projects.viewCode} <Github size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const { t } = useLanguage();
    const targetRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} id="projects" className="relative h-auto md:h-[300vh] bg-void">
            <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center overflow-hidden py-20 md:py-0">
                <div className="max-w-7xl mx-auto px-4 w-full mb-12">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-5xl md:text-7xl font-display text-starlight/20 uppercase whitespace-pre-line"
                    >
                        {t.projects.title}
                    </motion.h2>
                </div>

                {/* Container: Vertical Grid on Mobile, Horizontal Scroll on Desktop */}
                <motion.div
                    style={{ x: isMobile ? "0%" : x }}
                    className="flex flex-col md:flex-row gap-8 px-4 md:px-20 w-full md:w-max"
                >
                    {t.projects.items.map((project: any, index: number) => (
                        <ProjectCard key={index} project={project} t={t} />
                    ))}
                    {/* Decorative End Card */}
                    <div className="hidden md:flex w-[300px] h-[500px] items-center justify-center border border-white/5 text-starlight/20 font-display text-xl uppercase tracking-widest text-center px-4">
                        {t.projects.more}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
