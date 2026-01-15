export default {
  /*
   ** Nuxt rendering mode for static generation
   */
  ssr: false,
  
  /*
   ** Headers of the page
   */
  app: {
    head: {
      title: 'Mahmud Hasan Jion',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Currently working with PHP, Codeigniter, Vue.js/React, Javascript, Next/Nuxt, and Node.js' },
        { hid: 'keywords', name: 'keywords', content: 'Mahmud Hasan Jion, PHP, Codeigniter, Vue.js, React, Javascript, Next, Nuxt, Node.js, Software Engineer' },
        { hid: 'classification', name: 'classification', content: 'Portfolio' },
        { hid: 'url', name: 'url', content: 'https://mahmudjion.github.io/' },
        // Open Graph metadata
        { hid: 'og:title', name: 'og:title', content: 'Mahmud Hasan Jion' },
        { hid: 'og:description', name: 'og:description', content: 'Currently working with PHP, Codeigniter, Vue.js/React, Javascript, Next/Nuxt, and Node.js' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: 'https://mahmudjion.github.io/' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://mahmudjion.github.io/' },
      ],
    },
  },
  
  /*
   ** Global CSS
   */
  css: ['bootstrap/dist/css/bootstrap.css'],
  
  /*
   ** Auto import components
   */
  components: true,
  
  /*
   ** Compatibility date for Nitro
   */
  compatibilityDate: '2026-01-14',

  /*
   ** Nitro preset for static generation
   */
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: ['/404', '/500']
    }
  }
}
