<template>
  <a href="#hero" class="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition group">
    <!-- Medieval Shield Frame SVG -->
    <div class="flex-shrink-0">
      <svg 
        class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Shield Frame -->
        <path 
          d="M50 10 L20 20 L10 50 L20 80 L50 90 L80 80 L90 50 L80 20 Z" 
          stroke="#DC143C" 
          stroke-width="2.5" 
          fill="none"
          class="group-hover:stroke-blood-red-light transition"
        />
        <!-- Inner decorative lines -->
        <path 
          d="M50 15 L25 23 L17 50 L25 77 L50 85 L75 77 L83 50 L75 23 Z" 
          stroke="#FFD700" 
          stroke-width="1.5" 
          fill="none"
          opacity="0.6"
        />
        <!-- Cross in center -->
        <line x1="50" y1="35" x2="50" y2="65" stroke="#FFD700" stroke-width="2" stroke-linecap="round"/>
        <line x1="35" y1="50" x2="65" y2="50" stroke="#FFD700" stroke-width="2" stroke-linecap="round"/>
        <!-- Corner decorations -->
        <circle cx="20" cy="20" r="2" fill="#FFD700" opacity="0.8"/>
        <circle cx="80" cy="20" r="2" fill="#FFD700" opacity="0.8"/>
        <circle cx="20" cy="80" r="2" fill="#FFD700" opacity="0.8"/>
        <circle cx="80" cy="80" r="2" fill="#FFD700" opacity="0.8"/>
      </svg>
    </div>
    
    <!-- Title and Motto -->
    <div class="flex flex-col min-w-0">
      <h1 class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-heading font-bold text-blood-red group-hover:text-blood-red-light transition leading-tight whitespace-nowrap">
        Blood Paladins
      </h1>
      <p class="text-[9px] sm:text-[10px] md:text-xs text-paladin-gold font-medium italic leading-tight hidden sm:block">
        Honor • Strength • Unity
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
// Logo component with medieval frame
</script>

