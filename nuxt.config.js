import pkg from './package'
import { defer } from 'q';

export default {
  mode: 'universal',
  head: {
    meta: [
      { charset: 'utf-8' },
      { "http-equiv": 'X-UA-Compatible', content:"IE=edge" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "" },
      { name: 'author', content:""  }
    ], 
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main-opg.css'
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
  ],

  /*
  ** Build configuration
  */
  build: {
    filenames: {
      css: ({ isDev }) => isDev ? '[name].css' : '[name].css'
    },
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {
    }
  }
}
