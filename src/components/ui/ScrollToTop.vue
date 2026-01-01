<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blood-red to-blood-red-dark text-white rounded-full shadow-2xl shadow-blood-red/50 flex items-center justify-center hover:shadow-blood-red/70 active:scale-100"
    aria-label="Scroll to top"
  >
    <svg
      class="w-6 h-6 sm:w-7 sm:h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { smoothScrollTo } from '@/utils'

const isVisible = ref(false)

const handleScroll = () => {
  // Show button when scrolled down more than 300px
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  smoothScrollTo('hero')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

