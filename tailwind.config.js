/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
            'desktop': '1920px',
            // => @media (min-width: 1280px) { ... }
        },
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff', 
        },
        fontFamily: {
            sans: ['Nunito Sans', sans-serif],
            serif: ['Noto Serif', serif],
        },
        extend: {},
    },
    plugins: [],
}