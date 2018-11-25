import meta from './site/assets/meta'

module.exports = {

  srcDir: './site',
  // rootDir: path.resolve(__dirname, '..'),

  generate: {
    dir: 'docs'
  },

  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : '/setka/',
    scrollBehavior: function (to, from, savedPosition) {
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      let position = false

      if (to.hash && to.path === from.path && document.querySelector(to.hash)) {
        position = { selector: to.hash }
        return position
      }
    
      // if no children detected
      if (to.matched.length < 2) {
        // scroll to the top of the page
        position = { x: 0, y: 0 }
      } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
        // if one of the children has scrollToTop option set to true
        position = { x: 0, y: 0 }
      }
    
      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        position = savedPosition
      }
    
      return new Promise(resolve => {
        // wait for the out transition to complete (if necessary)
        window.$nuxt.$once('triggerScroll', () => {
          // coords will be used if no selector is provided,
          // or if the selector didn't match any element.
          if (to.hash && document.querySelector(to.hash)) {
            // scroll to anchor by returning the selector
            // position = { selector: to.hash }
            position = false
            setTimeout(() => {
              document.querySelector(to.hash).scrollIntoView()
            }, 100)
          }
          resolve(position)
        })
      })
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Setka CSS Library',
    titleTemplate: '%s · Setka',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      ...meta({
        'description': 'Setka CSS project'
        // 'og:title': 'La la la'
      })
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/typography.styl', lang: 'stylus' },
    { src: 'highlight.js/styles/github.css' }
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
    stylus: ['./lib/setka/index.styl']
  },

  plugins: [
    { src: '~/plugins/toc', ssr: false}
  ]

}