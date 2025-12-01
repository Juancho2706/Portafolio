import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#030014", // Deep space black
                foreground: "#ffffff",
                primary: "#7000FF", // Electric Purple
                secondary: "#00C2FF", // Cyan
                accent: "#FF00E5", // Neon Magenta
                "glass-border": "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-jetbrains)'], // We'll need to add this font
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-glow": "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
            },
        },
    },
    plugins: [],
};
export default config;
