import { watch, onMounted } from 'vue'
import { useI18n } from './useI18n'

interface SEOData {
  title: string
  description: string
  keywords: string
  image: string
  url: string
  type: string
}

const defaultSEO: Record<string, SEOData> = {
  en: {
    title: 'Blood Paladins - Join the Strongest Family in Rise of Kingdoms',
    description: 'Join Blood Paladins, the strongest family alliance in Rise of Kingdoms. Experience honor, loyalty, and excellence with elite warriors led by Pryda and LundiX. Join our main alliance, academy, or farm networks.',
    keywords: 'Rise of Kingdoms, Blood Paladins, alliance, ROK, gaming, strategy, KVK, kingdom, warriors, elite, Pryda, LundiX, Paladins Academy, farm alliance',
    image: '/og-image.svg',
    url: 'https://bloodpaladins.com',
    type: 'website',
  },
  zh: {
    title: '血圣骑士 - 加入万国觉醒最强家族',
    description: '加入血圣骑士，万国觉醒中最强的家族联盟。与由Pryda和LundiX领导的精英战士一起体验荣誉、忠诚和卓越。加入我们的主联盟、学院或农场网络。',
    keywords: '万国觉醒, 血圣骑士, 联盟, ROK, 游戏, 策略, KVK, 王国, 战士, 精英, Pryda, LundiX, 圣骑士学院, 农场联盟',
    image: '/og-image.svg',
    url: 'https://bloodpaladins.com',
    type: 'website',
  },
  vi: {
    title: 'Blood Paladins - Tham Gia Gia Đình Mạnh Nhất Trong Rise of Kingdoms',
    description: 'Tham gia Blood Paladins, gia đình liên minh mạnh nhất trong Rise of Kingdoms. Trải nghiệm danh dự, lòng trung thành và sự xuất sắc với các chiến binh tinh nhuệ được dẫn dắt bởi Pryda và LundiX. Tham gia liên minh chính, học viện hoặc mạng lưới nông trại của chúng tôi.',
    keywords: 'Rise of Kingdoms, Blood Paladins, liên minh, ROK, game, chiến lược, KVK, vương quốc, chiến binh, tinh nhuệ, Pryda, LundiX, Paladins Academy, liên minh nông trại',
    image: '/og-image.svg',
    url: 'https://bloodpaladins.com',
    type: 'website',
  },
  hi: {
    title: 'Blood Paladins - Rise of Kingdoms में सबसे मजबूत परिवार में शामिल हों',
    description: 'Blood Paladins में शामिल हों, Rise of Kingdoms में सबसे मजबूत परिवार गठबंधन। Pryda और LundiX के नेतृत्व में अभिजात वर्ग के योद्धाओं के साथ सम्मान, निष्ठा और उत्कृष्टता का अनुभव करें। हमारे मुख्य गठबंधन, अकादमी या फार्म नेटवर्क में शामिल हों।',
    keywords: 'Rise of Kingdoms, Blood Paladins, गठबंधन, ROK, गेमिंग, रणनीति, KVK, राज्य, योद्धा, अभिजात वर्ग, Pryda, LundiX, Paladins Academy, फार्म गठबंधन',
    image: '/og-image.svg',
    url: 'https://bloodpaladins.com',
    type: 'website',
  },
  ru: {
    title: 'Кровавые Паладины - Присоединяйтесь к Самой Сильной Семье в Rise of Kingdoms',
    description: 'Присоединяйтесь к Кровавым Паладинам, самому сильному семейному альянсу в Rise of Kingdoms. Испытайте честь, верность и совершенство с элитными воинами под руководством Pryda и LundiX. Присоединяйтесь к нашему главному альянсу, академии или сети ферм.',
    keywords: 'Rise of Kingdoms, Кровавые Паладины, альянс, ROK, игры, стратегия, KVK, королевство, воины, элита, Pryda, LundiX, Академия Паладинов, фермерский альянс',
    image: '/og-image.svg',
    url: 'https://bloodpaladins.com',
    type: 'website',
  },
  es: {
    title: 'Blood Paladins - Únete a la Familia Más Fuerte en Rise of Kingdoms',
    description: 'Únete a Blood Paladins, la alianza familiar más fuerte en Rise of Kingdoms. Experimenta honor, lealtad y excelencia con guerreros de élite liderados por Pryda y LundiX. Únete a nuestra alianza principal, academia o red de granjas.',
    keywords: 'Rise of Kingdoms, Blood Paladins, alianza, ROK, juegos, estrategia, KVK, reino, guerreros, élite, Pryda, LundiX, Academia Paladins, alianza de granjas',
    image: '/og-image.svg',
    url: 'https://bloodpaladins.com',
    type: 'website',
  },
  fr: {
    title: 'Blood Paladins - Rejoignez la Famille la Plus Forte dans Rise of Kingdoms',
    description: 'Rejoignez Blood Paladins, l\'alliance familiale la plus forte dans Rise of Kingdoms. Vivez l\'honneur, la loyauté et l\'excellence avec des guerriers d\'élite dirigés par Pryda et LundiX. Rejoignez notre alliance principale, académie ou réseau de fermes.',
    keywords: 'Rise of Kingdoms, Blood Paladins, alliance, ROK, jeux, stratégie, KVK, royaume, guerriers, élite, Pryda, LundiX, Académie Paladins, alliance de fermes',
    image: '/og-image.svg',
    url: 'https://bloodpaladins.com',
    type: 'website',
  },
  de: {
    title: 'Blood Paladins - Tritt der Stärksten Familie in Rise of Kingdoms Bei',
    description: 'Tritt Blood Paladins bei, der stärksten Familienallianz in Rise of Kingdoms. Erlebe Ehre, Loyalität und Exzellenz mit Elite-Kriegern unter der Führung von Pryda und LundiX. Tritt unserer Hauptallianz, Akademie oder Farm-Netzwerk bei.',
    keywords: 'Rise of Kingdoms, Blood Paladins, Allianz, ROK, Spiele, Strategie, KVK, Königreich, Krieger, Elite, Pryda, LundiX, Paladins Akademie, Farm-Allianz',
    image: '/og-image.svg',
    url: 'https://bloodpaladins.com',
    type: 'website',
  },
}

export const useSEO = () => {
  const { currentLang } = useI18n()

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, name)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  const updateLinkTag = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
    if (!element) {
      element = document.createElement('link')
      element.setAttribute('rel', rel)
      document.head.appendChild(element)
    }
    element.setAttribute('href', href)
  }

  const updateTitle = (title: string) => {
    document.title = title
  }

  const updateSEO = () => {
    const lang = currentLang.value
    const seo = defaultSEO[lang] || defaultSEO.en
    const baseUrl = seo.url

    // Update title
    updateTitle(seo.title)

    // Basic meta tags
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', 'Blood Paladins')
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    updateMetaTag('googlebot', 'index, follow')
    updateMetaTag('language', lang)
    updateMetaTag('revisit-after', '7 days')

    // Open Graph tags
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', `${baseUrl}${seo.image}`, 'property')
    updateMetaTag('og:url', baseUrl, 'property')
    updateMetaTag('og:type', seo.type, 'property')
    updateMetaTag('og:site_name', 'Blood Paladins', 'property')
    updateMetaTag('og:locale', lang === 'en' ? 'en_US' : lang === 'zh' ? 'zh_CN' : lang === 'es' ? 'es_ES' : lang === 'fr' ? 'fr_FR' : lang === 'de' ? 'de_DE' : lang === 'ru' ? 'ru_RU' : lang === 'hi' ? 'hi_IN' : lang === 'vi' ? 'vi_VN' : 'en_US', 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', seo.title)
    updateMetaTag('twitter:description', seo.description)
    updateMetaTag('twitter:image', `${baseUrl}${seo.image}`)
    updateMetaTag('twitter:site', '@BloodPaladins')

    // Canonical URL
    updateLinkTag('canonical', baseUrl)

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang)
  }

  // Watch for language changes
  watch(currentLang, () => {
    updateSEO()
  })

  // Initialize on mount
  onMounted(() => {
    updateSEO()
  })

  return {
    updateSEO,
  }
}

