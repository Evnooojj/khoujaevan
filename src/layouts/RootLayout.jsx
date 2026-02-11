import { motion, AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'
import LandoBackground from '../components/ui/LandoBackground'


const RootLayout = () => {
    const location = useLocation()

    return (
        <div className="App relative min-h-screen flex flex-col">
            <CustomCursor />
            <LandoBackground />
            <Navbar />

            <main className="flex-grow">
                {/* Page Transition Overlay */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        className="fixed inset-0 bg-gradient-to-b from-[#07A3B2] to-[#D9ECC7] z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    >
                        <motion.span
                            className="font-galline font-black text-8xl md:text-9xl tracking-widest text-white"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: [0, 1, 1, 1, 0],
                                scale: [0.8, 1, 1.1, 1, 80],
                            }}
                            transition={{
                                duration: 1.5,
                                times: [0, 0.1, 0.4, 0.7, 1],
                                ease: "easeInOut"
                            }}
                        >
                            EK
                        </motion.span>
                    </motion.div>
                </AnimatePresence>

                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default RootLayout
