import { createI18n } from 'vue-i18n';

import en from './en';
import pl from './pl';

export const SUPPORTED_LOCALES = ['en', 'pl'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

const STORAGE_KEY = 'locale';

function detectLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  const supported = (SUPPORTED_LOCALES as readonly string[]);

  if (stored && supported.includes(stored)) {
    return stored as Locale;
  }

  // Get 'en' from 'en-US' etc.
  const browserLang = navigator.language.split('-')[0];

  return supported.includes(browserLang)
    ? (browserLang as Locale)
    : 'en';
}

export const i18n = createI18n({
  globalInjection: true,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, pl }
});