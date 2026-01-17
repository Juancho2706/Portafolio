'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);
    const email = "jvillegas.dev@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-32 bg-void pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-ethereal font-mono uppercase tracking-widest mb-8"
                >
                    {t.contact.pretitle}
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-display text-starlight mb-12 whitespace-pre-line"
                >
                    {t.contact.title}
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <button
                        onClick={handleCopy}
                        className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full flex items-center gap-4 hover:bg-white/10 transition-colors"
                    >
                        <span className="text-xl md:text-2xl font-sans text-starlight max-w-[200px] md:max-w-none overflow-hidden text-ellipsis">{email}</span>
                        {copied ? <Check className="text-ethereal" /> : <Copy className="text-starlight/50 group-hover:text-starlight transition-colors" />}
                    </button>

                    <a
                        href="mailto:jvillegas.dev@gmail.com"
                        className="px-8 py-4 bg-starlight text-void rounded-full font-bold uppercase tracking-wider hover:bg-ethereal transition-colors flex items-center gap-2"
                    >
                        {t.contact.emailBtn} <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
