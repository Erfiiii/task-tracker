import { createI18n } from 'vue-i18n'
import DE from './de.json'
import EN from './en.json'
import { getLocale } from './utils'

export const i18n = createI18n({
  locale: getLocale(),
  fallbackLocale: 'EN',
  legacy: false,
  messages: {
    EN,
    DE
  }
})

export { getLocale, setLocale, languageDetails, languages } from './utils'
export type { Language, LanguageDetail } from './types'
