<template>
  <EmptyLayout>
    
    <div class="row">
      <div class="col-md-3 col-lg-3 pb-2 pb-md-0 menu__wrapper">
        <nav class="menu col-md-3 col-lg-3">
          <nuxt-link to="/">
            <svg class="logo d-none d-md-block mt-01 mb-1" xmlns="http://www.w3.org/2000/svg" width="80" height="140" viewBox="0 0 80 140"><g fill="none" fill-rule="evenodd"><g fill="#5200FF" fill-rule="nonzero" transform="translate(-120 -440)"><g transform="translate(120 440)"><g><rect width="60" height="20" x="20"/><rect width="40" height="20" x="20" y="60"/><rect width="60" height="20" y="120"/><rect width="20" height="40" y="20"/><rect width="20" height="40" x="60" y="80"/></g></g></g></g></svg>
            <img class="logo __full d-md-none mt-01 mb-2" src="logo.svg" alt="Setka">
          </nuxt-link>
          <div class="row flex-column flex-md-row menu__row">
            <div v-for="(item, i) in menu" :key="i" :class="item.class">
              <div class="menu__title" v-if="item.title">{{item.title}}</div>
              <div v-for="(item, i) in item.items" :key="i">
                <nuxt-link v-if="item.url" class="menu__item" :to="item.url">{{item.title}}</nuxt-link>
                <div v-if="navigationItems.length && isCurrent(item.url)" class="d-none d-md-block mb-01">
                  <div v-for="(_item, i) in navigationItems" :key="i">
                    <a @click.prevent="onAchorClick(_item.link)" class="menu__item __anchor __no-active" :class="{ 'ml-01': _item.level === 3, 'd-none': _item.level > 3 }" :href="'#' + _item.link">{{_item.text}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=""><a class="color-text" :href="$store.state.data.github" target="_blank">Github page</a></div>
        </nav>
      </div>
      <div class="col-md-9 col-lg-9 offset-lg-0" ref="content">
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

  Vue.use(VueClipboard)
  Vue.component('format-table', FormatTable)
  Vue.component('source-code', Source)
  Vue.component('Header', Header)

  export default {

    components: {
      EmptyLayout: EmptyLayout
    },

    mounted() {
      this.$router.beforeEach((to, from, next) => {
        if (to.path !== from.path) {
          this.$store.commit('buildTOC', [])
        }
        next()
      })
    },

    computed: {
      navigationItems() {
        return this.$store.state.toc
      }
    },

    data() {
      return {
        menu: [{
          class: 'col-auto mb-1 mb-md-01 col-md-12',
          items: [{
            title: 'Getting started',
            url: '/start'
          }, {
            title: 'Download',
            url: '/download'
          }]
        }, {
          title: 'Layout',
          class: 'col-auto mb-1 mb-md-01 col-md-12',
          items: [{
            title: 'Overview',
            url: '/container'
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
          class: 'col-auto mb-1 mb-md-01 col-md-12 order-12 order-md-0',
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
        }]
      }
    },

    methods: {

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
  display: block
  position relative
  z-index 1
  width: auto
  &.__full
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
  height: gu(26)
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

  &.__anchor
    font-size: 0.9em
    opacity: 0.8
    padding-left: gu(1)

.menu__title
  color: #999
  font-size: 1.2em
  font-weight: 300

</style>
