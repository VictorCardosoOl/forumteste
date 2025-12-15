/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./assets/**/*.{js,html}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#0056b3',
                    light: '#4dabf7',
                    dark: '#004494',
                },
                secondary: {
                    DEFAULT: '#004494',
                },
                bg: {
                    DEFAULT: '#ffffff',
                    dark: '#1a1a1a',
                },
                text: {
                    DEFAULT: '#333333',
                    dark: '#e0e0e0',
                },
            }
        },
    },
    plugins: [],
}
