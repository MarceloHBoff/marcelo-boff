export const i18n = {
  defaultLocale: "br",
  locales: ["en", "br"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
