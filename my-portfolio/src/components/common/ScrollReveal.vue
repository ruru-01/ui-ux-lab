<template>
  <div ref="target" :class="['reveal', { 'is-visible': isVisible }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const target = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        // 一度表示されたら監視を止める（何度も動かしたい場合はここを消す）
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // 10%見えたらアニメーション開始
  });

  if (target.value) observer.observe(target.value);
});
</script>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>