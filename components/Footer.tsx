const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm font-mono">
                    © {new Date().getFullYear()} <span className="text-white">DEV</span>. ALL RIGHTS RESERVED.
                </p>
                <div className="flex items-center gap-8">
                    <a href="#" className="text-gray-500 hover:text-accent transition-colors text-sm font-mono hover:text-glow">PRIVACY</a>
                    <a href="#" className="text-gray-500 hover:text-accent transition-colors text-sm font-mono hover:text-glow">TERMS</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
