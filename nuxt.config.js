export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Mahmud Hasan Jion' || '',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Currently working with PHP, Codeigniter, Vue.js/React, Javascript, Next/Nuxt and Node.js'},
        { hid: 'keywords', name: 'keywords', content: "Mahmud Hasan Jion" },
        { hid: 'classification', name: 'classification', content: 'Blog' },
        { hid: 'url', name: 'url', content: "https://mahmudjion.github.io/" },
        // OG SEO
        { hid: 'og:title', name: 'og:title', content: 'Mahmud Hasan Jion' },
        { hid: 'og:description', name: 'og:description', content: 'Currently working with PHP, Codeigniter, Vue.js/React, Javascript, Next/Nuxt and Node.js' },
        { hid: 'og:type', name: 'og:type', content: 'Blog' },
        { hid: 'og:url', name: 'og:url', content: "https://mahmudjion.github.io/" }
    ],
    link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "canonical", href: "https://mahmudjion.github.io/" }
          ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  devServerHandlers: [],
}
