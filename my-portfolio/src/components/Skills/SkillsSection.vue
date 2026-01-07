<template>
  <section id="skills" class="py-24 px-4 bg-black text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold mb-16 tracking-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          SKILLS
        </span>
      </h2>
      <div class="space-y-16">
        <div v-for="category in skillCategories" :key="category.title" class="flex flex-col items-center">
          <h3 class="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">
            {{ category.title }}
          </h3>
          <div class="flex flex-wrap justify-center gap-3 max-w-2xl">
            <span
              v-for="item in category.items"
              :key="item"
              class="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-sm
                     hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 transition-all duration-300
                     cursor-default"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    title: 'Frontend',
    items: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Accessibility (A11y)']
  },
  {
    title: 'Design',
    items: ['Figma', 'UI/UX Design', 'Illustrator', 'Photoshop']
  },
  {
    title: 'Backend',
    items: ['Laravel', 'MySQL']
  },
  {
    title: 'Others',
    items: ['GitHub', 'Docker', 'Vite']
  },
];
</script>