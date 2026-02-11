import { useEffect, useState } from 'react'

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)

        // Track mouse position
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        // Detect hoverable elements
        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove)

        const hoverableElements = document.querySelectorAll('a, button, [data-cursor-hover]')
        hoverableElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', checkMobile)
            hoverableElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    if (isMobile) return null

    return (
        <div className={isHovering ? 'cursor-hover' : ''}>
            <div
                className="cursor-dot"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: isHovering ? 'scale(1.5)' : 'scale(1)'
                }}
            />
            <div
                className="cursor-outline"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%)${isHovering ? ' scale(1.5)' : ''}`
                }}
            />
        </div>
    )
}

export default CustomCursor
