import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { photos, categories } from '../data/photos'

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('Tous')
    const [index, setIndex] = useState(-1)
    const [imagesLoaded, setImagesLoaded] = useState(0)

    // Ensure we have data even if script failed
    const safePhotos = photos || [];
    const safeCategories = categories || ['Tous'];

    const filteredPhotos = useMemo(() => {
        return activeCategory === 'Tous'
            ? safePhotos
            : safePhotos.filter(photo => photo.category === activeCategory)
    }, [activeCategory, safePhotos])

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen relative z-10">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-white"
                >
                    PORTFOLIO
                </motion.h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {safeCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category
                                ? 'bg-primary-cyan text-black font-bold shadow-lg shadow-primary-cyan/20 scale-105'
                                : 'bg-transparent border border-white/20 text-white hover:bg-white hover:text-black hover:border-transparent'
                                }`}
                            data-cursor-hover
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid - Removing 'layout' prop for better performance */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='wait'>
                        {filteredPhotos.map((photo) => (
                            <motion.div
                                key={photo.src}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative aspect-[4/5] overflow-hidden group cursor-pointer rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                                onClick={() => setIndex(safePhotos.findIndex(p => p.src === photo.src))}
                                data-cursor-hover
                            >
                                <img
                                    src={photo.thumbnail}
                                    alt={`Portfolio ${photo.category}`}
                                    loading="lazy"
                                    width="600"
                                    height="750"
                                    onLoad={() => setImagesLoaded(prev => prev + 1)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                    slides={safePhotos.map(p => ({ src: p.src }))}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />
            </div>
        </div>
    )
}

export default Portfolio
