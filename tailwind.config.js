/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./assets/js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Fonte mais elegante
            },
            colors: {
                // Um fundo escuro "rico", não preto puro
                dark: {
                    900: '#09090b', // Fundo principal
                    800: '#18181b', // Sidebar
                    700: '#27272a', // Bordas
                }
            },
            typography: (theme) => ({
                invert: {
                    css: {
                        '--tw-prose-body': theme('colors.gray.300'),
                        '--tw-prose-headings': theme('colors.white'),
                        '--tw-prose-links': theme('colors.blue.400'),
                        '--tw-prose-code': theme('colors.pink.400'),
                        '--tw-prose-pre-bg': theme('colors.gray.900'), // Bloco de código escuro
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
