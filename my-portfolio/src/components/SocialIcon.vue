<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <img
      :src="iconPath"
      :alt="label"
      class="social-icon-img transition-transform hover:scale-110"
    />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  url: string
  label: string
  iconPath: string
}>()
</script>

<style scoped>
.social-icon-img {
  width: 1rem !important;
  height: 1rem !important;
  object-fit: contain;
  display: inline-block;
}
</style>
