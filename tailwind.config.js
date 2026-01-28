/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: {
                        DEFAULT: "#004f54",
                        dark: "#003a3d",
                        light: "#006b70",
                    },
                    gold: {
                        DEFAULT: "#c5a045",
                        dark: "#a38439",
                        light: "#d4b86e",
                    },
                    maroon: {
                        DEFAULT: "#6d1b1b",
                        dark: "#521414",
                        light: "#8a2a2a",
                    },
                    black: "#111111",
                    white: "#f5f5f5",
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                heading: ["var(--font-heading)", "serif"],
                body: ["var(--font-body)", "sans-serif"],
            },
            spacing: {
                18: "4.5rem",
                24: "6rem",
                32: "8rem",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
            animation: {
                "fade-in": "fadeIn 1s ease-in-out forwards",
                "slide-up": "slideUp 0.8s ease-out forwards",
            },
        },
    },
    plugins: [],
};
