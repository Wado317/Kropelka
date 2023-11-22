import { SupportedLanguages } from "./index";

const PlFlag = require("./components/pl.png");
const EnFlag = require("./components/en.png");
const UaFlag = require("./components/ua.png");

export interface LanguageModel {
  label: string;
  value: SupportedLanguages;
  icon: any;
}

const pl: LanguageModel = {
  label: "Polski",
  value: SupportedLanguages.pl,
  icon: PlFlag,
};

const en: LanguageModel = {
  label: "English",
  value: SupportedLanguages.en,
  icon: EnFlag,
};

const ua: LanguageModel = {
  label: "Українська",
  value: SupportedLanguages.ua,
  icon: UaFlag,
};
/* ----- Export ----- */
export const LANGUAGES = {
  pl: pl,
  en: en,
  ua: ua,
};
