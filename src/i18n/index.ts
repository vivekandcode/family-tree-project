import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import gu from "./locales/gujarati/translation.json";
import en from "./locales/english/translation.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            gu: {
                translation: gu,
            },
            en: {
                translation: en,
            },
        },

        lng: "gu",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
    })


export default i18n;