<template>
  <section
    id="join"
    class="relative min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg"
  >
    <!-- 3D Cinematic Background -->
    <div class="absolute inset-0 perspective-1000">
      <!-- Gradient Layers -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-blood-red-dark/30 via-transparent to-paladin-gold/20 transform-gpu"
      ></div>

      <!-- Floating Orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-blood-red/10 rounded-full blur-3xl transform-gpu animate-float-1"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-paladin-gold/10 rounded-full blur-3xl transform-gpu animate-float-2"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-80 h-80 bg-blood-red/5 rounded-full blur-3xl transform-gpu animate-float-3"
      ></div>
    </div>

    <!-- Animated Grid Pattern -->
    <div
      class="absolute inset-0 opacity-5 transform-gpu"
      style="
        background-image: linear-gradient(
            rgba(220, 20, 60, 0.1) 1px,
            transparent 1px
          ),
          linear-gradient(90deg, rgba(220, 20, 60, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
        transform: perspective(1000px) rotateX(60deg) scale(1.5);
      "
    ></div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Main Heading -->
      <div
        class="text-center mb-12 md:mb-16 lg:mb-20 transform-gpu"
        style="transform: translateZ(50px)"
      >
        <h2
          class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blood-red mb-4 sm:mb-6 drop-shadow-2xl"
          style="text-shadow: 0 0 60px rgba(220, 20, 60, 0.5)"
        >
          {{ t('join.title') }}
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-transparent via-paladin-gold to-transparent mx-auto"
        ></div>
      </div>

      <!-- Opening Statement -->
      <div
        class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu"
        style="transform: translateZ(40px)"
      >
        <div
          class="bg-gradient-to-br from-blood-red/20 via-dark-surface/90 to-dark-surface/90 backdrop-blur-md border-2 border-blood-red/40 rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 shadow-2xl"
        >
          <div class="space-y-6 sm:space-y-8">
            <p
              class="text-xl sm:text-2xl md:text-3xl text-text-light leading-relaxed text-center font-semibold"
            >
              {{ t('join.opening.ready') }}
              <span class="text-paladin-gold font-bold">{{ t('join.opening.family') }}</span>
              {{ t('join.opening.question') }}
            </p>
            <p
              class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
            >
              {{ t('join.opening.description') }}
            </p>
            <div
              class="my-8 sm:my-10 border-l-4 border-paladin-gold pl-6 sm:pl-8 py-4 bg-paladin-gold/5 rounded-r-lg"
            >
              <p
                class="text-lg sm:text-xl md:text-2xl text-paladin-gold font-semibold leading-relaxed text-center"
                style="text-shadow: 0 0 20px rgba(255, 215, 0, 0.4)"
              >
                "{{ t('join.opening.quote') }}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Alliance Information -->
      <div class="max-w-6xl mx-auto space-y-12 md:space-y-16 lg:space-y-20 mb-12 md:mb-16 lg:mb-20">
        <!-- Main Alliance -->
        <div class="transform-gpu" style="transform: translateZ(40px)">
          <div
            class="bg-gradient-to-br from-blood-red/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/40 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
          >
            <div class="text-center mb-8 sm:mb-10">
              <div
                class="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-gradient-to-br from-blood-red/30 to-blood-red-dark/30 rounded-full flex items-center justify-center border-4 border-blood-red/50 shadow-xl"
              >
                <svg
                  class="w-12 h-12 sm:w-16 sm:h-16 text-blood-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blood-red mb-3">
                {{ t('join.main.title') }}
              </h3>
              <p class="text-paladin-gold font-semibold text-lg sm:text-xl md:text-2xl mb-6">
                {{ t('join.main.subtitle') }}
              </p>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-xl sm:text-2xl font-bold text-paladin-gold mb-4 text-center">
                  {{ t('join.main.about.title') }}
                </h4>
                <p class="text-base sm:text-lg text-text-muted leading-relaxed text-center mb-4">
                  {{ t('join.main.about.p1') }}
                </p>
                <p class="text-base sm:text-lg text-text-muted leading-relaxed text-center">
                  {{ t('join.main.about.p2') }}
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 class="text-lg sm:text-xl font-bold text-text-light mb-3">{{ t('join.main.offer.title') }}</h5>
                  <ul class="space-y-2 text-text-muted text-sm sm:text-base">
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.offer.item1') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.offer.item2') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.offer.item3') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.offer.item4') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.offer.item5') }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 class="text-lg sm:text-xl font-bold text-text-light mb-3">{{ t('join.main.who.title') }}</h5>
                  <ul class="space-y-2 text-text-muted text-sm sm:text-base">
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.who.item1') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.who.item2') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.who.item3') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.who.item4') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.main.who.item5') }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Academy -->
        <div class="transform-gpu" style="transform: translateZ(40px)">
          <div
            class="bg-gradient-to-br from-paladin-gold/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/40 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
          >
            <div class="text-center mb-8 sm:mb-10">
              <div
                class="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-gradient-to-br from-paladin-gold/30 to-paladin-gold-dark/30 rounded-full flex items-center justify-center border-4 border-paladin-gold/50 shadow-xl"
              >
                <svg
                  class="w-12 h-12 sm:w-16 sm:h-16 text-paladin-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.247m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.247"
                  />
                </svg>
              </div>
              <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold text-paladin-gold mb-3">
                {{ t('join.academy.title') }}
              </h3>
              <p class="text-blood-red font-semibold text-lg sm:text-xl md:text-2xl mb-6">
                {{ t('join.academy.subtitle') }}
              </p>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-xl sm:text-2xl font-bold text-paladin-gold mb-4 text-center">
                  {{ t('join.academy.about.title') }}
                </h4>
                <p class="text-base sm:text-lg text-text-muted leading-relaxed text-center mb-4">
                  {{ t('join.academy.about.p1') }}
                </p>
                <p class="text-base sm:text-lg text-text-muted leading-relaxed text-center">
                  {{ t('join.academy.about.p2') }}
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 class="text-lg sm:text-xl font-bold text-text-light mb-3">{{ t('join.academy.offer.title') }}</h5>
                  <ul class="space-y-2 text-text-muted text-sm sm:text-base">
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.offer.item1') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.offer.item2') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.offer.item3') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.offer.item4') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.offer.item5') }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 class="text-lg sm:text-xl font-bold text-text-light mb-3">{{ t('join.academy.who.title') }}</h5>
                  <ul class="space-y-2 text-text-muted text-sm sm:text-base">
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.who.item1') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.who.item2') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.who.item3') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.who.item4') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.academy.who.item5') }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Farm Alliances -->
        <div class="transform-gpu" style="transform: translateZ(40px)">
          <div
            class="bg-gradient-to-br from-blood-red/15 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/30 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
          >
            <div class="text-center mb-8 sm:mb-10">
              <div
                class="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-gradient-to-br from-blood-red/25 to-blood-red-dark/25 rounded-full flex items-center justify-center border-4 border-blood-red/40 shadow-xl"
              >
                <svg
                  class="w-12 h-12 sm:w-16 sm:h-16 text-blood-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blood-red mb-3">
                {{ t('join.farms.title') }}
              </h3>
              <p class="text-paladin-gold font-semibold text-lg sm:text-xl md:text-2xl mb-6">
                {{ t('join.farms.subtitle') }}
              </p>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-xl sm:text-2xl font-bold text-paladin-gold mb-4 text-center">
                  {{ t('join.farms.about.title') }}
                </h4>
                <p class="text-base sm:text-lg text-text-muted leading-relaxed text-center mb-4">
                  {{ t('join.farms.about.p1') }}
                </p>
                <p class="text-base sm:text-lg text-text-muted leading-relaxed text-center">
                  {{ t('join.farms.about.p2') }}
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 class="text-lg sm:text-xl font-bold text-text-light mb-3">{{ t('join.farms.offer.title') }}</h5>
                  <ul class="space-y-2 text-text-muted text-sm sm:text-base">
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.offer.item1') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.offer.item2') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.offer.item3') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.offer.item4') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-blood-red mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.offer.item5') }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 class="text-lg sm:text-xl font-bold text-text-light mb-3">{{ t('join.farms.who.title') }}</h5>
                  <ul class="space-y-2 text-text-muted text-sm sm:text-base">
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.who.item1') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.who.item2') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.who.item3') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.who.item4') }}</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ t('join.farms.who.item5') }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div
        class="max-w-5xl mx-auto transform-gpu"
        style="transform: translateZ(40px)"
      >
        <div
          class="bg-gradient-to-br from-paladin-gold/20 via-dark-surface/90 to-dark-surface/90 backdrop-blur-md border-2 border-paladin-gold/40 rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 shadow-2xl"
        >
          <div class="text-center space-y-6 sm:space-y-8">
            <h3
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-paladin-gold mb-4"
              style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
            >
              {{ t('join.contact.title') }}
            </h3>
            <p
              class="text-lg sm:text-xl md:text-2xl text-text-light leading-relaxed max-w-3xl mx-auto"
            >
              {{ t('join.contact.description') }}
            </p>
            <p
              class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto"
            >
              {{ t('join.contact.details') }}
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
              <a
                href="https://discord.gg/VbHvTfWJc5"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blood-red to-blood-red-dark text-white font-bold rounded-xl text-base sm:text-lg md:text-xl overflow-hidden shadow-2xl shadow-blood-red/50 hover:shadow-blood-red/70 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221c-.697 0-1.26.563-1.26 1.26s.563 1.26 1.26 1.26 1.26-.563 1.26-1.26-.563-1.26-1.26-1.26zm-4.461 0c-.697 0-1.26.563-1.26 1.26s.563 1.26 1.26 1.26 1.26-.563 1.26-1.26-.563-1.26-1.26-1.26zm-4.461 0c-.697 0-1.26.563-1.26 1.26s.563 1.26 1.26 1.26 1.26-.563 1.26-1.26-.563-1.26-1.26-1.26z"
                  />
                </svg>
                <span class="relative z-10">{{ t('join.contact.discord') }}</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-blood-red-light via-blood-red to-blood-red-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </a>
              <a
                href="https://t.me/+Wlska4g_xjE4ZjVi"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold text-paladin-gold font-bold rounded-xl text-base sm:text-lg md:text-xl hover:bg-paladin-gold hover:text-dark-bg shadow-2xl shadow-paladin-gold/30 hover:shadow-paladin-gold/50 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.559z"
                  />
                </svg>
                <span class="relative z-10">{{ t('join.contact.telegram') }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Particle Effects -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute w-1 h-1 bg-paladin-gold rounded-full opacity-30 animate-particle"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 5 + 's',
          animationDuration: Math.random() * 3 + 2 + 's',
        }"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
@keyframes float-1 {
  0%,
  100% {
    transform: translate(0, 0) translateZ(0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) translateZ(50px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) translateZ(-30px) rotate(240deg);
  }
}

@keyframes float-2 {
  0%,
  100% {
    transform: translate(0, 0) translateZ(0) rotate(0deg);
  }
  33% {
    transform: translate(-40px, 40px) translateZ(-50px) rotate(-120deg);
  }
  66% {
    transform: translate(30px, -30px) translateZ(30px) rotate(-240deg);
  }
}

@keyframes float-3 {
  0%,
  100% {
    transform: translate(0, 0) translateZ(0);
  }
  50% {
    transform: translate(50px, -50px) translateZ(40px);
  }
}

@keyframes particle {
  0% {
    transform: translateY(0) translateX(0) translateZ(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(50px) translateZ(100px) scale(0);
    opacity: 0;
  }
}

.animate-float-1 {
  animation: float-1 20s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 25s ease-in-out infinite;
}

.animate-float-3 {
  animation: float-3 15s ease-in-out infinite;
}

.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}

.perspective-1000 {
  perspective: 1000px;
}
</style>
