import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  ssr: true,

  compatibilityDate: '2026-02-11',

  app: {
    head: {
      title: 'TopFloor Commerce',

      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
      ],
    },
  },

  css: [
    '@/assets/styles/reset.scss',
    '@/assets/styles/global.scss',
  ],

  vite: {
    plugins: [
      viteTsconfigPaths(),
    ],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/variables.scss" as *;
            @use "@/assets/styles/mixins.scss" as *;
          `,
        },
      },
    },
  },

  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    'nuxt-yandex-metrika',
  ],

  runtimeConfig: {
    vkToken: '',
    vkApiVersion: '5.199',
    vkPeerId: '',

    public: {
      yandexMetrikaId: '',
    },
  },

  yandexMetrika: {
    id: 112714519,

    webvisor: true,
    clickmap: true,
    trackLinks: true,
    trackHash: true,
    accurateTrackBounce: true,
    defer: true,
  },
})