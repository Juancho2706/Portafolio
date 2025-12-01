'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<typeof t.projects.items[0] | null>(null);

    return (
        <section id="projects" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {t.projects.title}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of my latest experiments in the digital realm.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.projects.items.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(112,0,255,0.15)] cursor-pointer"
                        >
                            <div className={`h-56 w-full ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                            </div>

                            <div className="p-8 relative -mt-12">
                                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors mb-4">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            layoutId={`project-${t.projects.items.indexOf(selectedProject)}`}
                            className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className={`h-64 w-full ${selectedProject.image} relative`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tags.map((tag) => (
                                        <span key={tag} className="text-sm font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={selectedProject.github} className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all border border-white/5">
                                        <Github size={20} /> GitHub
                                    </a>
                                    <a href={selectedProject.demo} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(112,0,255,0.3)]">
                                        <ExternalLink size={20} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
