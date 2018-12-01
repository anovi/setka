<template>
  <EmptyLayout>
    
    <div class="row">
      <div class="col-md-3 col-lg-3 pb-0 pb-md-0 menu__wrapper">
        <nav class="menu col-md-3 col-lg-3">
          <nuxt-link to="/">
            <Logo class="logo d-none d-md-block mt-01 mb-1" letter />
            <Logo class="logo d-md-none mt-01 mb-1" :animation="2" />
          </nuxt-link>
          <div class="row flex-nowrap flex-md-wrap flex-md-row menu__row">
            <div v-for="(item, i) in menu" :key="i" :class="item.class">
              <div class="menu__title" v-if="item.title">{{item.title}}</div>
              <div v-for="(item, i) in item.items" :key="i">
                <nuxt-link v-if="item.url && !item.url.match(/^https?:/)" class="menu__item" :to="item.url">{{item.title}}</nuxt-link>
                <a v-if="item.url && item.url.match(/^https?:/)" class="menu__item" target="_blank" :href="item.url">{{item.title}}</a>
                <div v-if="navigationItems.length && isCurrent(item.url)" class="menu__toc d-none d-md-block mb-01">
                  <div v-for="(_item, i) in navigationItems" :key="i">
                    <nuxt-link class="menu__item __anchor __no-active" :class="{ 'ml-01': _item.level === 3, 'd-none': _item.level > 3 }" :to="'#' + _item.link">{{_item.text}}</nuxt-link>
                  </div>
                  <div v-if="tocCursor" :style="{top: tocCursor.top, height: tocCursor.height}" class="menu__toc-cursor"></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="col-md-9 col-lg-9 offset-lg-0 pb-3" ref="content">
        <nuxt />
      </div>
    </div>
  
  </EmptyLayout>
</template>

<script>
  import Vue from 'vue'
  import EmptyLayout from '~/layouts/empty'
  import FormatTable from '~/components/format-table'
  import Header from '~/components/header'
  import Source from '~/components/source'
  import VueClipboard from 'vue-clipboard2'
  import Logo from '~/components/logo.vue'

  Vue.use(VueClipboard)
  Vue.component('format-table', FormatTable)
  Vue.component('source-code', Source)
  Vue.component('Header', Header)

  export default {

    components: {
      EmptyLayout: EmptyLayout,
      Logo
    },

    mounted() {
      this.$router.beforeEach((to, from, next) => {
        if (to.path !== from.path) {
          this.$store.commit('buildTOC', [])
        }
        next()
      })

      if (this.$router.currentRoute.hash) {
        this.onAchorClick(this.$router.currentRoute.hash.slice(1))
      }

      window.addEventListener('scroll', this.onHeaderScroll)
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.onHeaderScroll)
    },

    computed: {
      navigationItems() {
        return this.$store.state.toc
      },
      tocViewed() {
        return this.$store.state.tocViewed
      },
      tocCursor() {
        var coord = this.$store.state.tocViewed
        if (!coord || this.$store.state.toc.length === 0) return null
        return {
          top: `calc(var(--line-height) * ${coord[0]})`,
          height: `calc(var(--line-height) * ${coord[1] - coord[0] + 1})`
        }
      }
    },

    data(vm) {
      return {
        menu: [{
          class: 'col-auto mb-1 mb-md-01 col-md-12',
          items: [{
            title: 'Getting started',
            url: '/start'
          }, {
            title: 'Download',
            url: '/download'
          }, {
            title: 'Integrate code',
            url: '/integrate'
          }]
        }, {
          title: 'Layout',
          class: 'col-auto mb-1 mb-md-01 col-md-12',
          items: [{
            title: 'Overview',
            url: '/overview'
          }, {
            title: 'Grid',
            url: '/grid'
          }, {
            title: 'Baseline grid',
            url: '/baseline'
          }]
        }, {
          class: 'sss'
        }, {
          title: 'Utilities',
          class: 'col-auto mb-1 mb-md-01 col-md-12',
          items: [{
            title: 'Sizing',
            url: '/sizing'
          }, {
            title: 'Spacing',
            url: '/spacing'
          }, {
            title: 'Display',
            url: '/display'
          }, {
            title: 'Flex',
            url: '/flex'
          }, {
            title: 'Float',
            url: '/float'
          }, {
            title: 'Visibility',
            url: '/visibility'
          }, {
            title: 'Debugging',
            url: '/debugging'
          }]
        }, {
          title: 'Customize',
          class: 'col-auto mb-1 mb-md-01 col-md-12',
          items: [{
            title: 'CSS variables',
            url: '/css-vars'
          }, {
            title: 'Stylus variables',
            url: '/vars'
          }, {
            title: 'Mixins',
            url: '/mixins'
          }]
        }, {
          class: 'col-auto mb-1 mb-md-01 col-md-12',
          items: [{
            title: 'GitHub',
            url: vm.$store.state.data.github
          }]
        }]
      }
    },

    methods: {

      onHeaderScroll() {
        if (this.navigationItems.length == 0) return
        let headers = this.findHeaderElements()
        if (!headers || headers.length === 0) return
        var res = [null, null]
        let inView = []
        let above, rect
        let detectZone = 0.9

        headers.forEach((element, i) => {
          element = headers[i]
          rect = element.getBoundingClientRect()
          if (rect.top <= 0 - 100){
            above = i
          } 
          if (rect.top > 0 - 100 && rect.top <= window.innerHeight - 200) {
            inView.push(i)
          }
        })
        if (inView.length === 0 && above !== null) {
          res = [above, above]
        } else if (inView.length >= 0) {
          res = [inView[0], inView.pop()]
        } else {
          res = null
        }
        if (res != null) this.$store.commit('markTOC', res)
      },

      findHeaderElements() {
        if (this.navigationItems.length == 0) {
          return;
        }
        var selector = this.navigationItems.map((item) => '#' + item.link).join(', ')
        return this.$el.querySelectorAll(selector)
      },

      onAchorClick(link) {
        var item = document.querySelector('#' + link)
        if (item && item.scrollIntoView) {
          item.scrollIntoView()
        }
      },

      isCurrent(path) {
        return this.$router.currentRoute.path.match(new RegExp(path + '\/?$'))
      }

    }
  }
</script>

<style lang="stylus">

.logo
  height: gu(7)
  position relative
  z-index 1
  // width: 50%
  &.__full
    width: auto
    height: gu(7)
    +media-up('lg')
      height: gu(14)

$menu-width = 250px
.menu__wrapper
  +media-down('md')
    box-shadow: 0 1px 0 0 rgba(0,0,0,0.1)
  +media-up('lg')
    max-width: $menu-width

.menu
  line-height: gu(2)
  font-family: var(--header-font)
  margin-left: -15px
  +media-up('md')
    font-size: 0.8em
    position: fixed
    top: 0
    bottom: 0
    overflow: auto
  +media-up('lg')
    max-width: $menu-width

.menu__row
  // height: gu(17)
  max-width: 100vw
  overflow: auto
  +media-down('md')
    margin-right: calc(var(--grid-gutter-width) * -1.5)
  +media-up('md')
    height: auto

.menu__item
  text-decoration: none
  color: #555
  display: block
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  &.nuxt-link-active:not(.__no-active)
  &.nuxt-link-exact-active:not(.__no-active)
    color: black
    color: var(--color-link)
    font-weight: bold
  &.__scroll-active
    color: var(--color-link)

  &.__anchor
    font-size: 0.9em
    opacity: 0.8
    padding-left: gu(1)

.menu__title
  color: #999
  font-size: 1.2em
  font-weight: 300

.menu__toc
  position relative

.menu__toc-cursor
  position: absolute
  width: 1px
  background-color: var(--color-link)
  left: 5px
  transition: top 0.3s ease, height 0.3s ease
</style>
