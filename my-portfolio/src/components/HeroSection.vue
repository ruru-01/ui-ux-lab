<template>
  <section class="hero fade-in">
    <div class="hero-content">
      <h1 class="headline">UI/UXを考えるエンジニア</h1>
      <p class="subtext">
        思考と言葉で設計し、コートでかたちにする。<br>
        デザインと開発のあいだをつなぐのが得意です。
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// 一旦ロジックなし。
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

/* prefers-reduced-motionに対応 */
@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none !important;
  }
}

.hero {
  display: flex;
  align-self: center;
  justify-content: center;
  /* 画面の高さの60%未満にならないように制限 */
  min-height: 60vh;
  min-width: 60vh;
  background-color: #2d0707;
  /* ルート要素のフォントサイズが16pxであれば32px（2 * 16px） */
  padding: 2rem;
  text-align: center;
}

.hero-content {
  max-width: 600px;
}

.headline {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.subtext {
  font-size: 1.1rem;
  color: #e3e3e3;
  line-height: 1.6;
}

</style>