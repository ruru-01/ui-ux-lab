<template>
  <div class="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm font-medium hover:border-blue-400 transition-colors">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
</script>