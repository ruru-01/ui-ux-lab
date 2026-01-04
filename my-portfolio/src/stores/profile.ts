import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  // セクションのテキスト
  const headline = ref('マイポートフォリオ')
  const subtext = ref('心地良いユーザー体験を追求し、届ける\nUI/UXエンジニア')

  // SNSリンクのデータ
  const socialLinks = ref([
    { url: 'https://github.com/ruru-01', label: 'GitHub', iconPath: '/icons/github.png' },
    { url: '#', label: 'Instagram', iconPath: '/icons/instagram.svg' },
    { url: '#', label: 'Threads', iconPath: '/icons/threads.svg' },
    { url: '#', label: 'X', iconPath: '/icons/x.svg' },
    { url: '#', label: 'LINE', iconPath: '/icons/line.png' },
  ])

  return { headline, subtext, socialLinks }
})