import i18next from 'i18next';
import en from './locales/en/translation'
import ru from './locales/ru/translation'
import { initReactI18next } from 'react-i18next';

i18next
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      resources: {
        'en': {
          'translation': en
        },
        'ru': {
          'translation': ru
        }
      }
    });

export default i18next;