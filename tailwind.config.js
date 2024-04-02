/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            primary: "#D69E36",
            "primary-accent": "#DEA02E",
            secondary: "#F5B747",
            "custom-brown": "#2B261D",
            "custom-dark": "#403B45",
            white: "#FFFFFF",
            transparent: "rgba(0, 0, 0, 0)",
        },
        extend: {},
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
    },
    plugins: [],
};
