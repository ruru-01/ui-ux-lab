<template>
  <div class="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
    <div class="aspect-video bg-gray-700 flex items-center justify-center text-gray-500">
      Image Placeholder
    </div>
    <div class="p-4 text-left">
      <h3 class="font-bold text-lg text-white mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-400">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>