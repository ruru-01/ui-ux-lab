<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
    <h1 class="text-9xl font-bold tracking-tighter text-white/20">404</h1>
    <p class="text-xl mt-4 mb-8 text-gray-400">お探しのページは見つかりませんでした。</p>
    <router-link
      to="/"
      class="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
    >
      ホームに戻る
    </router-link>
  </div>
</template>