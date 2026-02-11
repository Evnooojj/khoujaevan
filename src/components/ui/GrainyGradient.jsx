import { useEffect, useRef } from 'react'

const GrainyGradient = () => {
    const gradientRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!gradientRef.current) return

            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window

            const xPos = (clientX / innerWidth - 0.5) * 20
            const yPos = (clientY / innerHeight - 0.5) * 20

            gradientRef.current.style.backgroundPosition = `${50 + xPos}% ${50 + yPos}%`
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            <div
                ref={gradientRef}
                className="absolute inset-0 w-full h-full grainy-gradient transition-transform duration-700 ease-out"
                style={{ backgroundSize: '200% 200%' }}
            />
            <div className="absolute inset-0 bg-white/30 mix-blend-overlay" />
        </div>
    )
}

export default GrainyGradient
