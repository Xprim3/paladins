<template>
  <section
    id="farms"
    class="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-dark-bg"
  >
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-blood-red/8 via-transparent to-paladin-gold/8 transform-gpu"
      ></div>
      <div
        class="absolute top-1/3 left-1/4 w-72 h-72 bg-blood-red/5 rounded-full blur-3xl transform-gpu"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/4 w-64 h-64 bg-paladin-gold/5 rounded-full blur-3xl transform-gpu"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Main Heading -->
      <div class="text-center mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(50px)">
        <h2
          class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blood-red mb-4 drop-shadow-2xl"
          style="text-shadow: 0 0 60px rgba(220, 20, 60, 0.5)"
        >
          Farm Alliances
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-blood-red to-transparent mx-auto"></div>
      </div>

      <!-- Farms Description -->
      <div class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(40px)">
        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
        >
          <p
            class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center mb-4"
          >
            Our <span class="text-blood-red font-semibold">Farm Alliances</span> are the backbone of our family's 
            resource network. These alliances provide essential support to the main alliance through strategic 
            resource gathering and positioning.
          </p>
          <p
            class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
          >
            Every member of Blood Paladins can send their farms to one of our farm alliances. This allows for 
            organized resource management, strategic positioning, and ensures that our main alliance members 
            can focus on battles and events while farms are safely managed and productive.
          </p>
          <p
            class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center mt-4"
          >
            Beyond resource gathering, our farm alliances serve a crucial strategic role as 
            <span class="text-blood-red font-semibold">CF Bombs</span> during 
            <span class="text-paladin-gold font-semibold">KVK (Kingdom vs Kingdom)</span> events and other major operations. 
            These farms provide essential tactical support, strategic positioning, and operational flexibility 
            when the family needs them most.
          </p>
        </div>
      </div>

      <!-- Farm Alliances -->
      <div class="max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <!-- Farm 1 -->
          <div
            v-for="(farm, index) in farmAlliances"
            :key="index"
            class="transform-gpu"
            style="transform-style: preserve-3d"
          >
            <div
              class="bg-gradient-to-br from-blood-red/10 via-dark-surface/70 to-dark-surface/70 backdrop-blur-sm border border-blood-red/30 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-blood-red/50 transition-all duration-300 h-full"
              style="transform: translateZ(15px)"
            >
              <div class="text-center mb-4 sm:mb-6">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-blood-red/20 to-blood-red-dark/20 rounded-full flex items-center justify-center border-2 border-blood-red/40 shadow-lg"
                >
                  <svg
                    class="w-8 h-8 sm:w-10 sm:h-10 text-blood-red"
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
                <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-blood-red mb-2">
                  {{ farm.name }}
                </h3>
                <p class="text-paladin-gold font-semibold text-sm sm:text-base mb-4">
                  {{ farm.role }}
                </p>
              </div>

              <div class="space-y-3">
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-text-light mb-2">Purpose:</h4>
                  <p class="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {{ farm.purpose }}
                  </p>
                </div>
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-text-light mb-2">Benefits:</h4>
                  <ul class="text-xs sm:text-sm text-text-muted space-y-1.5">
                    <li v-for="(benefit, benefitIndex) in farm.benefits" :key="benefitIndex" class="flex items-start">
                      <span class="text-blood-red mr-1.5 mt-0.5">•</span>
                      <span>{{ benefit }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- How It Works -->
      <div class="max-w-5xl mx-auto transform-gpu" style="transform: translateZ(40px)">
        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-paladin-gold text-center mb-8 md:mb-10 lg:mb-12"
            style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
          >
            How It Works
          </h3>
          <div class="space-y-6 md:space-y-8">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold/10 rounded-full flex items-center justify-center border-2 border-paladin-gold/40">
                  <span class="text-paladin-gold font-bold text-lg sm:text-xl">1</span>
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-base sm:text-lg font-bold text-paladin-gold mb-2">
                  Send Your Farms
                </h4>
                <p class="text-sm sm:text-base text-text-muted leading-relaxed">
                  As a member of Blood Paladins, you can send your farm accounts to one of our farm alliances. 
                  This helps organize our resource network and keeps farms active and productive.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold/10 rounded-full flex items-center justify-center border-2 border-paladin-gold/40">
                  <span class="text-paladin-gold font-bold text-lg sm:text-xl">2</span>
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-base sm:text-lg font-bold text-paladin-gold mb-2">
                  Organized Management
                </h4>
                <p class="text-sm sm:text-base text-text-muted leading-relaxed">
                  Farm alliances are managed by dedicated officers who ensure farms are active, gathering resources, 
                  and contributing to the family's overall strength and strategic positioning.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold/10 rounded-full flex items-center justify-center border-2 border-paladin-gold/40">
                  <span class="text-paladin-gold font-bold text-lg sm:text-xl">3</span>
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-base sm:text-lg font-bold text-paladin-gold mb-2">
                  Strategic Support & CF Bombs
                </h4>
                <p class="text-sm sm:text-base text-text-muted leading-relaxed">
                  By having farms in dedicated alliances, main alliance members can focus on battles and events 
                  while farms provide essential resource support and strategic positioning. During KVK and major operations, 
                  these farms serve as <span class="text-blood-red font-semibold">CF Bombs</span>—critical tactical assets 
                  that provide strategic advantages and operational flexibility when we need them most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const farmAlliances = [
  {
    name: "Paladins Farm1",
    role: "Primary Farm Alliance",
    purpose:
      "The primary resource gathering alliance for Blood Paladins. Focuses on efficient resource collection, strategic positioning, and serves as CF Bombs for KVK operations.",
    benefits: [
      "Organized resource management",
      "Strategic territory positioning",
      "CF Bomb operations for KVK",
      "Active resource gathering",
      "Tactical support for main alliance",
    ],
  },
  {
    name: "Paladins Farm2",
    role: "Secondary Farm Alliance",
    purpose:
      "Secondary support alliance that complements Farm1. Provides additional resource capacity, strategic flexibility, and CF Bomb capabilities for major operations.",
    benefits: [
      "Additional resource capacity",
      "CF Bomb support for operations",
      "Backup strategic positioning",
      "Flexible resource allocation",
      "Tactical redundancy and security",
    ],
  },
  {
    name: "Paladins Farm3",
    role: "Additional Farm Alliance",
    purpose:
      "Additional farm alliance for expanded resource network. Ensures maximum resource gathering capacity and provides additional CF Bomb capabilities for large-scale operations.",
    benefits: [
      "Maximum resource capacity",
      "CF Bomb operations support",
      "Extended network coverage",
      "Enhanced strategic options",
      "Complete operational network",
    ],
  },
];
</script>

<style scoped>
.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}
</style>
