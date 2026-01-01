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
      <div class="text-center mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(50px)">
        <h2
          class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blood-red mb-4 drop-shadow-2xl"
          style="text-shadow: 0 0 60px rgba(220, 20, 60, 0.5)"
        >
          Our Kingdom
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-paladin-gold to-transparent mx-auto"></div>
      </div>

      <!-- Kingdom Stats & Information -->
      <div class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(40px)">
        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-paladin-gold text-center mb-6 md:mb-8"
            style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
          >
            Kingdom Information
          </h3>
          
          <!-- Kingdom Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div class="text-center">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-blood-red mb-2">
                {{ kingdomStats.number }}
              </div>
              <div class="text-xs sm:text-sm text-text-muted">Kingdom Number</div>
            </div>
            <div class="text-center">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-paladin-gold mb-2">
                {{ kingdomStats.power }}
              </div>
              <div class="text-xs sm:text-sm text-text-muted">Total Power</div>
            </div>
            <div class="text-center">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-blood-red mb-2">
                {{ kingdomStats.alliances }}
              </div>
              <div class="text-xs sm:text-sm text-text-muted">Alliances</div>
            </div>
            <div class="text-center">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-paladin-gold mb-2">
                {{ kingdomStats.members }}
              </div>
              <div class="text-xs sm:text-sm text-text-muted">Total Members</div>
            </div>
          </div>

          <p
            class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center mb-4"
          >
            We operate in <span class="text-blood-red font-semibold">Kingdom {{ kingdomStats.number }}</span>—a 
            <span class="text-paladin-gold font-semibold">strong and stable kingdom</span> where 
            strategy, organization, and teamwork lead to victory. Our kingdom provides the perfect environment 
            for growth, dominance, and building lasting alliances.
          </p>
          <p
            class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
          >
            With over <span class="text-paladin-gold font-semibold">{{ kingdomStats.power }}</span> total power and 
            <span class="text-blood-red font-semibold">{{ kingdomStats.alliances }}</span> active alliances, this kingdom 
            is known for its organized leadership, active community, strategic territory control, 
            and a strong alliance network that works together for mutual success. It is a kingdom where 
            honor, loyalty, and excellence are not just words—they are the foundation of everything we do.
          </p>
        </div>
      </div>

      <!-- Kingdom Rules & Information -->
      <div class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(40px)">
        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-paladin-gold text-center mb-6 md:mb-8"
            style="text-shadow: 0 0 40px rgba(255, 215, 0, 0.4)"
          >
            Kingdom Rules & Guidelines
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div
              v-for="(rule, index) in kingdomRules"
              :key="index"
              class="flex items-start gap-3"
            >
              <div class="flex-shrink-0">
                <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold/10 rounded-full flex items-center justify-center border-2 border-paladin-gold/40">
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
                <h4 class="text-base sm:text-lg font-bold text-paladin-gold mb-1">
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
      <div class="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-14 transform-gpu" style="transform: translateZ(40px)">
        <div
          class="bg-gradient-to-br from-blood-red/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/40 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-blood-red text-center mb-4 sm:mb-6"
            style="text-shadow: 0 0 30px rgba(220, 20, 60, 0.3)"
          >
            Blood Paladins: A Crucial Force in Kingdom Growth
          </h3>
          <div class="space-y-4 sm:space-y-6">
            <p
              class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center"
            >
              <span class="text-blood-red font-bold">Blood Paladins</span> plays a 
              <span class="text-paladin-gold font-semibold">crucial and indispensable role</span> in the kingdom's growth, 
              stability, and strategic success. We are not just participants—we are architects of the kingdom's future.
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              Through our strategic excellence, unwavering commitment, and dedication to honor, Blood Paladins has 
              contributed significantly to the kingdom's power, organization, and reputation. Our family's strength 
              directly translates to the kingdom's strength, and our victories are the kingdom's victories.
            </p>
            <div
              class="bg-gradient-to-br from-paladin-gold/10 via-transparent to-paladin-gold/10 border-l-4 border-paladin-gold pl-4 sm:pl-6 py-4 rounded-r-lg"
            >
              <p
                class="text-base sm:text-lg md:text-xl text-paladin-gold font-semibold leading-relaxed text-center mb-2"
              >
                Every battle we win, every strategy we execute, every member we train—all of it serves the kingdom's 
                greater purpose and ensures our collective dominance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pryda's Key Role -->
      <div class="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-14 transform-gpu" style="transform: translateZ(40px)">
        <div
          class="bg-gradient-to-br from-paladin-gold/20 via-dark-surface/80 to-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold/40 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-paladin-gold text-center mb-4 sm:mb-6"
            style="text-shadow: 0 0 30px rgba(255, 215, 0, 0.3)"
          >
            Pryda: A Key Factor in Kingdom Leadership
          </h3>
          <div class="space-y-4 sm:space-y-6">
            <p
              class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center"
            >
              <span class="text-blood-red font-bold">Pryda</span>, alongside his dedicated team, stands as a 
              <span class="text-paladin-gold font-semibold">key factor and driving force</span> in the kingdom's 
              leadership, strategic direction, and overall success.
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              Pryda's vision, strategic thinking, and unwavering commitment to excellence have made him an 
              indispensable leader within the kingdom. His decisions shape not only Blood Paladins but influence 
              the kingdom's trajectory as a whole. Together with LundiX and the entire Blood Paladins leadership 
              team, Pryda ensures that the kingdom remains strong, organized, and dominant.
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              The kingdom recognizes Pryda and his team as crucial partners in governance, strategic planning, 
              and kingdom-wide coordination. Their leadership extends beyond Blood Paladins—it serves the entire 
              kingdom, ensuring stability, growth, and continued excellence.
            </p>
            <div
              class="bg-gradient-to-br from-blood-red/10 via-transparent to-blood-red/10 border-l-4 border-blood-red pl-4 sm:pl-6 py-4 rounded-r-lg"
            >
              <p
                class="text-base sm:text-lg md:text-xl text-blood-red font-semibold leading-relaxed text-center"
              >
                Pryda and his team don't just lead Blood Paladins—they help lead the kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Kingdom Story & Vision -->
      <div class="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20 transform-gpu" style="transform: translateZ(40px)">
        <div
          class="bg-gradient-to-br from-dark-surface/80 via-dark-surface/60 to-dark-surface/80 backdrop-blur-md border-2 border-blood-red/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blood-red text-center mb-6 md:mb-8"
            style="text-shadow: 0 0 40px rgba(220, 20, 60, 0.4)"
          >
            Kingdom Story & Vision
          </h3>
          <div class="space-y-4 sm:space-y-6">
            <p
              class="text-base sm:text-lg md:text-xl text-text-light leading-relaxed text-center"
            >
              This kingdom was forged through unity, strategy, and an unwavering commitment to excellence. 
              From its early days, it has been a place where alliances work together, where honor matters, 
              and where the strongest families rise to lead.
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              Our kingdom's vision is to create an environment where every alliance can thrive, where cooperation 
              triumphs over conflict, and where strategic excellence is rewarded. We believe in building a kingdom 
              that stands the test of time—one built on respect, organization, and mutual support.
            </p>
            <p
              class="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed text-center"
            >
              Blood Paladins chose this kingdom because it aligns with our values: honor, loyalty, and strength. 
              Here, we found a place where our family can grow, where our members can excel, and where our legacy 
              can be built on a foundation of trust and excellence. Through our crucial contributions and Pryda's 
              key leadership role, we continue to shape this kingdom's destiny.
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
          Leading Alliances in This Kingdom
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(alliance, index) in leadingAlliances"
            :key="index"
            class="bg-gradient-to-br from-paladin-gold/10 via-dark-surface/70 to-dark-surface/70 backdrop-blur-sm border border-paladin-gold/30 rounded-xl p-5 sm:p-6 shadow-lg hover:border-paladin-gold/50 transition-all duration-300"
          >
            <h4 class="text-lg sm:text-xl font-bold text-paladin-gold mb-2 text-center">
              {{ alliance.name }}
            </h4>
            <p class="text-xs sm:text-sm text-text-muted text-center leading-relaxed">
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
              Why Join This Kingdom
            </h3>
            <div class="space-y-4">
              <div
                v-for="(reason, index) in whyJoinKingdom"
                :key="index"
                class="flex items-start gap-4"
              >
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-paladin-gold/20 to-paladin-gold/10 rounded-full flex items-center justify-center border-2 border-paladin-gold/40">
                    <span class="text-paladin-gold font-bold text-lg sm:text-xl">{{ index + 1 }}</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h4 class="text-base sm:text-lg font-bold text-paladin-gold mb-2">
                    {{ reason.title }}
                  </h4>
                  <p class="text-sm sm:text-base text-text-muted leading-relaxed">
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
const kingdomStats = {
  number: "XXXX", // Update with actual kingdom number
  power: "XXXB", // Update with actual kingdom power (e.g., "150B", "200B")
  alliances: "XX", // Update with actual number of alliances
  members: "XXXK", // Update with actual number of members (e.g., "50K", "100K")
};

const kingdomRules = [
  {
    title: "Respect & Honor",
    description:
      "All members must treat each other with respect and honor. Disrespectful behavior is not tolerated.",
  },
  {
    title: "Active Participation",
    description:
      "Members are expected to participate actively in kingdom events, battles, and alliance activities.",
  },
  {
    title: "Strategic Coordination",
    description:
      "Follow strategic plans and coordinate with kingdom leadership during major events and operations.",
  },
  {
    title: "Territory Rules",
    description:
      "Respect territory boundaries and follow kingdom guidelines for expansion and resource gathering.",
  },
  {
    title: "Communication",
    description:
      "Maintain open communication with kingdom leadership and report important information promptly.",
  },
  {
    title: "Unity & Cooperation",
    description:
      "Work together with other alliances for the kingdom's success. Unity is our strength.",
  },
];

const leadingAlliances = [
  {
    name: "Blood Paladins",
    description: "Elite family alliance focused on honor, loyalty, and strategic excellence.",
  },
  {
    name: "Kingdom Guardians",
    description: "Dedicated to protecting the kingdom and maintaining stability.",
  },
  {
    name: "Warrior Elite",
    description: "Powerful alliance known for battle prowess and strategic dominance.",
  },
  {
    name: "Royal Council",
    description: "Kingdom leadership alliance coordinating major decisions and events.",
  },
  {
    name: "Shadow Legion",
    description: "Strategic alliance specializing in tactical operations and intelligence.",
  },
  {
    name: "Iron Vanguard",
    description: "Strong defensive alliance protecting kingdom territories and resources.",
  },
];

const whyJoinKingdom = [
  {
    title: "Stable & Organized Leadership",
    description:
      "The kingdom is led by experienced and organized leaders who ensure fair governance, strategic planning, and a stable environment for all alliances to thrive.",
  },
  {
    title: "Active Community & Events",
    description:
      "Join a kingdom with an active, engaged community. Regular events, coordinated activities, and a vibrant alliance network make this kingdom dynamic and exciting.",
  },
  {
    title: "Strategic Territory Control",
    description:
      "The kingdom maintains strong strategic territory control, ensuring resources are accessible and territories are well-managed for all members.",
  },
  {
    title: "Strong Alliance Network",
    description:
      "Be part of a kingdom where alliances work together, support each other, and build lasting relationships. Cooperation is valued over conflict.",
  },
  {
    title: "Growth Opportunities",
    description:
      "This kingdom provides excellent opportunities for growth, whether you're a new player or an experienced warrior looking to advance.",
  },
  {
    title: "Honor & Excellence",
    description:
      "Join a kingdom where honor, loyalty, and excellence are not just words—they are the foundation of how we operate and succeed together.",
  },
];

</script>

<style scoped>
.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}
</style>
