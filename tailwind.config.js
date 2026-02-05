/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./programs.html",
        "./schedule.html",
        "./about.html",
        "./contact.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: '#1e40af', // Royal Blue
            secondary: '#ffffff', // White
            accent: '#0ea5e9', // Light Blue/Cyan
            dark: '#1e293b', // Slate 800 for dark text
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Teko', 'sans-serif'], // New Headline Font
        },
    },
    plugins: [],
}
