"use client";

import { ValidLocale, defaultLocale, locales } from "@/i18n/settings";
import { createContext, useContext, useEffect, useState } from "react";

type LocaleContextType = {
    locale: ValidLocale;
    setLocale: (locale: ValidLocale) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<ValidLocale>(defaultLocale);

    useEffect(() => {
        try {
            const storedLocale = localStorage.getItem("locale");
            if (storedLocale && locales.includes(storedLocale as ValidLocale)) {
                setLocale(storedLocale as ValidLocale);
            }
        } catch (e) {
            console.error("Failed to access localStorage:", e);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem("locale", locale);
        } catch (e) {
            console.error("Failed to save locale to localStorage:", e);
        }
    }, [locale]);

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocaleContext() {
    const context = useContext(LocaleContext);
    if (context === undefined) {
        throw new Error("useLocaleContext must be used within a LocaleProvider");
    }
    return context;
}