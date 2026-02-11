import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const heroImages = [
    '/images/5th_photo_1_of_1.jpeg',
    '/images/Building_photo.jpeg',
    '/images/IMG_8357.jpeg',
    // Add more automobile photos here
]

const Hero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // Parallax effects
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image Carousel (currently static first image for MVP, easy to make carousel) */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
                <img
                    src={heroImages[0]}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-widest mb-6 mix-blend-difference">
                        <span className="font-sans font-bold tracking-wider">EVAN</span>
                        <br />
                        <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-primary-turquoise to-primary-pastel">
                            KHOUJA
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-xl md:text-2xl text-white/90 font-light tracking-widest uppercase mb-12 mix-blend-difference"
                >
                    Photographe & Développeur
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <a
                        href="#portfolio"
                        className="inline-block px-10 py-4 border border-white/30 backdrop-blur-sm text-white font-medium text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full"
                        data-cursor-hover
                    >
                        VOIR MON TRAVAIL
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
