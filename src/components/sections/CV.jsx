import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const experiences = [
    {
        year: '2023 - Présent',
        title: 'Photographe & Développeur Freelance',
        description: 'Création de sites web sur mesure et prestations photographiques pour professionnels (immobilier, automobile, portraits).',
        type: 'experience'
    },
    {
        year: '2021 - 2023',
        title: 'Formation Développement Web',
        description: 'Apprentissage des technologies modernes : React, Node.js, Tailwind CSS.',
        type: 'education'
    },
    {
        year: '2019 - 2021',
        title: 'Débuts en Photographie',
        description: 'Premiers projets personnels et développement d\'un style artistique unique.',
        type: 'experience'
    }
]

const CV = () => {
    return (
        <section id="cv" className="py-24 px-6 min-h-screen bg-gray-50/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
                >
                    PARCOURS
                </motion.h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={clsx(
                                    "relative flex flex-col md:flex-row gap-8 items-center",
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Content */}
                                <div className="flex-1 w-full md:w-1/2 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary-turquoise bg-primary-turquoise/10 rounded-full mb-3">
                                        {exp.year}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {exp.description}
                                    </p>
                                </div>

                                {/* Dot on Line */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-turquoise rounded-full border-4 border-white transform -translate-x-1/2 shadow-sm z-10 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <a
                        href="/CV_KHOUJA_Evan_Alternance.pdf?v=new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:bg-primary-turquoise transition-colors font-medium"
                        data-cursor-hover
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Télécharger mon CV
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default CV
