<template>
  <div class="language-switcher-container relative">
    <!-- Language Switcher Button -->
      <button
        @click.stop="toggleDropdown"
        class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-dark-bg/50 transition text-text-light"
        aria-label="Change language"
      >
      <img 
        :src="currentLangData.flagUrl" 
        :alt="currentLangData.name"
        class="w-5 h-4 sm:w-6 sm:h-4 object-cover rounded-sm"
      />
      <span class="text-xs sm:text-sm xl:text-base font-medium hidden sm:inline">{{ currentLangData.name }}</span>
      <svg 
        class="w-3 h-3 sm:w-4 sm:h-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95 translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-2"
    >
      <div
        v-if="isOpen"
        class="language-dropdown absolute right-0 mt-2 w-40 bg-dark-surface rounded-lg shadow-xl z-50 overflow-hidden border border-dark-border"
      >
        <div class="py-1">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang.code)"
            :class="[
              'w-full flex items-center space-x-3 px-4 py-2.5 text-left transition-colors',
              currentLang === lang.code
                ? 'bg-dark-bg text-blood-red'
                : 'text-text-light hover:bg-dark-bg'
            ]"
          >
            <img 
              :src="lang.flagUrl" 
              :alt="lang.name"
              class="w-6 h-4 object-cover rounded-sm"
            />
            <span class="flex-1 text-sm font-medium">{{ lang.name }}</span>
            <span 
              v-if="currentLang === lang.code"
              class="text-blood-red text-sm"
            >
              ✓
            </span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useI18n, type Language } from '@/composables/useI18n'

interface Props {
  closeMobileMenu?: () => void
  mobileMenuOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  closeMobileMenu: undefined,
  mobileMenuOpen: false,
})

const { currentLang, currentLangData, languages, setLanguage, initLanguage } = useI18n()
const isOpen = ref(false)
let scrollTimeout: number | null = null

const toggleDropdown = (event?: Event) => {
  // Stop event propagation to prevent immediate close
  if (event) {
    event.stopPropagation()
  }
  
  if (isOpen.value) {
    isOpen.value = false
  } else {
    // Close mobile menu if it's open
    if (props.closeMobileMenu && props.mobileMenuOpen) {
      props.closeMobileMenu()
    }
    // Small delay to prevent immediate close from click handler
    setTimeout(() => {
      isOpen.value = true
    }, 10)
  }
}

// Close language switcher when mobile menu opens
watch(() => props.mobileMenuOpen, (newValue) => {
  if (newValue && isOpen.value) {
    isOpen.value = false
  }
})

const closeDropdown = () => {
  isOpen.value = false
}

const selectLanguage = (lang: Language) => {
  setLanguage(lang)
  closeDropdown()
}

// Click outside handler
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const languageSwitcher = target.closest('.language-switcher-container')
  const button = target.closest('button[aria-label="Change language"]')
  
  // Close if clicking outside the language switcher
  if (isOpen.value && !languageSwitcher && !button) {
    closeDropdown()
  }
}

// Close on scroll
const handleScroll = () => {
  // Debounce scroll handler to prevent immediate closing
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  
  scrollTimeout = window.setTimeout(() => {
    if (isOpen.value) {
      closeDropdown()
    }
  }, 100)
}

onMounted(() => {
  initLanguage()
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Close on escape key
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeDropdown()
    }
  }
  window.addEventListener('keydown', handleEscape)
  
  // Listen for custom event to close dropdown
  const handleCloseEvent = () => {
    closeDropdown()
  }
  document.addEventListener('close-language-dropdown', handleCloseEvent)
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('close-language-dropdown', handleCloseEvent)
    document.removeEventListener('click', handleClickOutside)
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
  })
})
</script>
