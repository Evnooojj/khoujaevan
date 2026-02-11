import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // Simple mailto handling
    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = `Contact via Portfolio de ${formData.name}`
        const body = `Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
        window.location.href = `mailto:contact@evankhouja.com?subject=${subject}&body=${body}`
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
                            Travaillons <br />
                            <span className="font-sans text-white drop-shadow-[0_0_15px_rgba(48,207,208,0.5)]">
                                Ensemble.
                            </span>
                        </h2>
                        <p className="text-white text-lg mb-8 leading-relaxed font-medium drop-shadow-md">
                            Vous avez un projet photo en tête ou une proposition de collaboration pour une alternance ? N'hésitez pas à me contacter pour en discuter.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <a href="mailto:contact@evankhouja.com" className="text-lg text-white font-bold hover:text-primary-cyan transition-colors">contact@evankhouja.com</a>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/evan.__.mp4/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-white text-black border-2 border-transparent rounded-full hover:bg-black hover:text-white hover:border-white/20 transition-all duration-300 group shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:text-white transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    <span className="font-bold">Instagram</span>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@evan.__.mp4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-white text-black border-2 border-transparent rounded-full hover:bg-black hover:text-white hover:border-white/20 transition-all duration-300 group shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:text-white transition-colors"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                                    <span className="font-bold">TikTok</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan/50 transition-all text-gray-900 placeholder-gray-400"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan/50 transition-all text-gray-900 placeholder-gray-400"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan/50 transition-all resize-none text-gray-900 placeholder-gray-400"
                                    placeholder="Parlez-moi de votre projet..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary-cyan text-black font-bold rounded-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary-cyan/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-105"
                                data-cursor-hover
                            >
                                <span>Envoyer le message</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact
