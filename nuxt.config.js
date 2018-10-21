module.exports = {

  srcDir: './site',
  // rootDir: path.resolve(__dirname, '..'),

  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" },
      { property: "og:title", content: "La la la" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=PT+Sans:400i,700&amp;subset=cyrillic" }
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
  transition: false
}
