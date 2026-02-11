const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-gray-200 py-16 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-black">
                            <span className="font-galline tracking-widest mr-1">EVAN</span>
                            <span className="font-display">KHOUJA</span>
                        </h2>
                        <p className="text-black text-sm mt-2 font-medium">
                            Photographe & Étudiant en BUT MMI
                        </p>
                    </div>

                    <div className="flex space-x-8 mb-8 md:mb-0">
                        <a href="https://www.linkedin.com/in/evan-khouja-9290243a7" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary-cyan transition-all hover:scale-110 text-lg font-bold" data-cursor-hover>
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com/evan.__.mp4/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary-cyan transition-all hover:scale-110 text-lg font-bold" data-cursor-hover>
                            Instagram
                        </a>
                        <a href="https://www.tiktok.com/@evan.__.mp4" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary-cyan transition-all hover:scale-110 text-lg font-bold" data-cursor-hover>
                            TikTok
                        </a>
                        <a href="mailto:contact@evankhouja.com" className="text-black hover:text-primary-cyan transition-all hover:scale-110 text-lg font-bold" data-cursor-hover>
                            Email
                        </a>
                    </div>

                    <div className="text-black text-sm font-medium">
                        &copy; {currentYear} Evan Khouja. Tous droits réservés.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
