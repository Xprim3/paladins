<template>
  <footer
    class="relative bg-dark-bg border-t-2 border-blood-red/30 text-white py-12 sm:py-16 md:py-20 overflow-hidden"
  >
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-blood-red/5 to-transparent transform-gpu"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
        <!-- Brand Section -->
        <div class="text-center md:text-left">
          <div class="mb-4 flex justify-center md:justify-start">
            <Logo />
          </div>
          <p class="text-sm sm:text-base text-text-muted mb-4 leading-relaxed">
            The Strongest Family in the Kingdom. Join us and become part of a true brotherhood bound by honor, loyalty, and unbreakable unity.
          </p>
          <p class="text-xs sm:text-sm text-text-muted italic">
            "In Blood Paladins, we don't just fight together. We die for each other."
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg sm:text-xl font-bold text-paladin-gold mb-4 sm:mb-6 text-center md:text-left">
            Quick Links
          </h4>
          <ul class="space-y-2 sm:space-y-3 text-center md:text-left">
            <li>
              <a
                href="#about"
                class="text-sm sm:text-base text-text-muted hover:text-paladin-gold transition-colors duration-300"
                @click="handleNavClick('#about', $event)"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#main-alliance"
                class="text-sm sm:text-base text-text-muted hover:text-paladin-gold transition-colors duration-300"
                @click="handleNavClick('#main-alliance', $event)"
              >
                Blood Paladins
              </a>
            </li>
            <li>
              <a
                href="#academy"
                class="text-sm sm:text-base text-text-muted hover:text-paladin-gold transition-colors duration-300"
                @click="handleNavClick('#academy', $event)"
              >
                Academy
              </a>
            </li>
            <li>
              <a
                href="#farms"
                class="text-sm sm:text-base text-text-muted hover:text-paladin-gold transition-colors duration-300"
                @click="handleNavClick('#farms', $event)"
              >
                Farm Alliances
              </a>
            </li>
            <li>
              <a
                href="#kingdom"
                class="text-sm sm:text-base text-text-muted hover:text-paladin-gold transition-colors duration-300"
                @click="handleNavClick('#kingdom', $event)"
              >
                Kingdom
              </a>
            </li>
            <li>
              <a
                href="#join"
                class="text-sm sm:text-base text-paladin-gold hover:text-paladin-gold-light transition-colors duration-300 font-semibold"
                @click="handleNavClick('#join', $event)"
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>

        <!-- Alliances -->
        <div>
          <h4 class="text-lg sm:text-xl font-bold text-paladin-gold mb-4 sm:mb-6 text-center md:text-left">
            Our Alliances
          </h4>
          <ul class="space-y-2 sm:space-y-3 text-center md:text-left">
            <li>
              <span class="text-sm sm:text-base text-text-muted">Blood Paladins</span>
              <span class="text-xs text-text-muted/70 ml-2">(Main)</span>
            </li>
            <li>
              <span class="text-sm sm:text-base text-text-muted">Paladins Academy</span>
            </li>
            <li>
              <span class="text-sm sm:text-base text-text-muted">Paladins Farm1</span>
            </li>
            <li>
              <span class="text-sm sm:text-base text-text-muted">Paladins Farm2</span>
            </li>
            <li>
              <span class="text-sm sm:text-base text-text-muted">Paladins Farm3</span>
            </li>
          </ul>
        </div>

        <!-- Social & Contact -->
        <div>
          <h4 class="text-lg sm:text-xl font-bold text-paladin-gold mb-4 sm:mb-6 text-center md:text-left">
            Connect With Us
          </h4>
          <div class="space-y-3 sm:space-y-4">
            <!-- Discord -->
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base text-text-muted hover:text-paladin-gold transition-colors duration-300 group"
            >
              <div
                class="w-8 h-8 sm:w-10 sm:h-10 bg-dark-surface rounded-lg flex items-center justify-center border border-paladin-gold/30 group-hover:border-paladin-gold group-hover:bg-paladin-gold/10 transition-all duration-300"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-paladin-gold"
                >
                  <path
                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                  />
                </svg>
              </div>
              <span>Discord</span>
            </a>
            <!-- Telegram -->
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base text-text-muted hover:text-paladin-gold transition-colors duration-300 group"
            >
              <div
                class="w-8 h-8 sm:w-10 sm:h-10 bg-dark-surface rounded-lg flex items-center justify-center border border-paladin-gold/30 group-hover:border-paladin-gold group-hover:bg-paladin-gold/10 transition-all duration-300"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-paladin-gold"
                >
                  <path
                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.559z"
                  />
                </svg>
              </div>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t-2 border-dark-border pt-6 sm:pt-8 mt-8 sm:mt-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-xs sm:text-sm text-text-muted text-center md:text-left">
            &copy; {{ currentYear }} Blood Paladins. All rights reserved.
          </p>
          <p class="text-xs sm:text-sm text-text-muted text-center md:text-right">
            Built with honor, loyalty, and unity.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { smoothScrollTo } from '@/utils'
import Logo from '@/components/ui/Logo.vue'

const currentYear = computed(() => new Date().getFullYear())

const handleNavClick = (href: string, event: Event) => {
  event.preventDefault()
  const sectionId = href.replace('#', '')
  smoothScrollTo(sectionId)
}
</script>
