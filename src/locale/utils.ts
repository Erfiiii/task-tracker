import type { Language, LanguageDetail } from './types'

export const languageDetails: Record<Language, LanguageDetail> = {
  EN: {
    value: 'EN',
    label: 'English'
  },
  DE: {
    value: 'DE',
    label: 'Deutch'
  }
}

export const languages = Object.keys(languageDetails) as Language[]

export function getLocale() {
  const storeLanguage = localStorage.getItem('language')
  const language: Language = storeLanguage ? (storeLanguage as Language) : 'EN'
  return language
}
export function setLocale(language: Language) {
  const pre = getLocale()
  if (pre !== language) {
    localStorage.setItem('language', language)
    window.location.reload()
  }
}
