/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        colors: {
            highlight_600: '#7b0134',
            highlight_500: '#d8025b',
            highlight_400: '#fd3a8c',
            highlight_300: '#fe75ae',

            lightblue_300: '#004e52',
            lightblue_400: '#00888f',
            lightblue_500: '#00c2cb',
            lightblue_600: '#29f4ff',
            lightblue_800: '#2a2a2a',

            yellow: '#ffe881',
            bg_dark: '#202020',
            bg_white: '#f5f5f5',
        },
        fontFamily: {
            sans: 'Fira Code, monospace',
        },
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
};
