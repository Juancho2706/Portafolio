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
                background: "#080C15", // Tartarus Deep Blue
                foreground: "#EAEAEA",
                primary: "#1A4CD2", // P3 Reload Blue
                secondary: "#5DFDFF", // Moonlight Cyan
                accent: "#F7F6C2", // Moonlight Yellow
                "glass-border": "rgba(93, 253, 255, 0.2)",
                tartarus: "#111526",
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-jetbrains)'],
                impact: ['var(--font-anton)'],
                tech: ['var(--font-teko)'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-glow": "conic-gradient(from 180deg at 50% 50%, #1A4CD2 0deg, #5DFDFF 180deg, #F7F6C2 360deg)",
            },
            clipPath: {
                'skew-card': 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
                'skew-button': 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
            }
        },
    },
    plugins: [],
};
export default config;
