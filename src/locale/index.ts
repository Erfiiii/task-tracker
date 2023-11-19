import { createI18n } from 'vue-i18n'
import DE from './de.json'
import EN from './en.json'

export const i18n = createI18n({
  locale: 'EN',
  fallbackLocale: 'EN',
  messages: {
    EN,
    DE
  }
})