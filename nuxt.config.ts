import viteTsconfigPaths from 'vite-tsconfig-paths'

export default {
  ssr: true,

  compatibilityDate: '2026-02-11',

  app: {
    head: {
      title: 'TopFloor Commerce',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
  ],

  runtimeConfig: {
    vkToken: '',
    vkApiVersion: '5.199',
    vkPeerId: ''
  }
}

