import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// Temporary image import until optimization script runs
// Trying to find the "red car" manually - purely speculative based on context, will need user confirmation
// Assuming it might be IMG_8303.JPG based on file list.
const heroImage = '/images/Automobile/IMG_8303_full.webp';

const Home = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    console.log("Hero image path:", heroImage); // Debugging

    return (
        <>
            <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Background Image */}
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={heroImage}
                        alt="Hero Background"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-white tracking-widest mb-8 drop-shadow-2xl">
                            <span className="font-galline tracking-wider">EVAN</span>
                            <br />
                            <span className="font-sans text-white drop-shadow-[0_0_15px_rgba(48,207,208,0.3)]">
                                KHOUJA
                            </span>
                        </h1>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="text-2xl md:text-3xl text-white font-medium tracking-widest uppercase"
                        >
                            Photographe & Étudiant en BUT MMI
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                            className="inline-block"
                        >
                            <span className="inline-block px-6 py-3 border-2 border-primary-cyan/50 rounded-full bg-black/20 backdrop-blur-md text-white text-base md:text-lg font-medium tracking-wide shadow-lg shadow-primary-purple/20">
                                Recherche d'un contrat d'alternance en communication pour la rentrée 2026
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* About Me Section - Design 3.0 */}
            <section className="py-24 px-6 min-h-screen flex items-center relative z-10">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        {/* Image or Visual Placeholder */}
                        <div className="w-full md:w-1/3">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 relative group border-2 border-primary-cyan/20 shadow-2xl shadow-primary-purple/20">
                                {/* Placeholder for portrait if available, otherwise just use a gradient or texture */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/20 to-primary-purple/20" />
                                {/* We can use one of the portrait photos from the portfolio if we want */}
                                <img
                                    src="/images/Portrait/first_photo_1_of_1_thumb.webp"
                                    alt="Evan Khouja"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-2/3 space-y-8">
                            <h2 className="text-5xl md:text-6xl font-display font-bold text-white drop-shadow-md">
                                À Propos
                            </h2>

                            <div className="space-y-6 text-xl text-white font-medium leading-relaxed drop-shadow-md">
                                <p>
                                    Actuellement étudiant en <strong>BUT Métiers du Multimédia et de l'Internet (MMI)</strong>, je navigue entre la technique et la créativité. Mon parcours m'a permis d'acquérir une double compétence rare : la sensibilité artistique d'un photographe et la rigueur technique d'un créateur numérique.
                                </p>

                                <p>
                                    Passionné par l'automobile et l'humain, je développe une identité visuelle marquée. Cette sensibilité artistique, couplée à mes compétences en design et développement, me permet d'imaginer des projets cohérents, de la prise de vue à la mise en ligne.
                                </p>

                                <p>
                                    Je suis aujourd'hui à la recherche d'une <strong>alternance pour septembre 2026</strong>. Mon objectif ? Mettre ma polyvalence au service d'une équipe ambitieuse, continuer d'apprendre et apporter ma vision créative sur des projets concrets.
                                </p>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="/cv"
                                    className="inline-flex items-center gap-2 text-primary-teal font-medium hover:text-white transition-colors group"
                                >
                                    Découvrir mon parcours complet
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
