/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
            colors: {
                canvas: {
                    light: '#FAFAFA',
                    dark: '#0B0D10',
                },
                surface: {
                    light: '#FFFFFF',
                    dark: '#11141A',
                },
                elevated: {
                    light: '#F4F4F5',
                    dark: '#161B22',
                },
            },
        },
    },
    plugins: [],
}
