'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'NFT Marketplace',
        description: 'A decentralized marketplace for trading digital assets with real-time bidding.',
        tags: ['Next.js', 'Solidity', 'Web3.js'],
        image: 'bg-gradient-to-br from-purple-900 to-indigo-900',
        github: '#',
        demo: '#',
    },
    {
        title: 'DeFi Dashboard',
        description: 'Analytics platform for tracking crypto assets and yield farming opportunities.',
        tags: ['React', 'D3.js', 'Tailwind'],
        image: 'bg-gradient-to-br from-pink-900 to-rose-900',
        github: '#',
        demo: '#',
    },
    {
        title: 'DAO Governance',
        description: 'Voting system for decentralized autonomous organizations with on-chain execution.',
        tags: ['TypeScript', 'Ethers.js', 'Hardhat'],
        image: 'bg-gradient-to-br from-blue-900 to-cyan-900',
        github: '#',
        demo: '#',
    },
];

const Projects = () => {
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
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Deployments</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of my latest experiments in the digital realm.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(112,0,255,0.15)]"
                        >
                            <div className={`h-56 w-full ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                            </div>

                            <div className="p-8 relative -mt-12">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.demo} className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>

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
        </section>
    );
};

export default Projects;
