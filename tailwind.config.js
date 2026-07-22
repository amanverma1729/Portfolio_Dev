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
                portfolio: {
                    bg: '#080812',
                    primary: '#6C4DFF',
                    secondary: '#9D4EDD',
                    accent: '#00D4FF',
                    darkCard: 'rgba(18, 16, 38, 0.6)',
                    border: 'rgba(108, 77, 255, 0.15)',
                },
                space: {
                    950: '#080812',
                    900: '#110D24',
                    800: '#1A1536',
                },
                neon: {
                    cyan: '#00D4FF',
                    violet: '#6C4DFF',
                    purple: '#9D4EDD',
                    blue: '#00D4FF',
                    emerald: '#10B981',
                    rose: '#F43F5E',
                    amber: '#F59E0B',
                    pink: '#EC4899'
                }
            },
            fontSize: {
                'fluid-h1': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
                'fluid-h2': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
                'fluid-h3': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'fluid-p': ['clamp(1rem, 1.8vw, 1.2rem)', { lineHeight: '1.7' }],
                'fluid-base': ['clamp(0.875rem, 1.5vw, 1.125rem)', { lineHeight: '1.6' }],
            },
            lineHeight: {
                'relaxed-plus': '1.8',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 12s ease-in-out infinite',
                'drift': 'drift 20s ease-in-out infinite',
                'glow': 'glow 4s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                'spin-slow': 'spin 15s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-16px)' },
                },
                drift: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(10px, 10px)' },
                    '50%': { transform: 'translate(-10px, 20px)' },
                    '75%': { transform: 'translate(-20px, -10px)' },
                },
                glow: {
                    '0%, 100%': { opacity: 0.4, filter: 'blur(20px)' },
                    '50%': { opacity: 0.9, filter: 'blur(30px)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(108, 77, 255, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
                }
            }
        },
    },
    plugins: [],
}
