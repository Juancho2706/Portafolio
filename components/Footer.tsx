'use client';

import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 bg-void border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-starlight/30 text-xs font-mono uppercase tracking-widest text-center md:text-left">
                    © 2026 Juan Villegas. {t.footer.rights}
                </p>

                <div className="flex gap-8">
                    <a href="https://www.linkedin.com/in/juan-villegas-86a5b9127/" target="_blank" rel="noopener noreferrer" className="text-starlight/30 hover:text-ethereal text-xs font-mono uppercase tracking-widest transition-colors">LinkedIn</a>
                    <a href="https://github.com/Juancho2706" target="_blank" rel="noopener noreferrer" className="text-starlight/30 hover:text-ethereal text-xs font-mono uppercase tracking-widest transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
