<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

    <div class="absolute top-1/4 -left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style="animation-delay: 2s;"></div>

    <div class="hero-content relative z-10 w-full max-w-6xl mx-auto text-center px-4 fade-in">

      <span class="inline-block px-4 py-1.5 mb-8 border border-white/10 rounded-full text-[10px] tracking-[0.4em] text-gray-400 bg-white/5 backdrop-blur-md">
        UI/UX DESIGNER & DEVELOPER
      </span>

      <h1 class="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
          {{ profile.headline }}
        </span>
      </h1>

      <p class="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
        {{ profile.subtext }}
      </p>

      <div class="flex flex-row justify-center items-center gap-6 mt-2">
        <SocialIcon
          v-for="link in profile.socialLinks"
          :key="link.label"
          :url="link.url"
          :label="link.label"
          :iconPath="link.iconPath"
          class="hover:scale-125 transition-transform duration-300"
        />
      </div>

      <div class="mt-16">
        <a href="#works" class="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5">
          View My Works
        </a>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
      <span class="text-[10px] uppercase tracking-[0.5em]">Scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SocialIcon from '../common/SocialIcon.vue';
import { useProfileStore } from '../../stores/profile';

const profile = useProfileStore();
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none !important;
  }
}
</style>