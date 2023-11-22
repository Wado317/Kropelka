import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const plLang = require("./pl.json");
const enLang = require("./en.json");
const uaLang = require("./ua.json");

export enum SupportedLanguages {
  pl = "pl",
  en = "en",
  ua = "ua",
}

const resources = {
  [SupportedLanguages.pl]: {
    translation: plLang,
  },
  [SupportedLanguages.en]: {
    translation: enLang,
  },
  [SupportedLanguages.ua]: {
    translation: uaLang,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: SupportedLanguages.pl,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
