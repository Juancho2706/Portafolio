"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="px-3 py-1 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle language"
        >
            {language === "es" ? "EN" : "ES"}
        </button>
    );
}
