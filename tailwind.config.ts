import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-manrope)", "sans-serif"],
                display: ["var(--font-syne)", "sans-serif"],
            },
            colors: {
                void: "#030303",     // Ultra dark background
                starlight: "#Fdfdfd", // Soft white text
                glass: {
                    100: "rgba(255, 255, 255, 0.05)",
                    200: "rgba(255, 255, 255, 0.1)",
                },
                ethereal: "#5DFDFF", // Cyan accent (keeping user preference but adapting)
            },
            backgroundImage: {
                "noise": "url('/noise.png')", // We will use a CSS radial gradient fallback if no image
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "grain": "grain 8s steps(10) infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                grain: {
                    "0%, 100%": { transform: "translate(0, 0)" },
                    "10%": { transform: "translate(-5%, -10%)" },
                    "20%": { transform: "translate(-15%, 5%)" },
                    "30%": { transform: "translate(7%, -25%)" },
                    "40%": { transform: "translate(-5%, 25%)" },
                    "50%": { transform: "translate(-15%, 10%)" },
                    "60%": { transform: "translate(15%, 0%)" },
                    "70%": { transform: "translate(0%, 15%)" },
                    "80%": { transform: "translate(3%, 35%)" },
                    "90%": { transform: "translate(-10%, 10%)" },
                }
            }
        },
    },
    plugins: [],
};
export default config;
