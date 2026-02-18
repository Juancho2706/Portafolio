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

                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                "float": "float 6s ease-in-out infinite",

            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },

            }
        },
    },
    plugins: [],
};
export default config;
