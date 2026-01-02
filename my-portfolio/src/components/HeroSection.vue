<template>
  <section class="hero fade-in min-h-screen flex flex-col justify-center items-center text-white">
    <div class="hero-content text-center px-4">
      <h1 class="headline text-4xl font-bold mb-4">マイポートフォリオ</h1>
      <p class="subtext text-lg mb-8">
        心地良いユーザー体験を追求し、届ける<br>
        UI/UXエンジニア
      </p>

      <!-- SNSアイコン群 -->
      <div class="flex flex-row justify-center items-center gap-4 mt-2">
        <SocialIcon url="#" label="Instagram" iconPath="/icons/instagram.svg" />
        <SocialIcon url="#" label="Threads" iconPath="/icons/threads.svg" />
        <SocialIcon url="#" label="X" iconPath="/icons/x.svg" />
        <SocialIcon url="#" label="LINE" iconPath="/icons/line.png" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SocialIcon from './SocialIcon.vue';
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
