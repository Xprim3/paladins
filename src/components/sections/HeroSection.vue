<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20"
  >
    <!-- 3D Animated Background Layers -->
    <div class="absolute inset-0 perspective-1000">
      <!-- Layer 1: Deep gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blood-red-dark/30 via-transparent to-paladin-gold/10 transform-gpu"
      ></div>

      <!-- Layer 2: 3D Floating Shapes -->
      <div
        class="absolute top-20 left-10 w-64 h-64 bg-blood-red/10 rounded-full blur-3xl transform-gpu animate-float-1"
      ></div>
      <div
        class="absolute bottom-32 right-20 w-80 h-80 bg-paladin-gold/10 rounded-full blur-3xl transform-gpu animate-float-2"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-48 h-48 bg-blood-red/5 rounded-full blur-2xl transform-gpu animate-float-3"
      ></div>

      <!-- Layer 3: Geometric 3D Shapes -->
      <div
        class="absolute top-1/4 right-1/4 w-32 h-32 transform-gpu animate-rotate-3d"
      >
        <div
          class="w-full h-full border-2 border-blood-red/20 rotate-45 transform-gpu"
          style="transform: rotateX(60deg) rotateY(45deg)"
        ></div>
      </div>

      <div
        class="absolute bottom-1/4 left-1/4 w-24 h-24 transform-gpu animate-rotate-3d-reverse"
        style="animation-delay: 1s"
      >
        <div
          class="w-full h-full border-2 border-paladin-gold/20 rotate-45 transform-gpu"
          style="transform: rotateX(-60deg) rotateY(-45deg)"
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

    <!-- Main Content with 3D Effect -->
    <div
      class="relative z-10 container mx-auto px-4 text-center transform-gpu"
      style="transform-style: preserve-3d"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Main Heading with Logo -->
        <div
          class="mb-6 sm:mb-8 md:mb-10 lg:mb-12 transform-gpu flex justify-center"
          style="transform-style: preserve-3d; perspective: 1000px"
        >
          <div class="hero-logo-wrapper" style="transform: translateZ(50px)">
            <Logo />
          </div>
        </div>

        <!-- Subtitle with glow effect -->
        <p
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 text-paladin-gold font-semibold transform-gpu px-2"
          style="
            transform: translateZ(40px);
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
          "
        >
          The Strongest Family in the Kingdom
        </p>

        <!-- Description -->
        <p
          class="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed transform-gpu px-4"
          style="transform: translateZ(20px)"
        >
          Join an elite alliance of warriors dedicated to honor, strength, and
          unity.
          <span class="text-paladin-gold">Dominate the battlefield</span> and
          build the most powerful family network.
        </p>

        <!-- 3D CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 transform-gpu px-4"
          style="transform: translateZ(60px)"
        >
          <a
            href="#join"
            class="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blood-red to-blood-red-dark text-white font-bold rounded-xl text-base sm:text-lg md:text-xl overflow-hidden shadow-2xl shadow-blood-red/50 active:scale-100"
          >
            <span
              class="relative z-10"
              >Join Our Family</span
            >
            <div
              class="absolute inset-0 bg-gradient-to-r from-blood-red-light via-blood-red to-blood-red-dark opacity-0 group-hover:opacity-100"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full"
            ></div>
          </a>

          <a
            href="#about"
            class="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-dark-surface/80 backdrop-blur-md border-2 border-paladin-gold text-paladin-gold font-bold rounded-xl text-base sm:text-lg md:text-xl hover:bg-paladin-gold hover:text-dark-bg shadow-2xl shadow-paladin-gold/30 active:scale-100"
          >
            <span class="relative z-10">Learn More</span>
          </a>
        </div>
      </div>
    </div>


    <!-- Particle Effect Overlay -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute w-1 h-1 bg-blood-red rounded-full opacity-30 animate-particle"
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
import { smoothScrollTo } from "@/utils";
import Logo from "@/components/ui/Logo.vue";

onMounted(() => {
  // Add smooth scroll to CTA buttons
  const ctaButtons = document.querySelectorAll('#hero a[href^="#"]');
  ctaButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const href = button.getAttribute("href");
      if (href) {
        const sectionId = href.replace("#", "");
        smoothScrollTo(sectionId);
      }
    });
  });

  // Add 3D parallax effect on mouse move
  const hero = document.getElementById("hero");
  if (hero) {
    hero.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;

      const content = hero.querySelector(".container");
      if (content) {
        (content as HTMLElement).style.transform = `translateZ(60px) rotateY(${
          xPos * 0.1
        }deg) rotateX(${-yPos * 0.1}deg)`;
      }
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

@keyframes float-3 {
  0%,
  100% {
    transform: translate(0, 0) translateZ(0);
  }
  50% {
    transform: translate(50px, -50px) translateZ(40px);
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

@keyframes rotate-3d-reverse {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0);
  }
  100% {
    transform: rotateX(-360deg) rotateY(-360deg) rotateZ(0deg) translateZ(0);
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

.animate-rotate-3d {
  animation: rotate-3d 30s linear infinite;
}

.animate-rotate-3d-reverse {
  animation: rotate-3d-reverse 25s linear infinite;
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

.hero-logo-wrapper :deep(.flex) {
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.hero-logo-wrapper :deep(svg) {
  width: 5rem;
  height: 5rem;
}

@media (min-width: 640px) {
  .hero-logo-wrapper :deep(svg) {
    width: 6rem;
    height: 6rem;
  }
}

@media (min-width: 768px) {
  .hero-logo-wrapper :deep(svg) {
    width: 7rem;
    height: 7rem;
  }
}

@media (min-width: 1024px) {
  .hero-logo-wrapper :deep(svg) {
    width: 8rem;
    height: 8rem;
  }
}

@media (min-width: 1280px) {
  .hero-logo-wrapper :deep(svg) {
    width: 9rem;
    height: 9rem;
  }
}

@media (min-width: 1536px) {
  .hero-logo-wrapper :deep(svg) {
    width: 10rem;
    height: 10rem;
  }
}

.hero-logo-wrapper :deep(h1) {
  font-size: 2rem;
  line-height: 1.2;
}

@media (min-width: 640px) {
  .hero-logo-wrapper :deep(h1) {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) {
  .hero-logo-wrapper :deep(h1) {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .hero-logo-wrapper :deep(h1) {
    font-size: 3.5rem;
  }
}

@media (min-width: 1280px) {
  .hero-logo-wrapper :deep(h1) {
    font-size: 4rem;
  }
}

@media (min-width: 1536px) {
  .hero-logo-wrapper :deep(h1) {
    font-size: 4.5rem;
  }
}

.hero-logo-wrapper :deep(p) {
  font-size: 0.875rem;
}

@media (min-width: 640px) {
  .hero-logo-wrapper :deep(p) {
    font-size: 1rem;
  }
}

@media (min-width: 768px) {
  .hero-logo-wrapper :deep(p) {
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .hero-logo-wrapper :deep(p) {
    font-size: 1.25rem;
  }
}
</style>

