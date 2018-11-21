module.exports = {

  srcDir: './site',
  // rootDir: path.resolve(__dirname, '..'),

  generate: {
    dir: 'docs'
  },

  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : '/invisible/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Setka CSS Library',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" },
      { property: "og:title", content: "La la la" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/typography.styl', lang: 'stylus' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  transition: false,

  modules: [
    '@nuxtjs/style-resources',
    '~/modules/generate-after'
  ],

  styleResources: {
    stylus: ['./lib/@anovi/invisible/index.styl']
  },

  plugins: [
    { src: '~/plugins/toc', ssr: false}
  ]

}