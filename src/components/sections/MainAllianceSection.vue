<template>
  <section
    id="main-alliance"
    class="relative min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden bg-dark-bg"
  >
    <!-- 3D Cinematic Background -->
    <div class="absolute inset-0 perspective-1000">
      <!-- Gradient Layers -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-blood-red-dark/20 via-transparent to-paladin-gold/15 transform-gpu"
      ></div>

      <!-- Floating Orbs -->
      <div
        class="absolute top-1/4 right-1/4 w-96 h-96 bg-blood-red/5 rounded-full blur-3xl transform-gpu animate-float-1"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-paladin-gold/5 rounded-full blur-3xl transform-gpu animate-float-2"
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
          class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blood-red mb-4 drop-shadow-2xl"
          style="text-shadow: 0 0 60px rgba(220, 20, 60, 0.5)"
        >
          {{ t("main.alliance.title") }}
        </h2>
        <p
          class="text-xl sm:text-2xl md:text-3xl text-paladin-gold font-semibold mb-4"
        >
          {{ t("main.alliance.subtitle") }}
        </p>
        <div
          class="w-24 h-1 bg-gradient-to-r from-transparent via-paladin-gold to-transparent mx-auto"
        ></div>
      </div>

      <!-- Alliance Overview -->
      <div
        class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu"
        style="transform: translateZ(40px)"
      >
        <div
          class="bg-gradient-to-br from-dark-surface/90 via-dark-surface/70 to-dark-surface/90 backdrop-blur-md border-2 border-blood-red/30 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
        >
          <p
            class="text-lg sm:text-xl md:text-2xl text-text-light leading-relaxed text-center mb-6"
          >
            {{ t("main.alliance.overview.p1") }}
            <span class="text-blood-red font-bold">{{
              t("main.alliance.overview.p1.heart")
            }}</span>
            {{ t("main.alliance.overview.p1.and") }}
            <span class="text-paladin-gold font-bold">{{
              t("main.alliance.overview.p1.soul")
            }}</span>
            {{ t("main.alliance.overview.p1.end") }}
          </p>
          <p
            class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
          >
            {{ t("main.alliance.overview.p2") }}
          </p>
        </div>
      </div>

      <!-- Leadership Structure -->
      <div class="max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <h3
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-paladin-gold text-center mb-8 md:mb-10 lg:mb-12 transform-gpu"
          style="
            transform: translateZ(50px);
            text-shadow: 0 0 40px rgba(255, 215, 0, 0.4);
          "
        >
          {{ t("main.alliance.leadership.title") }}
        </h3>

        <!-- Leader -->
        <div class="mb-12 sm:mb-16">
          <div
            class="max-w-4xl mx-auto bg-gradient-to-br from-blood-red/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/30 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl transform-gpu leader-card"
            style="transform-style: preserve-3d"
          >
            <div class="text-center">
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
              <h4
                class="text-2xl sm:text-3xl md:text-4xl font-bold text-blood-red mb-2"
              >
                {{ t("main.alliance.leader.name") }}
              </h4>
              <p
                class="text-paladin-gold font-semibold text-lg sm:text-xl mb-6"
              >
                {{ t("main.alliance.leader.role") }}
              </p>

              <div class="mt-6 space-y-4">
                <h5 class="text-xl sm:text-2xl font-bold text-text-light mb-4">
                  {{ t("main.alliance.leader.duties.title") }}
                </h5>
                <ul
                  class="text-left max-w-2xl mx-auto space-y-3 text-text-muted"
                >
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>{{ t("main.alliance.leader.duty1") }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>{{ t("main.alliance.leader.duty2") }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>{{ t("main.alliance.leader.duty3") }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>{{ t("main.alliance.leader.duty4") }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>{{ t("main.alliance.leader.duty5") }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>{{ t("main.alliance.leader.duty6") }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Officers -->
        <div>
          <h4
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-paladin-gold text-center mb-8 sm:mb-12"
          >
            {{ t("main.alliance.officers.title") }}
          </h4>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            <div
              v-for="(officer, index) in officers"
              :key="index"
              class="officer-card transform-gpu"
              style="transform-style: preserve-3d"
            >
              <div
                class="bg-gradient-to-br from-paladin-gold/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/30 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-paladin-gold/60 transition-all duration-500"
                style="transform: translateZ(20px)"
              >
                <div class="text-center mb-4">
                  <div
                    class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-paladin-gold/30 to-paladin-gold-dark/30 rounded-full flex items-center justify-center border-2 border-paladin-gold/50 shadow-lg"
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h5
                    class="text-xl sm:text-2xl font-bold text-paladin-gold mb-2"
                  >
                    {{ officer.name }}
                  </h5>
                  <p
                    class="text-blood-red font-semibold text-sm sm:text-base mb-4"
                  >
                    {{ officer.role }}
                  </p>
                </div>

                <div class="space-y-2">
                  <h6 class="text-sm font-bold text-text-light mb-2">
                    {{ t("main.alliance.officers.duties") }}
                  </h6>
                  <ul class="text-xs sm:text-sm text-text-muted space-y-1.5">
                    <li
                      v-for="(duty, dutyIndex) in officer.duties"
                      :key="dutyIndex"
                      class="flex items-start"
                    >
                      <span class="text-paladin-gold mr-2 mt-0.5">•</span>
                      <span>{{ duty }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Member Responsibilities -->
      <div
        class="max-w-6xl mx-auto transform-gpu"
        style="transform: translateZ(40px)"
      >
        <h3
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-paladin-gold text-center mb-8 sm:mb-12"
          style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
        >
          {{ t("main.alliance.members.title") }}
        </h3>

        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/30 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
        >
          <div class="space-y-6 sm:space-y-8">
            <div
              v-for="(responsibility, index) in memberResponsibilities"
              :key="index"
              class="flex items-start gap-4 sm:gap-6"
            >
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold/10 rounded-full flex items-center justify-center border-2 border-paladin-gold/40"
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h4
                  class="text-lg sm:text-xl md:text-2xl font-bold text-paladin-gold mb-2 sm:mb-3"
                >
                  {{ responsibility.title }}
                </h4>
                <p
                  class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed"
                >
                  {{ responsibility.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Particle Effects -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        v-for="i in 10"
        :key="i"
        class="absolute w-1 h-1 bg-paladin-gold rounded-full opacity-20 animate-particle"
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
import { onMounted, computed } from "vue";
import { useI18n } from "@/composables/useI18n";

const { t } = useI18n();

const officers = computed(() => [
  {
    name: "LundiX",
    role: t.value("main.alliance.officer.lundix.role"),
    duties: [
      t.value("main.alliance.officer.lundix.duty1"),
      t.value("main.alliance.officer.lundix.duty2"),
      t.value("main.alliance.officer.lundix.duty3"),
      t.value("main.alliance.officer.lundix.duty4"),
      t.value("main.alliance.officer.lundix.duty5"),
    ],
  },
  {
    name: "Aetherius",
    role: t.value("main.alliance.officer.aetherius.role"),
    duties: [
      t.value("main.alliance.officer.aetherius.duty1"),
      t.value("main.alliance.officer.aetherius.duty2"),
      t.value("main.alliance.officer.aetherius.duty3"),
      t.value("main.alliance.officer.aetherius.duty4"),
      t.value("main.alliance.officer.aetherius.duty5"),
    ],
  },
  {
    name: "Valorius",
    role: t.value("main.alliance.officer.valorius.role"),
    duties: [
      t.value("main.alliance.officer.valorius.duty1"),
      t.value("main.alliance.officer.valorius.duty2"),
      t.value("main.alliance.officer.valorius.duty3"),
      t.value("main.alliance.officer.valorius.duty4"),
      t.value("main.alliance.officer.valorius.duty5"),
    ],
  },
  {
    name: "Sanguis",
    role: t.value("main.alliance.officer.sanguis.role"),
    duties: [
      t.value("main.alliance.officer.sanguis.duty1"),
      t.value("main.alliance.officer.sanguis.duty2"),
      t.value("main.alliance.officer.sanguis.duty3"),
      t.value("main.alliance.officer.sanguis.duty4"),
      t.value("main.alliance.officer.sanguis.duty5"),
    ],
  },
  {
    name: "Crimson",
    role: t.value("main.alliance.officer.crimson.role"),
    duties: [
      t.value("main.alliance.officer.crimson.duty1"),
      t.value("main.alliance.officer.crimson.duty2"),
      t.value("main.alliance.officer.crimson.duty3"),
      t.value("main.alliance.officer.crimson.duty4"),
      t.value("main.alliance.officer.crimson.duty5"),
    ],
  },
  {
    name: "Aurelius",
    role: t.value("main.alliance.officer.aurelius.role"),
    duties: [
      t.value("main.alliance.officer.aurelius.duty1"),
      t.value("main.alliance.officer.aurelius.duty2"),
      t.value("main.alliance.officer.aurelius.duty3"),
      t.value("main.alliance.officer.aurelius.duty4"),
      t.value("main.alliance.officer.aurelius.duty5"),
    ],
  },
  {
    name: "Ignis",
    role: t.value("main.alliance.officer.ignis.role"),
    duties: [
      t.value("main.alliance.officer.ignis.duty1"),
      t.value("main.alliance.officer.ignis.duty2"),
      t.value("main.alliance.officer.ignis.duty3"),
      t.value("main.alliance.officer.ignis.duty4"),
      t.value("main.alliance.officer.ignis.duty5"),
    ],
  },
  {
    name: "Guardian",
    role: t.value("main.alliance.officer.guardian.role"),
    duties: [
      t.value("main.alliance.officer.guardian.duty1"),
      t.value("main.alliance.officer.guardian.duty2"),
      t.value("main.alliance.officer.guardian.duty3"),
      t.value("main.alliance.officer.guardian.duty4"),
      t.value("main.alliance.officer.guardian.duty5"),
    ],
  },
]);

const memberResponsibilities = computed(() => [
  {
    title: t.value("main.alliance.member.active.title"),
    description: t.value("main.alliance.member.active.desc"),
  },
  {
    title: t.value("main.alliance.member.honor.title"),
    description: t.value("main.alliance.member.honor.desc"),
  },
  {
    title: t.value("main.alliance.member.loyalty.title"),
    description: t.value("main.alliance.member.loyalty.desc"),
  },
  {
    title: t.value("main.alliance.member.communication.title"),
    description: t.value("main.alliance.member.communication.desc"),
  },
  {
    title: t.value("main.alliance.member.growth.title"),
    description: t.value("main.alliance.member.growth.desc"),
  },
  {
    title: t.value("main.alliance.member.sacrifice.title"),
    description: t.value("main.alliance.member.sacrifice.desc"),
  },
  {
    title: t.value("main.alliance.member.resource.title"),
    description: t.value("main.alliance.member.resource.desc"),
  },
  {
    title: t.value("main.alliance.member.battle.title"),
    description: t.value("main.alliance.member.battle.desc"),
  },
]);

onMounted(() => {
  // Add 3D parallax effect on mouse move
  const mainAllianceSection = document.getElementById("main-alliance");
  if (mainAllianceSection) {
    mainAllianceSection.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 15;
      const yPos = (clientY / innerHeight - 0.5) * 15;

      const leaderCard = mainAllianceSection.querySelector(".leader-card");
      if (leaderCard) {
        const element = leaderCard as HTMLElement;
        element.style.transform = `translateZ(30px) rotateY(${
          xPos * 0.05
        }deg) rotateX(${-yPos * 0.05}deg)`;
      }

      const officerCards =
        mainAllianceSection.querySelectorAll(".officer-card");
      officerCards.forEach((card, index) => {
        const element = card as HTMLElement;
        const delay = (index % 4) * 0.05;
        element.style.transform = `translateZ(20px) rotateY(${
          xPos * 0.03 + delay
        }deg) rotateX(${-yPos * 0.03}deg)`;
      });
    });
  }
});
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

.animate-particle {
  animation: particle var(--duration, 5s) linear infinite;
}

.perspective-1000 {
  perspective: 1000px;
}

.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}
</style>
