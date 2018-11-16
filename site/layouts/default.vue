<template>
  <EmptyLayout>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-md-2 menu-col">
          <nav class="menu">
            <nuxt-link to="/">
              <img class="logo" src="/logo3.svg" alt="Invisible CSS library">
            </nuxt-link>
            <div v-for="(item, i) in menu" :key="i">
              <nuxt-link v-if="item.url" class="menu__item" :to="item.url">{{item.title}}</nuxt-link>
              <div v-else class="menu__title">{{item.title}}</div>
            </div>
          </nav>
        </div>
        <div class="col-sm-9 col-md-10">
          <nuxt />
        </div>
      </div>
    </div>
  </EmptyLayout>
</template>

<script>
  import Vue from 'vue'
  import EmptyLayout from '~/layouts/empty'
  import FormatTable from '~/components/format-table'
  import Source from '~/components/source'
  import VueClipboard from 'vue-clipboard2'

  Vue.use(VueClipboard)
  Vue.component('format-table', FormatTable)
  Vue.component('source-code', Source)

  export default {

    components: {
      EmptyLayout: EmptyLayout
    },

    data() {
      return {
        wHeight: '0',
        menu: [{
          title: 'Getting started',
          url: '/start'
        }, {
          title: 'Download',
          url: '/download'
        }, {
          title: 'Baseline grid',
          url: '/baseline'
        }, {
          title: 'Layout'
        }, {
          title: 'Overview',
          url: '/container'
        }, {
          title: 'Grid',
          url: '/grid'
        }, {
          title: 'Utilities'
        }, {
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
          title: 'Debugging',
          url: '/debugging'
        }, {
          title: 'Customize'
        }, {
          title: 'CSS variables',
          url: '/css-vars'
        }, {
          title: 'Stylus variables',
          url: '/vars'
        }, {
          title: 'Mixins',
          url: '/mixins'
        }]
      }
    }
  }
</script>

<style lang="stylus">
$sidebar-width = 200px

.menu-col
  max-width: $sidebar-width

.menu
  line-height: gu(2)
  font-family: var(--header-font)
  +media-up('md')
    font-size: 0.8em
    position: fixed
    top: 0
    bottom: 0
    width: $sidebar-width
    overflow: auto

.menu__item
  text-decoration: none
  color: #555
  display: block
  &.nuxt-link-exact-active
    color: black
    color: #5d00ff
    font-weight: bold

.menu__title
  color: #999
  font-size: 1.2em
  margin-top: gu(2)
  font-weight: 300

</style>
