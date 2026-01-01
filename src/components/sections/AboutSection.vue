<template>
  <section
    id="about"
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
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-blood-red/5 rounded-full blur-3xl transform-gpu animate-float-1"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-paladin-gold/5 rounded-full blur-3xl transform-gpu animate-float-2"
      ></div>

      <!-- 3D Geometric Shapes -->
      <div
        class="absolute top-1/3 right-1/3 w-40 h-40 transform-gpu animate-rotate-3d"
      >
        <div
          class="w-full h-full border-2 border-blood-red/20 rotate-45 transform-gpu"
          style="transform: rotateX(60deg) rotateY(45deg)"
        ></div>
      </div>
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
          {{ t('about.title') }}
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-transparent via-paladin-gold to-transparent mx-auto"
        ></div>
      </div>

      <!-- Pryda's Legacy Section -->
      <div
        class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu"
        style="transform: translateZ(40px)"
      >
        <div class="relative">
          <!-- Background Glow Effect -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-blood-red/10 via-transparent to-paladin-gold/10 rounded-3xl blur-3xl"
          ></div>

          <!-- Main Content Card -->
          <div
            class="relative bg-gradient-to-br from-dark-surface/90 via-dark-surface/70 to-dark-surface/90 backdrop-blur-md border-2 border-blood-red/30 rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 shadow-2xl"
          >
            <!-- Legacy Story -->
            <div class="space-y-6 sm:space-y-8">
              <p
                class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
              >
                <span
                  class="text-blood-red font-semibold text-lg sm:text-xl md:text-2xl"
                  >Pryda</span
                >
                and
                <span
                  class="text-paladin-gold font-semibold text-lg sm:text-xl md:text-2xl"
                  >LundiX</span
                >
                {{ t('about.legacy.p1') }}
              </p>

              <p
                class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
              >
                {{ t('about.legacy.p2') }}
                <span class="text-paladin-gold font-semibold">{{ t('about.legacy.p2.family') }}</span>
                {{ t('about.legacy.p2.rest') }}
              </p>

              <div
                class="my-8 sm:my-10 border-l-4 border-paladin-gold pl-6 sm:pl-8 py-4 bg-paladin-gold/5 rounded-r-lg"
              >
                <p
                  class="text-lg sm:text-xl md:text-2xl text-paladin-gold font-semibold leading-relaxed italic mb-3"
                >
                  "{{ t('about.legacy.quote') }}"
                </p>
                <p class="text-sm sm:text-base text-text-muted">
                  {{ t('about.legacy.quote.by') }}
                </p>
              </div>

              <p
                class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
              >
                {{ t('about.legacy.p3') }}
                <span class="text-blood-red font-semibold">Pryda</span> and
                <span class="text-paladin-gold font-semibold">LundiX</span>
                {{ t('about.legacy.p3.lead') }}
                <span class="text-text-light font-semibold"
                  >{{ t('about.legacy.p3.members') }} </span
                >{{ t('about.legacy.p3.end') }}
              </p>

              <p
                class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
              >
                {{ t('about.legacy.p4') }}
              </p>

              <div
                class="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-blood-red/40"
              >
                <p
                  class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center mb-4"
                >
                  <span class="text-blood-red font-semibold">Pryda</span>,
                  <span class="text-paladin-gold font-semibold">LundiX</span>,
                  {{ t('about.legacy.p5') }}
                </p>
                <p
                  class="text-xl sm:text-2xl md:text-3xl text-paladin-gold font-bold text-center leading-relaxed"
                  style="text-shadow: 0 0 20px rgba(255, 215, 0, 0.4)"
                >
                  <br />
                  {{ t('about.legacy.p6') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Leaders Section -->
      <div class="max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24">
        <h3
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-paladin-gold text-center mb-12 sm:mb-16 transform-gpu"
          style="
            transform: translateZ(50px);
            text-shadow: 0 0 40px rgba(255, 215, 0, 0.4);
          "
        >
          {{ t('about.leaders.title') }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <!-- Leader: Pryda -->
          <div
            class="leader-card transform-gpu perspective-1000"
            style="transform-style: preserve-3d"
          >
            <div
              class="bg-gradient-to-br from-blood-red/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/30 rounded-2xl p-8 sm:p-10 shadow-2xl hover:border-blood-red/60 transition-all duration-500 hover:shadow-blood-red/30"
              style="transform: translateZ(30px)"
            >
              <div class="text-center mb-6">
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
                <h4 class="text-2xl sm:text-3xl font-bold text-blood-red mb-2">
                  {{ t('about.leaders.pryda.name') }}
                </h4>
                <p
                  class="text-paladin-gold font-semibold text-lg sm:text-xl mb-4"
                >
                  {{ t('about.leaders.pryda.role') }}
                </p>
              </div>
              <p
                class="text-text-muted text-sm sm:text-base leading-relaxed text-center"
              >
                {{ t('about.leaders.pryda.desc') }}
              </p>
            </div>
          </div>

          <!-- Co-Leader: LundiX -->
          <div
            class="leader-card transform-gpu perspective-1000"
            style="transform-style: preserve-3d"
          >
            <div
              class="bg-gradient-to-br from-paladin-gold/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/30 rounded-2xl p-8 sm:p-10 shadow-2xl hover:border-paladin-gold/60 transition-all duration-500 hover:shadow-paladin-gold/30"
              style="transform: translateZ(30px)"
            >
              <div class="text-center mb-6">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4
                  class="text-2xl sm:text-3xl font-bold text-paladin-gold mb-2"
                >
                  {{ t('about.leaders.lundix.name') }}
                </h4>
                <p class="text-blood-red font-semibold text-lg sm:text-xl mb-4">
                  {{ t('about.leaders.lundix.role') }}
                </p>
              </div>
              <p
                class="text-text-muted text-sm sm:text-base leading-relaxed text-center"
              >
                {{ t('about.leaders.lundix.desc') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Key People Section -->
      <div class="max-w-7xl mx-auto mb-12 sm:mb-16">
        <h3
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-paladin-gold text-center mb-12 sm:mb-16 transform-gpu"
          style="
            transform: translateZ(50px);
            text-shadow: 0 0 40px rgba(255, 215, 0, 0.4);
          "
        >
          {{ t('about.members.title') }}
        </h3>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <!-- Key Person 1 -->
          <div
            v-for="(person, index) in keyPeople"
            :key="index"
            class="key-person-card transform-gpu"
            style="transform-style: preserve-3d"
          >
            <div
              class="bg-dark-surface/60 backdrop-blur-sm border border-dark-border rounded-xl p-6 sm:p-8 text-center hover:border-paladin-gold/50 hover:bg-dark-surface/80 transition-all duration-500 shadow-xl hover:shadow-paladin-gold/20"
              style="transform: translateZ(20px)"
            >
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-blood-red/20 to-paladin-gold/20 rounded-full flex items-center justify-center border-2 border-paladin-gold/30"
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h4 class="text-xl sm:text-2xl font-bold text-text-light mb-2">
                {{ person.name }}
              </h4>
              <p class="text-sm sm:text-base text-text-muted">
                {{ person.role }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mission & Vision Section -->
      <div class="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        <!-- Vision Section -->
        <div class="transform-gpu" style="transform: translateZ(40px)">
          <div
            class="bg-gradient-to-br from-paladin-gold/10 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/30 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 shadow-2xl"
          >
            <h3
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-paladin-gold mb-6 sm:mb-8 text-center"
              style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.5)"
            >
              {{ t('about.vision.title') }}
            </h3>
            <div class="space-y-6 sm:space-y-8">
              <p
                class="text-lg sm:text-xl md:text-2xl text-text-light leading-relaxed text-center italic"
              >
                "{{ t('about.vision.quote') }}
                <span class="text-paladin-gold font-bold">{{ t('about.vision.quote.eternal') }}</span>{{ t('about.vision.quote.end') }}"
              </p>

              <p
                class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
              >
                {{ t('about.vision.p1') }}
              </p>

              <p
                class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
              >
                {{ t('about.vision.p2') }}
                <span class="text-paladin-gold font-semibold"
                  >{{ t('about.vision.p2.lives') }}</span
                >{{ t('about.vision.p2.rest') }}
                <span class="text-blood-red font-semibold">{{ t('about.vision.p2.loved') }}</span>{{ t('about.vision.p2.end') }}
              </p>

              <div
                class="my-6 sm:my-8 border-l-4 border-paladin-gold pl-6 sm:pl-8 py-4 bg-paladin-gold/5 rounded-r-lg"
              >
                <p
                  class="text-lg sm:text-xl md:text-2xl text-paladin-gold font-semibold leading-relaxed"
                >
                  {{ t('about.vision.p3') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mission Section -->
        <div class="transform-gpu" style="transform: translateZ(40px)">
          <div
            class="bg-gradient-to-br from-blood-red/10 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/30 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 shadow-2xl"
          >
            <h3
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-blood-red mb-6 sm:mb-8 text-center"
              style="text-shadow: 0 0 40px rgba(220, 20, 60, 0.5)"
            >
              {{ t('about.mission.title') }}
            </h3>
            <div class="space-y-6 sm:space-y-8">
              <p
                class="text-lg sm:text-xl md:text-2xl text-text-light leading-relaxed text-center"
              >
                {{ t('about.mission.p1') }}
                <span class="text-blood-red font-bold">{{ t('about.mission.p1.family') }}</span>
                {{ t('about.mission.p1.end') }}
              </p>

              <p
                class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
              >
                {{ t('about.mission.p2') }}
              </p>

              <p
                class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
              >
                {{ t('about.mission.p3') }}
                <span class="text-paladin-gold font-semibold italic"
                  >"{{ t('about.mission.p3.quote') }}"</span
                >
                {{ t('about.mission.p3.rest') }}
                <span class="text-blood-red font-bold">{{ t('about.mission.p3.die') }}</span>
                {{ t('about.mission.p3.end') }}
              </p>

              <p
                class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
              >
                {{ t('about.mission.p4') }}
              </p>

              <div
                class="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-blood-red/40"
              >
                <p
                  class="text-xl sm:text-2xl md:text-3xl text-blood-red font-bold text-center leading-relaxed mb-4"
                  style="text-shadow: 0 0 30px rgba(220, 20, 60, 0.4)"
                >
                  {{ t('about.mission.p5') }}
                </p>
                <p
                  class="text-xl sm:text-2xl md:text-3xl text-paladin-gold font-bold text-center leading-relaxed"
                  style="text-shadow: 0 0 30px rgba(255, 215, 0, 0.4)"
                >
                  {{ t('about.mission.p6') }}
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
        v-for="i in 15"
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

const keyPeople = computed(() => [
  { name: "Aetherius", role: t.value('about.members.aetherius.role') },
  { name: "Valorius", role: t.value('about.members.valorius.role') },
  { name: "Sanguis", role: t.value('about.members.sanguis.role') },
  { name: "Crimson", role: t.value('about.members.crimson.role') },
  { name: "Aurelius", role: t.value('about.members.aurelius.role') },
  { name: "Ignis", role: t.value('about.members.ignis.role') },
]);

onMounted(() => {
  // Add 3D parallax effect on mouse move
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 15;
      const yPos = (clientY / innerHeight - 0.5) * 15;

      const leaderCards = aboutSection.querySelectorAll(".leader-card");
      leaderCards.forEach((card, index) => {
        const element = card as HTMLElement;
        const delay = index * 0.1;
        element.style.transform = `translateZ(30px) rotateY(${
          xPos * 0.05 + delay
        }deg) rotateX(${-yPos * 0.05}deg)`;
      });

      const keyPersonCards = aboutSection.querySelectorAll(".key-person-card");
      keyPersonCards.forEach((card, index) => {
        const element = card as HTMLElement;
        const delay = (index % 3) * 0.05;
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

@keyframes rotate-3d {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg) translateZ(0);
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

.animate-rotate-3d {
  animation: rotate-3d 30s linear infinite;
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
