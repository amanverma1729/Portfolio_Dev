/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                space: {
                    950: '#050510',
                    900: '#110D20',
                    800: '#1c1731',
                },
                neon: {
                    cyan: '#00F0FF',
                    violet: '#B300FF',
                    blue: '#0055FF',
                    emerald: '#00FFA3',
                    rose: '#FF007B',
                    amber: '#FFB800',
                    pink: '#FF00C8'
                }
            },
            fontSize: {
                'fluid-h1': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
                'fluid-h2': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'fluid-h3': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'fluid-p': ['clamp(1rem, 2vw, 1.25rem)', { lineHeight: '1.6' }],
                'fluid-base': ['clamp(0.875rem, 1.5vw, 1.125rem)', { lineHeight: '1.5' }],
            },
            lineHeight: {
                'relaxed-plus': '1.8',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 12s ease-in-out infinite',
                'drift': 'drift 20s ease-in-out infinite',
                'glow': 'glow 4s ease-in-out infinite',
                'orbit': 'orbit 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                drift: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(10px, 10px)' },
                    '50%': { transform: 'translate(-10px, 20px)' },
                    '75%': { transform: 'translate(-20px, -10px)' },
                },
                glow: {
                    '0%, 100%': { opacity: 0.5, filter: 'blur(10px)' },
                    '50%': { opacity: 1, filter: 'blur(15px)' },
                },
                orbit: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                }
            }
        },
    },
    plugins: [],
}
