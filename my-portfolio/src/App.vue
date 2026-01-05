<template>
  <div id="app" class="min-h-screen flex flex-col">
    <AppHeader />
      <main class="flex-1">
        <HeroSection />
      </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import HeroSection from './components/HeroSection.vue';
</script>

<style scoped>
/* CSS */
</style>
