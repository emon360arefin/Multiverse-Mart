/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                domine: ['Domine', "sans-serif"],
                montserrat: ['Montserrat', 'sans-serif'],
                fahkwang: ['Fahkwang', 'sans-serif']
            },

            colors: {
                text: {
                    primary: '#202124',
                },
                button: {
                    primary: '#388DFF',
                    secondary: '#C0DBFF'
                },

            }
        },
    },
    plugins: [],
}

