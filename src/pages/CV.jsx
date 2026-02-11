import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const skills = [
    {
        category: "Création Visuelle",
        items: [
            { name: "Photographie", level: "Avancé", details: "Lightroom, Canon R10, Univers visuel propre" },
            { name: "Vidéo / Montage", level: "Intermédiaire", details: "Premiere Pro, DaVinci Resolve, Storytelling" },
            { name: "Design Graphique", level: "Intermédiaire", details: "Illustrator, Canva" }
        ]
    },
    {
        category: "Communication & Digital",
        items: [
            { name: "Réseaux Sociaux", level: "Avancé", details: "Instagram & TikTok, Stratégie de contenu" },
            { name: "Gestion de Projet", level: "En cours", details: "Organisation, Travail en équipe" },
            { name: "Langues", level: "Bilingue", details: "Anglais fluide, Français" }
        ]
    },
    {
        category: "Soft Skills",
        items: [
            { name: "Relationnel", level: "Fort", details: "Aisance sociale, Sens du contact client" },
            { name: "Personnel", level: "Fort", details: "Autonomie, Polyvalence, Curiosité" },
            { name: "Travail", level: "Fort", details: "Esprit d'équipe, Gestion du stress" }
        ]
    }
]

const experiences = [
    {
        year: 'Stage 3ème',
        title: 'Stagiaire Maintenance Informatique | Kasi Informatique',
        details: [
            'Observation de la maintenance technique et accueil client.',
            'Développement de l\'aisance sociale et apprentissage des codes professionnels.'
        ]
    },
    {
        year: '2021 - Présent',
        title: 'Bénévole Polyvalent | Evan Épicerie',
        details: [
            'Accueil et conseil client, gestion des stocks, encaissement.',
            'Aide à la gestion quotidienne et polyvalence opérationnelle.',
            'Compétences clés : Sens des responsabilités, autonomie, gestion de la relation client.'
        ]
    },
    {
        year: 'Depuis 2023',
        title: 'Créateur de Contenu Multimédia (YouTube & Réseaux Sociaux)',
        details: [
            'YouTube : Conception et montage de vidéos, maîtrise du storytelling et bases de DaVinci Resolve.',
            'Instagram & TikTok : Gestion de comptes dédiés à la photographie, création de contenu quotidien (Reels, TikTok).',
            'Compétences clés : Création de contenu, montage vidéo, gestion de communauté.'
        ]
    },
    {
        year: 'Depuis 2025',
        title: 'Photographe (Projet Passion)',
        details: [
            'Prise de vue, retouche photo et gestion d\'un portfolio en ligne.',
            'Développement d\'un univers visuel propre.'
        ]
    },
    {
        year: '2025 - PRÉSENT',
        title: 'PROJETS ET ACQUIS ACADÉMIQUES (SAÉ & RESSOURCES)',
        details: [
            'Stratégie de Communication & Marketing : Analyse de cibles, audit de communication et rédaction de contenus stratégiques.',
            'Création Numérique & Design : Apprentissage de la chaîne graphique et conception d\'identités visuelles sur la Suite Adobe.',
            'Développement Web & Dispositifs Interactifs : Apprentissage des langages HTML5 et CSS3 pour la création de sites web responsives.',
            'Culture Numérique & Audiovisuel : Étude des médias, écriture scénaristique et bases de la prise de vue et du montage.'
        ]
    }
]

const CV = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-transparent relative z-10">
            <div className="container mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase text-white drop-shadow-md">
                        Compétences & Expériences
                    </h2>
                    <p className="text-xl text-white font-medium max-w-3xl mx-auto drop-shadow-sm">
                        Recherche d'un contrat d'alternance en communication pour début Septembre 2026.
                        <br />
                        <span className="text-lg mt-2 block opacity-100">
                            Étudiant en BUT MMI et photographe, je combine maîtrise technique et aisance relationnelle.
                        </span>
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary-cyan">
                                {skillGroup.category}
                            </h3>
                            <div className="space-y-6">
                                {skillGroup.items.map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="font-bold text-white text-lg">{item.name}</h4>
                                            <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/10 px-2 py-1 rounded">
                                                {item.level}
                                            </span>
                                        </div>
                                        <p className="text-sm text-white font-medium">
                                            {item.details}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Experiences Section */}
                <div className="mb-24">
                    <h3 className="text-3xl font-display font-bold text-center mb-12 text-white">Expériences</h3>
                    <div className="space-y-8 max-w-4xl mx-auto">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-black/40 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10 flex flex-col md:flex-row gap-6 hover:bg-black/50 transition-colors"
                            >
                                <div className="md:w-1/4">
                                    <span className="inline-block px-3 py-1 text-sm font-bold text-primary-teal bg-primary-teal/10 rounded-full">
                                        {exp.year}
                                    </span>
                                </div>
                                <div className="md:w-3/4">
                                    <h4 className="text-xl font-bold mb-4 text-white">{exp.title}</h4>
                                    <ul className="space-y-2 list-disc list-inside text-white font-medium">
                                        {exp.details.map((detail, i) => (
                                            <li key={i} className="leading-relaxed">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Formation Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-16"
                >
                    <h3 className="text-3xl font-display font-bold text-center mb-12 text-white">Formation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* BUT MMI */}
                        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg border-l-4 border-primary-cyan border-t border-r border-b border-white/10 hover:bg-black/50 transition-colors">
                            <h4 className="text-lg font-bold text-white">BUT Métiers du Multimédia et de l'Internet (MMI)</h4>
                            <p className="text-white font-medium">IUT de Blois • 2025 - Présent</p>
                            <p className="text-sm text-gray-200 mt-2">
                                Formation pluridisciplinaire : Développement web, Design graphique, Communication, Audiovisuel.
                            </p>
                        </div>

                        {/* Lycée */}
                        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg border-l-4 border-gray-400 border-t border-r border-b border-white/10 hover:bg-black/50 transition-colors">
                            <h4 className="text-lg font-bold text-white">Baccalauréat Mention Bien</h4>
                            <p className="text-white font-medium">Lycée Touchard Washington • 2022 - 2025</p>
                            <p className="text-sm text-gray-200 mt-2">
                                Enseignement général.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Download CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <a
                        href="/CV_KHOUJA_Evan_3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-primary-cyan border-2 border-primary-cyan text-lg font-bold rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-105 hover:shadow-[0_0_20px_rgba(48,207,208,0.5)] group"
                        data-cursor-hover
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Télécharger mon CV PDF
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default CV
