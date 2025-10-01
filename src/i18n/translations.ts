import { ValidLocale } from './settings'
import * as en from './translations/en'
import * as pt from './translations/pt'

const translations = {
    en,
    pt,
}

export const getTranslations = (locale: ValidLocale) => translations[locale]