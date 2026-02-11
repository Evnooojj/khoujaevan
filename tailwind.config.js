/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    purple: '#330867', // Top
                    cyan: '#30cfd0',   // Bottom
                    teal: '#30cfd0',   // Alias for backward compatibility
                    white: '#FFFFFF',
                }
            },
            fontFamily: {
                sans: ['Futura', 'Jost', 'sans-serif'],
                display: ['Clash Display', 'sans-serif'], // User mentioned Clash Display earlier, sticking to it or Galline
                galline: ['Galline', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}
