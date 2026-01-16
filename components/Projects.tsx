'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<typeof t.projects.items[0] | null>(null);

    return (
        <section id="projects" className="py-32 relative bg-background overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,76,210,0.03)_1px,transparent_1px),linear_gradient(90deg,rgba(26,76,210,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 flex items-end gap-6 border-b-4 border-secondary pb-4"
                >
                    <h2 className="text-6xl md:text-8xl font-impact text-white tracking-tighter uppercase italic text-stroke-sm">
                        {t.projects.title}
                    </h2>
                    <span className="text-secondary font-mono text-xl mb-4 hidden md:block">
                        // DATABASE_ACCESS: GRANTED
                    </span>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {t.projects.items.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                        >
                            {/* Card Frame */}
                            <div className="absolute inset-0 bg-tartarus border-2 border-primary -skew-x-6 transform transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                            <div className="relative bg-tartarus border-2 border-white/20 -skew-x-6 overflow-hidden transition-all duration-300 group-hover:border-secondary group-hover:-translate-y-2 h-[450px] flex flex-col">

                                {/* Image Area */}
                                <div className={`h-48 w-[110%] -ml-[5%] ${project.image} relative overflow-hidden skew-x-6`}>
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                                    {/* Scan Line Effect */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-secondary shadow-[0_0_10px_#5DFDFF] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite]" />
                                </div>

                                {/* Content Area */}
                                <div className="p-6 skew-x-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-3xl font-impact text-white uppercase tracking-wide group-hover:text-secondary transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-mono text-gray-400 border border-gray-600 px-2 py-1">
                                            ID_{index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 text-sm font-sans mb-6 line-clamp-3 flex-1 border-l-2 border-primary/50 pl-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-xs font-bold text-tartarus bg-white/10 px-3 py-1 uppercase transform skew-x-[-12deg] group-hover:bg-secondary group-hover:text-tartarus transition-colors">
                                                <span className="skew-x-[12deg] inline-block">{tag}</span>
                                            </span>
                                        ))}
                                    </div>
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
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tartarus/90 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        {/* Close Button "X" - Stylish */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-8 right-8 text-white hover:text-secondary transition-colors z-50 group"
                        >
                            <div className="relative w-12 h-12">
                                <div className="absolute inset-0 border-2 border-white/20 rounded-full group-hover:border-secondary transition-colors" />
                                <X size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </button>

                        <motion.div
                            layoutId={`project-${t.projects.items.indexOf(selectedProject)}`}
                            className="w-full max-w-4xl bg-tartarus border-t-8 border-primary shadow-[0_0_50px_rgba(26,76,210,0.5)] overflow-hidden relative max-h-[90vh] flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Blue Strip Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 -skew-x-12 transform translate-x-16 -translate-y-16" />

                            <div className={`h-64 md:h-auto md:w-1/2 ${selectedProject.image} relative bg-cover bg-center`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-tartarus via-transparent to-transparent md:bg-gradient-to-r" />
                            </div>

                            <div className="p-8 md:p-12 md:w-1/2 overflow-y-auto">
                                <div className="mb-2 text-secondary font-mono text-sm tracking-widest">// PROJECT_DETAILS</div>
                                <h3 className="text-5xl font-impact text-white mb-6 uppercase italic">{selectedProject.title}</h3>

                                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-sans border-l-4 border-accent pl-4">
                                    {selectedProject.longDescription}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {selectedProject.tags.map((tag) => (
                                        <span key={tag} className="text-sm font-bold text-tartarus bg-secondary px-3 py-1 uppercase transform skew-x-[-12deg]">
                                            <span className="skew-x-[12deg] inline-block">{tag}</span>
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={selectedProject.github} className="flex-1 py-4 bg-white/5 hover:bg-white/20 text-white font-bold font-impact uppercase tracking-wider flex items-center justify-center gap-2 transition-all border-2 border-transparent hover:border-white">
                                        <Github size={24} /> Review Code
                                    </a>
                                    <a href={selectedProject.demo} className="flex-1 py-4 bg-primary hover:bg-primary/80 text-white font-bold font-impact uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                                        <ExternalLink size={24} /> Deploy Link
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
