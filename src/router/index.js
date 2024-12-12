import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/progress-bar',
    component: () => import('@/components/progress-bar.vue'),
  },
  {
    path: '/svg',
    children: [
      {
        path: '/svg/wave',
        component: () => import('@/components/wave-index.vue'),
      },
      {
        path: '/svg/sun',
        component: () => import('@/components/sun-index.vue'),
      },
      {
        path: '/svg/star',
        component: () => import('@/components/star.vue'),
      },
      {
        path: '/svg/computer',
        component: () => import('@/components/computer-index.vue'),
      },
    ],
  },
  {
    path: '/lottie',
    children: [
      {
        path: '/lottie/chat-gpt',
        component: () => import('@/components/chat-gpt.vue'),
      },
      {
        path: '/lottie/vue-button',
        component: () => import('@/components/vue-button.vue'),
      },
      {
        path: '/lottie/ping-button',
        component: () => import('@/components/ping-button.vue'),
      },
      {
        path: '/lottie/scatter-flowers',
        component: () => import('@/components/scatter-flowers.vue'),
      },
    ],
  },
  {
    path: '/cursor',
    children: [
      {
        path: '/cursor',
        component: () => import('@/components/cursor-index.vue'),
      },
      {
        path: '/cursor-bom',
        component: () => import('@/components/cur-bom.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
