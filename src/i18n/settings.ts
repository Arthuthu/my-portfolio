export const defaultLocale = 'en'
export const locales = ['en', 'pt'] as const
export type ValidLocale = (typeof locales)[number]

export const languageNames = {
    en: 'English',
    pt: 'Português'
} as const