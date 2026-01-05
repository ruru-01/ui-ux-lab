<template>
  <section class="py-20 px-4 bg-black text-white">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-12 inline-block border-b-2 border-white pb-2">WORKS</h2>
      <!-- 列数を増やし gap を小さくする -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div class="mx-auto w-full max-w-sm">
          <WorkCard
            class="h-full"
            title="Project One"
            description="Vue.jsとTailwind CSSを使用したポートフォリオサイトです。"
          />
        </div>

        <div class="mx-auto w-full max-w-sm">
          <WorkCard
            class="h-full"
            title="Project Two"
            description="UXデザインを重視したモバイルアプリケーションのプロトタイプ。"
          />
        </div>

        <div class="mx-auto w-full max-w-sm">
          <WorkCard
            class="h-full"
            title="Project Three"
            description="API連携を実装したダッシュボードツール。"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import WorkCard from './WorkCard.vue';
</script>