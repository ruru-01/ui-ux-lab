<template>
  <section id="works" class="py-24 px-4 bg-black text-white border-t border-gray-800">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold mb-16 tracking-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
          WORKS
        </span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="work in works"
          :key="work.title"
          class="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md
                 hover:bg-white/10 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-500"
        >
          <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>

          <div class="relative">
            <div class="aspect-video bg-gray-800 rounded-lg mb-6 overflow-hidden">
               <div class="w-full h-full flex items-center justify-center text-gray-600">
                 Project Preview
               </div>
            </div>

            <h3 class="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
              {{ work.title }}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              {{ work.description }}
            </p>

            <div class="flex flex-wrap gap-2 justify-center">
              <span v-for="tag in work.tags" :key="tag" class="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const works = [
  {
    title: "Project One",
    description: "Vue.jsとTailwind CSSを使用したポートフォリオサイトです。レスポンシブデザインとアニメーションに拘りました。",
    tags: ["Vue.js", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Project Two",
    description: "UXデザインを重視したモバイルアプリケーションのプロトタイプ。ユーザー調査からプロトタイプ制作まで担当。",
    tags: ["Figma", "UI/UX Design"]
  },
  {
    title: "Project Three",
    description: "LaravelとMySQLを使用した、リアルタイムでのデータ更新が可能なダッシュボードツールです。",
    tags: ["Laravel", "MySQL", "Chart.js"]
  }
];
</script>