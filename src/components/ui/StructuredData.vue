<template>
  <!-- Structured Data is injected via script tag in head -->
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { currentLang, t } = useI18n()

const getStructuredData = () => {
  const lang = currentLang.value
  const baseUrl = 'https://bloodpaladins.com'
  
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Blood Paladins',
    url: baseUrl,
    logo: `${baseUrl}/og-image.svg`,
    description: t.value('hero.description'),
    sameAs: [
      'https://discord.gg/VbHvTfWJc5',
      'https://t.me/+Wlska4g_xjE4ZjVi',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Recruitment',
      availableLanguage: ['en', 'zh', 'vi', 'hi', 'ru', 'es', 'fr', 'de'],
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Blood Paladins',
    url: baseUrl,
    description: t.value('hero.description'),
    inLanguage: lang,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.value('nav.about'),
        item: `${baseUrl}#about`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: t.value('nav.paladins'),
        item: `${baseUrl}#main-alliance`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: t.value('nav.academy'),
        item: `${baseUrl}#academy`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: t.value('nav.farms'),
        item: `${baseUrl}#farms`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: t.value('nav.kingdom'),
        item: `${baseUrl}#kingdom`,
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: t.value('nav.join'),
        item: `${baseUrl}#join`,
      },
    ],
  }

  return JSON.stringify([organization, website, breadcrumb], null, 2)
}

const injectStructuredData = () => {
  // Remove existing structured data script
  const existing = document.querySelector('script[type="application/ld+json"]')
  if (existing) {
    existing.remove()
  }

  // Create and inject new script
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = getStructuredData()
  document.head.appendChild(script)
}

onMounted(() => {
  injectStructuredData()
})

watch(currentLang, () => {
  injectStructuredData()
})
</script>

