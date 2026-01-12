<template>
  <div class="min-h-screen w-full flex flex-col bg-black text-white">
    <AppHeader />
      <main class="flex-1">
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/About/AboutSection.vue';
import SkillsSection from './components/sections/Skills/SkillsSection.vue';
import WorksSection from './components/sections/Works/WorkSection.vue';
import ContactSection from './components/sections/Contact/ContactSection.vue';
</script>

<style scoped>
/* CSS */
</style>
