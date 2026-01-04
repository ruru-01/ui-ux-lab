<template>
  <section class="hero fade-in min-h-screen flex flex-col justify-center items-center text-white">
    <div class="hero-content text-center px-4">
      <h1 class="headline text-4xl font-bold mb-4">{{ profile.headline }}</h1>
      <p class="subtext text-lg mb-8">{{ profile.subtext }}</p>

      <!-- SNSアイコン群 -->
      <div class="flex flex-row justify-center items-center gap-4 mt-2">
        <SocialIcon
          v-for="link in profile.socialLinks"
          :key="link.label"
          :url="link.url"
          :label="link.label"
          :iconPath="link.iconPath"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SocialIcon from './SocialIcon.vue';
import { useProfileStore } from '../stores/profile';

// ストアのインスタンスを作成
const profile = useProfileStore();
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none !important;
  }
}
</style>
