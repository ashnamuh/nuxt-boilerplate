import ConfigWebpackPlugin from 'config-webpack'
import config from 'config'

export default {
  mode: 'universal',
  server: {
    port: config.server.port,
    host: config.server.host
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'title' },
      { hid: 'description', name: 'description', content: 'description' },
      { hid: 'keywords', name: 'keywords', content: 'keywords' },
      { hid: 'og:type', property: 'og:type', content: 'og:type' },
      { hid: 'og:title', property: 'og:title', content: 'og:title' },
      { hid: 'og:description', property: 'og:description', content: 'og:description' },
      { hid: 'og:image', property: 'og:image', content: '/path/to/image' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'og:image:alt' },
      { hid: 'og:url', property: 'og:url', content: 'og:url' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    plugins: [
      new ConfigWebpackPlugin()
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
