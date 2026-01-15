<template>
  <div class="min-h-screen w-full flex flex-col bg-black text-white">
    <AppHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';
import { onMounted } from 'vue';
import { useThemeStore } from './stores/theme';

const theme = useThemeStore();
onMounted(() => {
  theme.initTheme();
})
</script>