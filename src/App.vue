<template>
  <div class="min-h-screen bg-dark-bg">
    <Header />
    <HeroSection />
    <AboutSection />
    <MainAllianceSection />
    <AcademySection />
    <FarmsSection />
    <KingdomSection />
    <JoinSection />
    <FooterSection />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/ui/Header.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import MainAllianceSection from '@/components/sections/MainAllianceSection.vue'
import AcademySection from '@/components/sections/AcademySection.vue'
import FarmsSection from '@/components/sections/FarmsSection.vue'
import KingdomSection from '@/components/sections/KingdomSection.vue'
import JoinSection from '@/components/sections/JoinSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import ScrollToTop from '@/components/ui/ScrollToTop.vue'
import { useI18n } from '@/composables/useI18n'

const { initLanguage } = useI18n()

onMounted(() => {
  initLanguage()
})
</script>

