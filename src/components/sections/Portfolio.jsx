import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { photos, categories } from '../../data/photos'

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('Tous')
    const [index, setIndex] = useState(-1)

    const filteredPhotos = activeCategory === 'Tous'
        ? photos
        : photos.filter(photo => photo.category === activeCategory)

    return (
        <section id="portfolio" className="py-24 px-6 min-h-screen">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-display font-bold text-center mb-16 text-white"
                >
                    PORTFOLIO
                </motion.h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category, idx) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${activeCategory === category
                                ? 'bg-black text-white scale-105'
                                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-105'
                                }`}
                            data-cursor-hover
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredPhotos.map((photo, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={photo.src}
                                className="relative aspect-[4/5] overflow-hidden group cursor-pointer rounded-lg bg-gray-100"
                                onClick={() => setIndex(photos.findIndex(p => p.src === photo.src))}
                                data-cursor-hover
                            >
                                <img
                                    src={photo.src}
                                    alt={`Portfolio ${photo.category}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-lg font-display tracking-widest uppercase">
                                        {photo.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <Lightbox
                    index={index}
                    slides={photos.map(p => ({ src: p.src }))}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />
            </div>
        </section>
    )
}

export default Portfolio
