/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'light-coffee': '#C89F94',
            },
            fontFamily: {
                Karla: ['Karla', 'sans-serif'],
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                slideDown: 'slideDown .4s ease-in-out',
            },
        },
    },
    plugins: [],
}
