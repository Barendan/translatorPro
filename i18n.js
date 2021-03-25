import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
      'greeting-text':
        'How do you keep a bagel from getting away? Put lox on it.',
    },
  },
  ru: {
    translation: {
      'greeting-text':
        "Kak sdelat' tak, chtoby bublik ne uskol'znul? Pomestite na nego lokh.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
});

export default i18n;
