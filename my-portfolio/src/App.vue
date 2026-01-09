<template>
  <div class="min-h-screen w-full flex flex-col bg-black text-white">
    <AppHeader />
      <main class="flex-1">
        <HeroSection />
        <SkillsSection />
        <WorksSection />
        <ContactSection />
      </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/Skills/SkillsSection.vue';
import WorksSection from './components/Work/WorkSection.vue';
import ContactSection from './components/Contact/ContactSection.vue';
</script>

<style scoped>
/* CSS */
</style>
