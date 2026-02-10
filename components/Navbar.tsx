'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Home, User, Briefcase, Mail, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const { t } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Ensure translations are loaded before rendering items that depend on them
    const navName = (key: string, fallback: string) => {
        if (!t || !t.nav) return fallback;
        return (t.nav as any)[key] || fallback;
    };

    const navItems = [
        { name: navName('about', 'About'), href: '#about', icon: User },
        { name: navName('skills', 'Skills'), href: '#skills', icon: Cpu },
        { name: 'Home', href: '#', icon: Home },
        { name: navName('projects', 'Projects'), href: '#projects', icon: Briefcase },
        { name: navName('contact', 'Contact',), href: '#contact', icon: Mail },
        { name: 'Start Project', href: '/creatupagina', icon: null }, // Special item handled in map
    ];

    if (!mounted) return null;

    return (
        <nav className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
            <div className="flex items-end gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5">
                {navItems.map((item, index) => {
                    const isHovered = hoveredIndex === index;
                    const Icon = item.icon;
                    const isCTA = item.href === '/creatupagina';

                    return (
                        <motion.a
                            key={index}
                            href={item.href}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`relative flex flex-col items-center justify-end p-1 md:p-2 rounded-full transition-colors group ${isCTA ? 'ml-2' : ''}`}
                        >
                            {/* Hover Tooltip/Text */}
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -45 : 10 }}
                                className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-sans font-medium text-starlight bg-void/80 px-2 py-1 rounded-md whitespace-nowrap pointer-events-none border border-white/10 hidden md:block"
                            >
                                {item.name}
                            </motion.span>

                            {/* Icon or CTA Button */}
                            <motion.div
                                animate={{
                                    width: isHovered ? 60 : 45,
                                    height: isHovered ? 60 : 45,
                                    y: isHovered ? -10 : 0
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`flex items-center justify-center rounded-full ${isCTA
                                    ? 'bg-ethereal text-void shadow-[0_0_20px_rgba(93,253,255,0.3)]'
                                    : (isHovered ? 'bg-gradient-to-br from-ethereal to-purple-500 text-void' : 'bg-white/10 text-starlight')
                                    }`}
                            >
                                {isCTA ? (
                                    <span className="font-bold text-xl">+</span>
                                ) : (
                                    Icon && <Icon size={isHovered ? 28 : 20} strokeWidth={isHovered ? 2 : 1.5} />
                                )}
                            </motion.div>
                        </motion.a>
                    );
                })}

                {/* Language Toggle */}
                <div className="relative flex flex-col items-center justify-end p-1 md:p-2 md:pb-3 pb-2">
                    <LanguageToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
