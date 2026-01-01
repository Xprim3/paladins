<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-dark-bg border-b border-dark-border shadow-lg opacity-100">
    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-14 sm:h-16 md:h-20 min-w-0 gap-2">
        <!-- Logo/Brand -->
        <div class="flex items-center flex-shrink-0 min-w-0">
          <Logo />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden xl:flex items-center flex-wrap gap-x-3 gap-y-2 xl:gap-x-4 2xl:gap-x-6 flex-1 justify-end min-w-0">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="link.href" 
            :class="[
              'transition font-medium text-sm xl:text-base 2xl:text-lg whitespace-nowrap flex-shrink-0',
              activeSection === link.id 
                ? 'text-blood-red' 
                : 'text-text-light hover:text-blood-red'
            ]"
            @click="handleNavClick(link.href, $event)"
          >
            {{ link.label }}
          </a>
          <a 
            href="#join" 
            :class="[
              'transition font-medium text-sm xl:text-base 2xl:text-lg whitespace-nowrap flex-shrink-0',
              activeSection === 'join'
                ? 'text-paladin-gold' 
                : 'text-paladin-gold hover:text-paladin-gold-light'
            ]"
            @click="handleNavClick('#join', $event)"
          >
            {{ joinUsLabel }}
          </a>
          <div class="ml-2 xl:ml-4 2xl:ml-6 flex-shrink-0">
            <LanguageSwitcher />
          </div>
        </div>

        <!-- Mobile: Language Switcher and Menu Button -->
        <div class="xl:hidden flex items-center gap-2">
          <LanguageSwitcher 
            :close-mobile-menu="closeMobileMenu"
            :mobile-menu-open="isMobileMenuOpen"
          />
          <button 
            @click.stop="toggleMobileMenu"
            class="text-text-light hover:text-blood-red transition p-2"
            aria-label="Toggle menu"
          >
          <svg 
            v-if="!isMobileMenuOpen"
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            v-else
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 scale-95 translate-y-2"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-2"
      >
        <div 
          v-if="isMobileMenuOpen"
          class="mobile-menu-container xl:hidden absolute top-full right-4 mt-2 min-w-[200px] max-w-[280px] bg-dark-surface rounded-lg shadow-xl z-50 overflow-hidden"
        >
          <div class="py-2">
            <a 
              v-for="link in navLinks" 
              :key="link.id"
              :href="link.href" 
              class="block text-text-light hover:text-blood-red transition font-medium py-2.5 px-5 text-sm sm:text-base hover:bg-dark-bg break-words"
              @click="handleNavClick(link.href, $event)"
            >
              {{ link.label }}
            </a>
            <div class="border-t border-dark-border my-1"></div>
            <a 
              href="#join" 
              class="block text-paladin-gold hover:text-paladin-gold-light transition font-medium py-2.5 px-5 text-sm sm:text-base hover:bg-dark-bg break-words"
              @click="handleNavClick('#join', $event)"
            >
              {{ joinUsLabel }}
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { smoothScrollTo } from '@/utils'
import Logo from './Logo.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navLinks = computed(() => [
  { id: 'hero', label: t.value('nav.home'), href: '#hero' },
  { id: 'about', label: t.value('nav.about'), href: '#about' },
  { id: 'main-alliance', label: t.value('nav.paladins'), href: '#main-alliance' },
  { id: 'academy', label: t.value('nav.academy'), href: '#academy' },
  { id: 'farms', label: t.value('nav.farms'), href: '#farms' },
  { id: 'kingdom', label: t.value('nav.kingdom'), href: '#kingdom' },
])

const joinUsLabel = computed(() => t.value('nav.join'))

const toggleMobileMenu = (event?: Event) => {
  // Stop event propagation to prevent immediate close
  if (event) {
    event.stopPropagation()
  }
  
  // Toggle the menu state
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  
  // If opening, close language switcher first
  if (isMobileMenuOpen.value) {
    closeAllDropdowns()
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const closeAllDropdowns = () => {
  // Close language switcher dropdown by dispatching a custom event
  document.dispatchEvent(new CustomEvent('close-language-dropdown'))
}

const handleNavClick = (href: string, event: Event) => {
  event.preventDefault()
  const sectionId = href.replace('#', '')
  smoothScrollTo(sectionId)
  isMobileMenuOpen.value = false
}

const updateActiveSection = () => {
  const sections = ['hero', 'about', 'main-alliance', 'academy', 'farms', 'kingdom', 'join']
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section) {
      const sectionTop = section.offsetTop
      if (scrollPosition >= sectionTop) {
        activeSection.value = sections[i]
        break
      }
    }
  }
}

let clickTimeout: number | null = null

const handleClickOutside = (event: MouseEvent) => {
  // Use setTimeout to allow the toggle click to complete first
  if (clickTimeout) {
    clearTimeout(clickTimeout)
  }
  
  clickTimeout = window.setTimeout(() => {
    const target = event.target as HTMLElement
    const mobileMenu = target.closest('.mobile-menu-container')
    const mobileMenuButton = target.closest('button[aria-label="Toggle menu"]')
    
    // Close mobile menu if clicking outside
    if (isMobileMenuOpen.value && !mobileMenu && !mobileMenuButton) {
      isMobileMenuOpen.value = false
    }
  }, 10)
}

let scrollTimeout: number | null = null

const handleScroll = () => {
  // Debounce scroll handler to prevent immediate closing
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  
  scrollTimeout = window.setTimeout(() => {
    // Close mobile menu and language switcher on scroll
    if (isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false
    }
    // Close language switcher via custom event
    document.dispatchEvent(new CustomEvent('close-language-dropdown'))
    updateActiveSection()
  }, 100)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

