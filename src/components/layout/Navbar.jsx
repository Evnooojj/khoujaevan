import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { clsx } from 'clsx'

const navItems = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'CV & Expérience', path: '/cv' },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const textColorClass = isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white'

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled || isMobileMenuOpen ? 'bg-white/10 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    to="/"
                    className={clsx(
                        "text-2xl font-bold tracking-tighter transition-colors duration-300",
                        textColorClass
                    )}
                >
                    <span className="font-galline tracking-widest mr-2">EVAN</span>
                    <span className="font-display">KHOUJA</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={clsx(
                                'relative text-base font-medium transition-all duration-300 hover:text-primary-cyan group',
                                location.pathname === item.path ? 'text-primary-cyan font-bold' : 'text-white'
                            )}
                            data-cursor-hover
                        >
                            {item.name}
                            <span className={clsx(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-cyan transition-all duration-300 group-hover:w-full",
                                location.pathname === item.path ? "w-full" : ""
                            )}></span>
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="px-6 py-2.5 bg-transparent text-primary-cyan border-2 border-primary-cyan text-base font-bold rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                        data-cursor-hover
                    >
                        Me contacter
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={clsx(
                        "md:hidden z-[10000] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 transition-colors duration-300",
                        textColorClass
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    data-cursor-hover
                >
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="w-full h-0.5 bg-current block transition-transform"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-full h-0.5 bg-current block transition-opacity"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="w-full h-0.5 bg-current block transition-transform"
                    />
                </button>

                {/* Mobile Fullscreen Menu - Portal to Body */}
                {createPortal(
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                key="mobile-menu"
                                initial={{ opacity: 0, y: '-100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: '-100%' }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center space-y-12"
                            >
                                {/* Close Button inside Portal */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="absolute top-8 right-8 text-white p-2 hover:rotate-90 transition-transform duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>

                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-display font-medium text-white hover:text-primary-cyan transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="mt-8 px-8 py-3 bg-white text-black text-lg font-bold rounded-full hover:bg-[#07A3B2] hover:text-white transition-colors"
                                >
                                    Me contacter
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </nav>
    )
}

export default Navbar
