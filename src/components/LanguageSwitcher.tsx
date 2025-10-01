"use client";

import { useLocale } from "@/hooks/useLocale";
import { US, BR } from 'country-flag-icons/react/3x2';

export function LanguageSwitcher() {
    const { locale, setLocale } = useLocale();

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setLocale('en')}
                className={`p-1 rounded-md transition-all duration-300 hover:scale-110 ${
                    locale === 'en' ? 'ring-2 ring-red-500' : ''
                }`}
                title="English"
            >
                <US className="w-10" />
            </button>
            <button
                onClick={() => setLocale('pt')}
                className={`p-1 rounded-md transition-all duration-300 hover:scale-110 ${
                    locale === 'pt' ? 'ring-2 ring-red-500' : ''
                }`}
                title="Português"
            >
                <BR className="w-10" />
            </button>
        </div>
    );
}