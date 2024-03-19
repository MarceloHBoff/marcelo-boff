import { Locale } from "@/../i18n.config";

const dictionaries = {
  en: () =>
    import("@/lib/dictionaries/en.json").then((module) => module.default),
  br: () =>
    import("@/lib/dictionaries/br.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
