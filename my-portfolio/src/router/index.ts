import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // ブラウザの履歴モードを使用
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*', // どのURLにも当てはまらない場合の設定
      name: 'not-found',
      // 遅延ロード（必要な時だけ読み込む）にすることでパフォーマンスを向上
      component: () => import('../views/NotFoundView.vue')
    }
  ],
  // ページ遷移時に一番上までスクロールさせる設定
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router