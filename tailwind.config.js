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
                    950: '#020617',
                    900: '#0f172a',
                    800: '#1e293b',
                },
                neon: {
                    cyan: '#22d3ee',
                    violet: '#a855f7',
                    blue: '#3b82f6',
                    emerald: '#10b981',
                    rose: '#f43f5e',
                    amber: '#f59e0b',
                }
            },
            fontSize: {
                'hero': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
                'hero-mobile': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
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
