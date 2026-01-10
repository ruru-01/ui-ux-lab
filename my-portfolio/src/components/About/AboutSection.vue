<template>
  <section id="about" class="py-24 px-4 bg-black text-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold tracking-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            ABOUT
          </span>
        </h2>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        <div class="flex-shrink-0">
          <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <img
              :src="profileImage"
              alt="Profile"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="max-w-xl text-left space-y-6">
          <p class="text-lg leading-relaxed text-gray-300">
            ここに自己紹介の文章が入ります。エンジニアとしてのバックグラウンドや、大切にしている設計思想、得意な技術領域について記載してください。
          </p>
          <p class="text-lg leading-relaxed text-gray-300">
            Laravelを用いたバックエンド開発から、Vue.js/Reactによるフロントエンド、FigmaでのUIデザインまで、一気通貫したモノづくりを得意としています。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import profileImage from "../../assets/ruru.jpg";
</script>