import { Locale } from "@/../i18n.config";

export type ComponentProps = {
  children: ReactNode;
};

export type ParamsLangProps = {
  params: {
    lang: Locale;
  };
};

export type LangProps = {
  lang: Locale;
};

export type SkillProps = {
  text: string;
  value: number;
};
