<template>
  <section
    id="kingdom"
    class="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-dark-surface"
  >
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-blood-red/10 via-transparent to-paladin-gold/10 transform-gpu"
      ></div>
      <div
        class="absolute top-1/4 left-1/4 w-80 h-80 bg-blood-red/5 rounded-full blur-3xl transform-gpu"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-paladin-gold/5 rounded-full blur-3xl transform-gpu"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Main Heading -->
      <div
        class="text-center mb-12 md:mb-16 lg:mb-20 transform-gpu"
        style="transform: translateZ(50px)"
      >
        <h2
          class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blood-red mb-4 drop-shadow-2xl"
          style="text-shadow: 0 0 60px rgba(220, 20, 60, 0.5)"
        >
          {{ t("kingdom.title") }}
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-transparent via-paladin-gold to-transparent mx-auto"
        ></div>
      </div>

      <!-- Kingdom Stats & Information -->
      <div
        class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu"
        style="transform: translateZ(40px)"
      >
        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-paladin-gold text-center mb-6 md:mb-8"
            style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
          >
            {{ t("kingdom.info.title") }}
          </h3>

          <!-- Kingdom Stats -->
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8"
          >
            <div class="text-center">
              <div
                class="text-2xl sm:text-3xl md:text-4xl font-bold text-blood-red mb-2"
              >
                {{ kingdomStats.number }}
              </div>
              <div class="text-xs sm:text-sm text-text-muted">
                {{ t("kingdom.info.number") }}
              </div>
            </div>
            <div class="text-center">
              <div
                class="text-2xl sm:text-3xl md:text-4xl font-bold text-paladin-gold mb-2"
              >
                {{ kingdomStats.power }}
              </div>
              <div class="text-xs sm:text-sm text-text-muted">
                {{ t("kingdom.info.power") }}
              </div>
            </div>
            <div class="text-center">
              <div
                class="text-2xl sm:text-3xl md:text-4xl font-bold text-blood-red mb-2"
              >
                {{ kingdomStats.alliances }}
              </div>
              <div class="text-xs sm:text-sm text-text-muted">
                {{ t("kingdom.info.alliances") }}
              </div>
            </div>
            <div class="text-center">
              <div
                class="text-2xl sm:text-3xl md:text-4xl font-bold text-paladin-gold mb-2"
              >
                {{ kingdomStats.members }}
              </div>
              <div class="text-xs sm:text-sm text-text-muted">
                {{ t("kingdom.info.members") }}
              </div>
            </div>
          </div>

          <p
            class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center mb-4"
          >
            {{ t("kingdom.info.p1") }}
            <span class="text-blood-red font-semibold"
              >{{ t("kingdom.info.p1.kingdom") }}
              {{ kingdomStats.number }}</span
            >{{ t("kingdom.info.p1.end") }}
            <span class="text-paladin-gold font-semibold">{{
              t("kingdom.info.p1.strong")
            }}</span>
            {{ t("kingdom.info.p1.rest") }}
          </p>
          <p
            class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
          >
            {{ t("kingdom.info.p2") }}
            <span class="text-paladin-gold font-semibold">{{
              kingdomStats.power
            }}</span>
            {{ t("kingdom.info.p2.power") }}
            <span class="text-blood-red font-semibold">{{
              kingdomStats.alliances
            }}</span>
            {{ t("kingdom.info.p2.alliances") }}
          </p>
        </div>
      </div>

      <!-- Kingdom Rules & Information -->
      <div
        class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu"
        style="transform: translateZ(40px)"
      >
        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-paladin-gold text-center mb-6 md:mb-8"
            style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
          >
            {{ t("kingdom.rules.title") }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div
              v-for="(rule, index) in kingdomRules"
              :key="index"
              class="flex items-start gap-3"
            >
              <div class="flex-shrink-0">
                <div
                  class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold/10 rounded-full flex items-center justify-center border-2 border-paladin-gold/40"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-paladin-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h4
                  class="text-base sm:text-lg font-bold text-paladin-gold mb-1"
                >
                  {{ rule.title }}
                </h4>
                <p class="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {{ rule.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Blood Paladins' Role in Kingdom -->
      <div
        class="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-14 transform-gpu"
        style="transform: translateZ(40px)"
      >
        <div
          class="bg-gradient-to-br from-blood-red/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/40 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-blood-red text-center mb-4 sm:mb-6"
            style="text-shadow: 0 0 30px rgba(220, 20, 60, 0.3)"
          >
            {{ t("kingdom.role.title") }}
          </h3>
          <div class="space-y-4 sm:space-y-6">
            <p
              class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center"
            >
              <span class="text-blood-red font-bold">Blood Paladins</span>
              {{ t("kingdom.role.p1") }}
              <span class="text-paladin-gold font-semibold">{{
                t("kingdom.role.p1.crucial")
              }}</span>
              {{ t("kingdom.role.p1.end") }}
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              {{ t("kingdom.role.p2") }}
            </p>
            <div
              class="bg-gradient-to-br from-paladin-gold/10 via-transparent to-paladin-gold/10 border-l-4 border-paladin-gold pl-4 sm:pl-6 py-4 rounded-r-lg"
            >
              <p
                class="text-base sm:text-lg md:text-xl text-paladin-gold font-semibold leading-relaxed text-center mb-2"
              >
                {{ t("kingdom.role.quote") }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pryda's Key Role -->
      <div
        class="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-14 transform-gpu"
        style="transform: translateZ(40px)"
      >
        <div
          class="bg-gradient-to-br from-paladin-gold/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/40 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-paladin-gold text-center mb-4 sm:mb-6"
            style="text-shadow: 0 0 30px rgba(255, 215, 0, 0.3)"
          >
            {{ t("kingdom.pryda.title") }}
          </h3>
          <div class="space-y-4 sm:space-y-6">
            <p
              class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center"
            >
              <span class="text-blood-red font-bold">Pryda</span
              >{{ t("kingdom.pryda.p1") }}
              <span class="text-paladin-gold font-semibold">{{
                t("kingdom.pryda.p1.key")
              }}</span>
              {{ t("kingdom.pryda.p1.end") }}
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              {{ t("kingdom.pryda.p2") }}
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              {{ t("kingdom.pryda.p3") }}
            </p>
            <div
              class="bg-gradient-to-br from-blood-red/10 via-transparent to-blood-red/10 border-l-4 border-blood-red pl-4 sm:pl-6 py-4 rounded-r-lg"
            >
              <p
                class="text-base sm:text-lg md:text-xl text-blood-red font-semibold leading-relaxed text-center"
              >
                {{ t("kingdom.pryda.quote") }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Kingdom Story & Vision -->
      <div
        class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu"
        style="transform: translateZ(40px)"
      >
        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blood-red text-center mb-6 md:mb-8"
            style="text-shadow: 0 0 40px rgba(220, 20, 60, 0.4)"
          >
            {{ t("kingdom.story.title") }}
          </h3>
          <div class="space-y-4 sm:space-y-6">
            <p
              class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center"
            >
              {{ t("kingdom.story.p1") }}
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              {{ t("kingdom.story.p2") }}
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              {{ t("kingdom.story.p3") }}
            </p>
          </div>
        </div>
      </div>

      <!-- Leading Alliances -->
      <div class="max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <h3
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-paladin-gold text-center mb-8 md:mb-10 lg:mb-12"
          style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
        >
          {{ t("kingdom.alliances.title") }}
        </h3>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <div
            v-for="(alliance, index) in leadingAlliances"
            :key="index"
            class="bg-gradient-to-br from-paladin-gold/10 via-dark-surface/70 to-dark-surface/70 backdrop-blur-sm border border-paladin-gold/30 rounded-xl p-5 sm:p-6 shadow-lg hover:border-paladin-gold/50 transition-all duration-300"
          >
            <h4
              class="text-lg sm:text-xl font-bold text-paladin-gold mb-2 text-center"
            >
              {{ alliance.name }}
            </h4>
            <p
              class="text-xs sm:text-sm text-text-muted text-center leading-relaxed"
            >
              {{ alliance.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Why Join This Kingdom -->
      <div class="max-w-6xl mx-auto">
        <div class="transform-gpu" style="transform: translateZ(40px)">
          <div
            class="bg-gradient-to-br from-paladin-gold/10 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/30 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl"
          >
            <h3
              class="text-2xl sm:text-3xl md:text-4xl font-bold text-paladin-gold text-center mb-4 sm:mb-6"
              style="text-shadow: 0 0 30px rgba(255, 215, 0, 0.3)"
            >
              {{ t("kingdom.why.title") }}
            </h3>
            <div class="space-y-4">
              <div
                v-for="(reason, index) in whyJoinKingdom"
                :key="index"
                class="flex items-start gap-4"
              >
                <div class="flex-shrink-0">
                  <div
                    class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold/10 rounded-full flex items-center justify-center border-2 border-paladin-gold/40"
                  >
                    <span
                      class="text-paladin-gold font-bold text-lg sm:text-xl"
                      >{{ index + 1 }}</span
                    >
                  </div>
                </div>
                <div class="flex-1">
                  <h4
                    class="text-base sm:text-lg font-bold text-paladin-gold mb-2"
                  >
                    {{ reason.title }}
                  </h4>
                  <p
                    class="text-sm sm:text-base text-text-muted leading-relaxed"
                  >
                    {{ reason.description }}
                  </p>
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

const kingdomStats = {
  number: "XXXX", // Update with actual kingdom number
  power: "XXXB", // Update with actual kingdom power (e.g., "150B", "200B")
  alliances: "XX", // Update with actual number of alliances
  members: "XXXK", // Update with actual number of members (e.g., "50K", "100K")
};

const kingdomRules = computed(() => [
  {
    title: t.value("kingdom.rules.respect.title"),
    description: t.value("kingdom.rules.respect.desc"),
  },
  {
    title: t.value("kingdom.rules.active.title"),
    description: t.value("kingdom.rules.active.desc"),
  },
  {
    title: t.value("kingdom.rules.coordination.title"),
    description: t.value("kingdom.rules.coordination.desc"),
  },
  {
    title: t.value("kingdom.rules.territory.title"),
    description: t.value("kingdom.rules.territory.desc"),
  },
  {
    title: t.value("kingdom.rules.communication.title"),
    description: t.value("kingdom.rules.communication.desc"),
  },
  {
    title: t.value("kingdom.rules.unity.title"),
    description: t.value("kingdom.rules.unity.desc"),
  },
]);

const leadingAlliances = computed(() => [
  {
    name: t.value("kingdom.alliances.blood.name"),
    description: t.value("kingdom.alliances.blood.desc"),
  },
  {
    name: t.value("kingdom.alliances.guardians.name"),
    description: t.value("kingdom.alliances.guardians.desc"),
  },
  {
    name: t.value("kingdom.alliances.warrior.name"),
    description: t.value("kingdom.alliances.warrior.desc"),
  },
  {
    name: t.value("kingdom.alliances.royal.name"),
    description: t.value("kingdom.alliances.royal.desc"),
  },
  {
    name: t.value("kingdom.alliances.shadow.name"),
    description: t.value("kingdom.alliances.shadow.desc"),
  },
  {
    name: t.value("kingdom.alliances.iron.name"),
    description: t.value("kingdom.alliances.iron.desc"),
  },
]);

const whyJoinKingdom = computed(() => [
  {
    title: t.value("kingdom.why.leadership.title"),
    description: t.value("kingdom.why.leadership.desc"),
  },
  {
    title: t.value("kingdom.why.community.title"),
    description: t.value("kingdom.why.community.desc"),
  },
  {
    title: t.value("kingdom.why.territory.title"),
    description: t.value("kingdom.why.territory.desc"),
  },
  {
    title: t.value("kingdom.why.network.title"),
    description: t.value("kingdom.why.network.desc"),
  },
  {
    title: t.value("kingdom.why.growth.title"),
    description: t.value("kingdom.why.growth.desc"),
  },
  {
    title: t.value("kingdom.why.honor.title"),
    description: t.value("kingdom.why.honor.desc"),
  },
]);
</script>

<style scoped>
.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}
</style>
