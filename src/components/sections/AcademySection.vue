<template>
  <section
    id="academy"
    class="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-dark-surface"
  >
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-paladin-gold/15 via-dark-surface to-paladin-gold/8 transform-gpu"
      ></div>
      <div
        class="absolute top-1/4 right-1/4 w-64 h-64 bg-paladin-gold/8 rounded-full blur-3xl transform-gpu"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/4 w-56 h-56 bg-paladin-gold/5 rounded-full blur-3xl transform-gpu"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Main Heading -->
      <div class="text-center mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(50px)">
        <h2
          class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-paladin-gold mb-4 drop-shadow-2xl"
          style="text-shadow: 0 0 60px rgba(255, 215, 0, 0.5)"
        >
          {{ t('academy.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-paladin-gold to-transparent mx-auto"></div>
      </div>

      <!-- Academy Description -->
      <div class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(40px)">
        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
        >
          <p
            class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center mb-4"
          >
            {{ t('academy.description.p1') }} <span class="text-paladin-gold font-semibold">{{ t('academy.description.p1.training') }}</span> {{ t('academy.description.p1.end') }}
          </p>
          <p
            class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
          >
            {{ t('academy.description.p2') }}
          </p>
        </div>
      </div>

      <!-- Leadership Structure -->
      <div class="max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <h3
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-paladin-gold text-center mb-8 md:mb-10 lg:mb-12"
          style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
        >
          {{ t('academy.leadership.title') }}
        </h3>

        <!-- Leader -->
        <div class="mb-8 md:mb-10 lg:mb-12">
          <div
            class="max-w-4xl mx-auto bg-gradient-to-br from-paladin-gold/15 via-dark-surface/70 to-dark-surface/70 backdrop-blur-sm border-2 border-paladin-gold/30 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl transform-gpu"
            style="transform-style: preserve-3d"
          >
            <div class="text-center">
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-paladin-gold/25 to-paladin-gold-dark/25 rounded-full flex items-center justify-center border-3 border-paladin-gold/40 shadow-lg"
              >
                <svg
                  class="w-8 h-8 sm:w-10 sm:h-10 text-paladin-gold"
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
              <h4 class="text-xl sm:text-2xl md:text-3xl font-bold text-paladin-gold mb-2">
                {{ t('academy.leader.name') }}
              </h4>
              <p class="text-blood-red font-semibold text-sm sm:text-base mb-4">{{ t('academy.leader.role') }}</p>
              
              <div class="mt-4 space-y-2">
                <h5 class="text-base sm:text-lg font-bold text-text-light mb-2">{{ t('academy.leader.duties.title') }}</h5>
                <ul class="text-left max-w-xl mx-auto space-y-1.5 text-text-muted text-xs sm:text-sm">
                  <li class="flex items-start">
                    <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                    <span>{{ t('academy.leader.duty1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                    <span>{{ t('academy.leader.duty2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                    <span>{{ t('academy.leader.duty3') }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                    <span>{{ t('academy.leader.duty4') }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                    <span>{{ t('academy.leader.duty5') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Officers -->
        <div>
          <h4
            class="text-xl sm:text-2xl md:text-3xl font-bold text-paladin-gold text-center mb-6 sm:mb-8"
          >
            {{ t('academy.officers.title') }}
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div
              v-for="(officer, index) in academyOfficers"
              :key="index"
              class="transform-gpu"
              style="transform-style: preserve-3d"
            >
              <div
                class="bg-gradient-to-br from-paladin-gold/10 via-dark-surface/70 to-dark-surface/70 backdrop-blur-sm border border-paladin-gold/30 rounded-xl p-4 sm:p-6 shadow-lg hover:border-paladin-gold/50 transition-all duration-300"
                style="transform: translateZ(15px)"
              >
                <div class="text-center mb-3">
                  <div
                    class="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold-dark/20 rounded-full flex items-center justify-center border-2 border-paladin-gold/40 shadow-md"
                  >
                    <svg
                      class="w-6 h-6 sm:w-7 sm:h-7 text-paladin-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h5 class="text-lg sm:text-xl font-bold text-paladin-gold mb-1">
                    {{ officer.name }}
                  </h5>
                  <p class="text-blood-red font-semibold text-xs sm:text-sm mb-3">
                    {{ officer.role }}
                  </p>
                </div>

                <div class="space-y-1.5">
                  <h6 class="text-xs font-bold text-text-light mb-1.5">{{ t('academy.officers.duties') }}</h6>
                  <ul class="text-xs text-text-muted space-y-1">
                    <li v-for="(duty, dutyIndex) in officer.duties" :key="dutyIndex" class="flex items-start">
                      <span class="text-paladin-gold mr-1.5 mt-0.5 text-[10px]">•</span>
                      <span>{{ duty }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "@/composables/useI18n";

const { t } = useI18n();

const academyOfficers = computed(() => [
  {
    name: "Mentor",
    role: t.value('academy.officer.mentor.role'),
    duties: [
      t.value('academy.officer.mentor.duty1'),
      t.value('academy.officer.mentor.duty2'),
      t.value('academy.officer.mentor.duty3'),
      t.value('academy.officer.mentor.duty4'),
      t.value('academy.officer.mentor.duty5'),
    ],
  },
  {
    name: "Sage",
    role: t.value('academy.officer.sage.role'),
    duties: [
      t.value('academy.officer.sage.duty1'),
      t.value('academy.officer.sage.duty2'),
      t.value('academy.officer.sage.duty3'),
      t.value('academy.officer.sage.duty4'),
      t.value('academy.officer.sage.duty5'),
    ],
  },
  {
    name: "Guardian",
    role: t.value('academy.officer.guardian.role'),
    duties: [
      t.value('academy.officer.guardian.duty1'),
      t.value('academy.officer.guardian.duty2'),
      t.value('academy.officer.guardian.duty3'),
      t.value('academy.officer.guardian.duty4'),
      t.value('academy.officer.guardian.duty5'),
    ],
  },
  {
    name: "Coordinator",
    role: t.value('academy.officer.coordinator.role'),
    duties: [
      t.value('academy.officer.coordinator.duty1'),
      t.value('academy.officer.coordinator.duty2'),
      t.value('academy.officer.coordinator.duty3'),
      t.value('academy.officer.coordinator.duty4'),
      t.value('academy.officer.coordinator.duty5'),
    ],
  },
  {
    name: "Recruiter",
    role: t.value('academy.officer.recruiter.role'),
    duties: [
      t.value('academy.officer.recruiter.duty1'),
      t.value('academy.officer.recruiter.duty2'),
      t.value('academy.officer.recruiter.duty3'),
      t.value('academy.officer.recruiter.duty4'),
      t.value('academy.officer.recruiter.duty5'),
    ],
  },
  {
    name: "Advisor",
    role: t.value('academy.officer.advisor.role'),
    duties: [
      t.value('academy.officer.advisor.duty1'),
      t.value('academy.officer.advisor.duty2'),
      t.value('academy.officer.advisor.duty3'),
      t.value('academy.officer.advisor.duty4'),
      t.value('academy.officer.advisor.duty5'),
    ],
  },
  {
    name: "Monitor",
    role: t.value('academy.officer.monitor.role'),
    duties: [
      t.value('academy.officer.monitor.duty1'),
      t.value('academy.officer.monitor.duty2'),
      t.value('academy.officer.monitor.duty3'),
      t.value('academy.officer.monitor.duty4'),
      t.value('academy.officer.monitor.duty5'),
    ],
  },
  {
    name: "Support",
    role: t.value('academy.officer.support.role'),
    duties: [
      t.value('academy.officer.support.duty1'),
      t.value('academy.officer.support.duty2'),
      t.value('academy.officer.support.duty3'),
      t.value('academy.officer.support.duty4'),
      t.value('academy.officer.support.duty5'),
    ],
  },
]);
</script>

<style scoped>
.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}
</style>
