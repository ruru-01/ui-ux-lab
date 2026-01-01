<template>
  <section class="hero fade-in">
    <div class="hero-content">
      <p class="tag"># デザインエンジニア</p>
      <h1 class="headline">UI/UXを考えるエンジニア</h1>
      <p class="subtext">
        思考と言葉で設計し、コードでかたちにする。<br>
        デザインと開発のあいだをつなぐのが得意です。
      </p>
      <a class="cta-button" href="#" aria-label="ポートフォリオを見る">
        ポートフォリオを見る
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
// 一旦ロジックなし
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none !important;
  }
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  min-width: 60vh;
  background-color: #2d0707;
  padding: 2rem;
  text-align: center;
}

.hero-content {
  max-width: 600px;
}

.tag {
  display: inline-block;
  font-size: 0.9rem;
  color: #ffafaf;
  background-color: #4a1a1a;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
}

.headline {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffff;
}

.subtext {
  font-size: 1.1rem;
  color: #e3e3e3;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  background-color: #ffffff;
  color: #2d0707;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #ffeaea;
}
</style>
