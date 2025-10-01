import { getTranslations } from "@/i18n/translations";
import { useLocaleContext } from "@/contexts/LocaleContext";

export function useLocale() {
    const { locale, setLocale } = useLocaleContext();
    const translations = getTranslations(locale);

    return {
        locale,
        setLocale,
        t: translations,
    };
}