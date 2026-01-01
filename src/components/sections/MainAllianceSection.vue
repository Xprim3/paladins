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
      <div class="text-center mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(50px)">
        <h2
          class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blood-red mb-4 drop-shadow-2xl"
          style="text-shadow: 0 0 60px rgba(220, 20, 60, 0.5)"
        >
          Blood Paladins
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-paladin-gold font-semibold mb-4">
          Main Alliance
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-paladin-gold to-transparent mx-auto"></div>
      </div>

      <!-- Alliance Overview -->
      <div class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(40px)">
        <div
          class="bg-gradient-to-br from-dark-surface/90 via-dark-surface/70 to-dark-surface/90 backdrop-blur-md border-2 border-blood-red/30 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
        >
          <p
            class="text-lg sm:text-xl md:text-2xl text-text-light leading-relaxed text-center mb-6"
          >
            The <span class="text-blood-red font-bold">heart</span> and 
            <span class="text-paladin-gold font-bold">soul</span> of our family. 
            This is where our most experienced warriors, strategic minds, and dedicated leaders 
            unite to forge an unbreakable force.
          </p>
          <p
            class="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed text-center"
          >
            Blood Paladins Main Alliance represents the pinnacle of our family's strength—a brotherhood 
            of elite warriors bound by honor, loyalty, and an unwavering commitment to excellence. 
            Here, every member is a guardian, every officer a protector, and every decision made 
            with the family's future in mind.
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
          Leadership Structure
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
              <h4 class="text-2xl sm:text-3xl md:text-4xl font-bold text-blood-red mb-2">
                Pryda
              </h4>
              <p class="text-paladin-gold font-semibold text-lg sm:text-xl mb-6">Leader</p>
              
              <div class="mt-6 space-y-4">
                <h5 class="text-xl sm:text-2xl font-bold text-text-light mb-4">Duties & Responsibilities</h5>
                <ul class="text-left max-w-2xl mx-auto space-y-3 text-text-muted">
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>Ultimate decision-making authority and strategic direction for the alliance</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>Oversees all alliance operations, events, and member activities</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>Sets the vision, values, and culture of Blood Paladins</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>Coordinates with officers to ensure smooth operations and member support</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>Represents the alliance in kingdom-wide matters and diplomacy</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blood-red mr-3 mt-1">•</span>
                    <span>Ensures every member feels valued, protected, and part of the family</span>
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
            Officers
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                  <h5 class="text-xl sm:text-2xl font-bold text-paladin-gold mb-2">
                    {{ officer.name }}
                  </h5>
                  <p class="text-blood-red font-semibold text-sm sm:text-base mb-4">
                    {{ officer.role }}
                  </p>
                </div>

                <div class="space-y-2">
                  <h6 class="text-sm font-bold text-text-light mb-2">Duties:</h6>
                  <ul class="text-xs sm:text-sm text-text-muted space-y-1.5">
                    <li v-for="(duty, dutyIndex) in officer.duties" :key="dutyIndex" class="flex items-start">
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
      <div class="max-w-6xl mx-auto transform-gpu" style="transform: translateZ(40px)">
        <h3
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-paladin-gold text-center mb-8 sm:mb-12"
          style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
        >
          Member Duties & Responsibilities
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
                <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold/10 rounded-full flex items-center justify-center border-2 border-paladin-gold/40">
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
                <h4 class="text-lg sm:text-xl md:text-2xl font-bold text-paladin-gold mb-2 sm:mb-3">
                  {{ responsibility.title }}
                </h4>
                <p class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed">
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
import { onMounted } from "vue";

const officers = [
  {
    name: "LundiX",
    role: "Counselor",
    duties: [
      "Assists leader in strategic decisions",
      "Manages alliance operations daily",
      "Supports member growth and development",
      "Coordinates events and activities",
      "Acts as highest officer authority",
    ],
  },
  {
    name: "Aetherius",
    role: "Strategic Commander",
    duties: [
      "Develops battle strategies",
      "Coordinates war efforts",
      "Analyzes enemy movements",
      "Plans tactical operations",
      "Leads strategic planning sessions",
    ],
  },
  {
    name: "Valorius",
    role: "Battle Coordinator",
    duties: [
      "Organizes alliance battles",
      "Manages rally coordination",
      "Ensures member participation",
      "Tracks battle performance",
      "Coordinates attack formations",
    ],
  },
  {
    name: "Sanguis",
    role: "Alliance Advisor",
    duties: [
      "Provides strategic counsel",
      "Mediates member conflicts",
      "Advises on alliance matters",
      "Supports decision-making",
      "Guides alliance policies",
    ],
  },
  {
    name: "Crimson",
    role: "Tactical Specialist",
    duties: [
      "Executes tactical operations",
      "Manages resource allocation",
      "Optimizes alliance efficiency",
      "Handles special missions",
      "Implements strategic plans",
    ],
  },
  {
    name: "Aurelius",
    role: "Recruitment Officer",
    duties: [
      "Screens new members",
      "Onboards recruits",
      "Maintains member database",
      "Ensures quality standards",
      "Manages recruitment process",
    ],
  },
  {
    name: "Ignis",
    role: "Training Master",
    duties: [
      "Trains new members",
      "Develops training programs",
      "Mentors alliance members",
      "Improves member skills",
      "Conducts skill assessments",
    ],
  },
  {
    name: "Guardian",
    role: "Protection Officer",
    duties: [
      "Protects alliance members",
      "Monitors threats",
      "Ensures member safety",
      "Manages security protocols",
      "Responds to emergencies",
    ],
  },
];

const memberResponsibilities = [
  {
    title: "Active Participation",
    description:
      "Regular participation in alliance events, battles, and activities. Your presence and engagement strengthen our family. Attend scheduled events, respond to rally calls, and contribute to alliance goals.",
  },
  {
    title: "Honor & Respect",
    description:
      "Treat every member with honor and respect. Uphold our values in all interactions, both within and outside the alliance. Show dignity to all warriors, regardless of their power or experience.",
  },
  {
    title: "Loyalty & Commitment",
    description:
      "Remain loyal to Blood Paladins and committed to our shared goals. Stand with your family through victories and challenges. Your loyalty is the foundation of our strength.",
  },
  {
    title: "Communication",
    description:
      "Maintain open communication with leaders and officers. Report issues, share ideas, and stay connected with the family. Keep leaders informed of your availability and any concerns.",
  },
  {
    title: "Growth & Development",
    description:
      "Continuously work on improving your skills and power. Support fellow members in their growth journey. Help train new members and share knowledge with the family.",
  },
  {
    title: "Sacrifice & Support",
    description:
      "Be willing to support your family members when needed. Remember: we fight together, we stand together, we die for each other. Put the family's needs above personal gain.",
  },
  {
    title: "Resource Management",
    description:
      "Manage your resources wisely and contribute to alliance needs when possible. Support resource gathering efforts and share excess resources with members in need.",
  },
  {
    title: "Battle Readiness",
    description:
      "Maintain your armies and commanders in battle-ready condition. Respond promptly to battle calls and follow strategic instructions during combat operations.",
  },
];

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
        element.style.transform = `translateZ(30px) rotateY(${xPos * 0.05}deg) rotateX(${-yPos * 0.05}deg)`;
      }

      const officerCards = mainAllianceSection.querySelectorAll(".officer-card");
      officerCards.forEach((card, index) => {
        const element = card as HTMLElement;
        const delay = (index % 4) * 0.05;
        element.style.transform = `translateZ(20px) rotateY(${xPos * 0.03 + delay}deg) rotateX(${-yPos * 0.03}deg)`;
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
