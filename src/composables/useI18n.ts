import { ref, computed } from 'vue'
import { translations } from '@/locales/translations'

export type Language = 'en' | 'zh' | 'vi' | 'hi' | 'ru' | 'es' | 'fr' | 'de'

export const languages: { code: Language; name: string; flag: string; flagUrl: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸', flagUrl: 'https://flagcdn.com/us.svg' },
  { code: 'zh', name: '中文', flag: '🇨🇳', flagUrl: 'https://flagcdn.com/cn.svg' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', flagUrl: 'https://flagcdn.com/vn.svg' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', flagUrl: 'https://flagcdn.com/in.svg' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', flagUrl: 'https://flagcdn.com/ru.svg' },
  { code: 'es', name: 'Español', flag: '🇪🇸', flagUrl: 'https://flagcdn.com/es.svg' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', flagUrl: 'https://flagcdn.com/fr.svg' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', flagUrl: 'https://flagcdn.com/de.svg' },
]

const currentLanguage = ref<Language>('en')

export const useI18n = () => {
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    localStorage.setItem('blood-paladins-language', lang)
  }

  const getLanguage = (): Language => {
    const saved = localStorage.getItem('blood-paladins-language') as Language
    if (saved && languages.some(l => l.code === saved)) {
      return saved
    }
    // Detect browser language
    const browserLang = navigator.language.split('-')[0] as Language
    if (languages.some(l => l.code === browserLang)) {
      return browserLang
    }
    return 'en'
  }

  const initLanguage = () => {
    currentLanguage.value = getLanguage()
  }

  const currentLang = computed(() => currentLanguage.value)
  const currentLangData = computed(() => 
    languages.find(l => l.code === currentLanguage.value) || languages[0]
  )

  // Reactive translation function
  const t = computed(() => (key: string): string => {
    const langTranslations = translations[currentLanguage.value] || translations.en
    return langTranslations[key] || key
  })

  return {
    currentLang,
    currentLangData,
    languages,
    setLanguage,
    initLanguage,
    t,
  }
}

