import { ValidLocale } from '../settings'
import * as en from './en'
import * as pt from './pt'

const translations = {
    en,
    pt,
}

export const getTranslations = (locale: ValidLocale) => translations[locale]