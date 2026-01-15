<template>
  <HeroSection />
  <ScrollReveal>
    <SkillsSection />
  </ScrollReveal>
  <ScrollReveal>
    <AboutSection />
  </ScrollReveal>
  <ScrollReveal>
    <WorksSection />
  </ScrollReveal>
  <ScrollReveal>
    <ContactSection />
  </ScrollReveal>
</template>

<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue';
import AboutSection from '../components/sections/About/AboutSection.vue';
import SkillsSection from '../components/sections/Skills/SkillsSection.vue';
import WorksSection from '../components/sections/Works/WorkSection.vue';
import ContactSection from '../components/sections/Contact/ContactSection.vue';
import ScrollReveal from '../components/common/ScrollReveal.vue';
</script>