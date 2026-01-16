'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { t } = useLanguage();

    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-0' : 'py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Menu - Angled Bar */}
                <div className={`
                    hidden md:flex items-center justify-between px-8 py-2 transition-all duration-300
                    ${scrolled
                        ? 'bg-tartarus/95 backdrop-blur-md border-b-2 border-primary skew-x-0'
                        : 'bg-transparent border-b-0 skew-x-0'}
                `}>
                    {/* Logo Area */}
                    <div className="flex-shrink-0 -skew-x-12 bg-primary px-4 py-1 border-r-4 border-secondary shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
                        <a href="#" className="skew-x-12 block text-xl font-impact tracking-wide text-white uppercase italic">
                            Desarrollador Front End<span className="text-secondary">.</span>
                        </a>
                    </div>

                    {/* Links Area */}
                    <div className="ml-10 flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative px-6 py-2 overflow-hidden font-tech text-xl tracking-wider text-gray-300 hover:text-white transition-colors"
                            >
                                <span className="relative z-10">{link.name}</span>
                                {/* Hover Effect - Sliding Blue Block */}
                                <span className="absolute inset-0 bg-primary/20 transform -translate-x-full -skew-x-12 group-hover:translate-x-0 transition-transform duration-300 origin-left" />
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </a>
                        ))}
                        <div className="ml-6 pl-6 border-l-2 border-white/20">
                            <LanguageToggle />
                        </div>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between px-4 py-2 bg-tartarus/90 backdrop-blur-md border-b-2 border-primary">
                    <a href="#" className="text-xl font-impact text-white uppercase italic">
                        FRONT END<span className="text-secondary">.</span>
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-secondary transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 top-[60px] bg-tartarus/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {/* Diagonal Background Strip */}
                        <div className="absolute inset-0 z-[-1] overflow-hidden opacity-20">
                            <div className="absolute top-0 right-0 w-[200%] h-full bg-primary -skew-x-12 transform translate-x-1/2" />
                        </div>

                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-4xl font-impact text-white hover:text-secondary uppercase italic tracking-widest relative group"
                            >
                                {link.name}
                                <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>
                        ))}

                        <div className="mt-8">
                            <LanguageToggle />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
