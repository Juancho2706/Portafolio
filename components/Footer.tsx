'use client';

import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 bg-tartarus border-t-4 border-primary relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary w-[80%]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                <p className="text-gray-400 text-sm font-tech tracking-wider uppercase">
                    © 2026 <span className="text-secondary font-bold">Juan Villegas</span>. {t.footer.rights}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
