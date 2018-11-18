<template>
  <EmptyLayout>
    
    <div class="row">
      <div class="col-sm-3 col-md-2">
        <nav class="menu">
          <nuxt-link to="/">
            <img class="logo" src="logo.svg" alt="Invisible CSS library">
          </nuxt-link>
          <div class="row">
            <div class="col-6 mb-1 mb-sm-01 col-sm-12" v-for="(item, i) in menu" :key="i">
              <div class="menu__title" v-if="item.title">{{item.title}}</div>
              <div v-for="(item, i) in item.items" :key="i">
                <nuxt-link v-if="item.url" class="menu__item" :to="item.url">{{item.title}}</nuxt-link>
              </div>
            </div>
          </div>
          <div class=""><a class="color-text" :href="$store.state.data.github" target="_blank">Github page</a></div>
        </nav>
      </div>
      <div class="col-sm-9 col-md-9">
        <nuxt />
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
        menu: [{
          items: [{
            title: 'Getting started',
            url: '/start'
          }, {
            title: 'Download',
            url: '/download'
          }]
        }, {
          title: 'Layout',
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
          title: 'Utilities',
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
            title: 'Debugging',
            url: '/debugging'
          }]
        }, {
          title: 'Customize',
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
    }
  }
</script>

<style lang="stylus">
$sidebar-width = 200px

.menu-col
  +media-up('sm')
    max-width: $sidebar-width

.menu
  line-height: gu(2)
  font-family: var(--header-font)
  +media-up('sm')
    font-size: 0.8em
    position: fixed
    top: 0
    bottom: 0
    width: ($sidebar-width - 30px)
    overflow: auto

.menu__item
  text-decoration: none
  color: #555
  display: block
  &.nuxt-link-active
  &.nuxt-link-exact-active
    color: black
    color: var(--color-link)
    font-weight: bold

.menu__title
  color: #999
  font-size: 1.2em
  font-weight: 300

</style>
