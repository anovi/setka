<template>
  <div class="layout" :class="{ 'show-grid': grid, __grid: grid}">
      <div class="layout__sidebar">
        <nav class="menu">
          <div class="container">
            <nuxt-link to="/">
              <img class="logo" src="/logo3.svg" alt="Invisible CSS library">
            </nuxt-link>
            <div v-for="(item, i) in menu" :key="i">
              <nuxt-link v-if="item.url" class="menu__item" :to="item.url">{{item.title}}</nuxt-link>
              <div v-else class="menu__title">{{item.title}}</div>
            </div>
          </div>
        </nav>
      </div>
      <div class="layout__main">
        <nuxt />
      </div>
      <div class="layout__grid"><div class="layout__grid-button" :class="{ __active: grid }" v-on:click="grid = !grid" /><br><span class="layout__grid-title">Grid</span></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import FormatTable from '~/components/format-table'
  Vue.component('format-table', FormatTable)

  export default {

    data() {
      return {
        grid: false,
        wHeight: '0',
        menu: [{
          title: 'Getting started',
          url: '/start'
        }, {
          title: 'Download',
          url: '/install'
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
@import '~~@@/lib/@anovi/invisible/index.styl'
@import '~@/assets/vars.styl'

#__nuxt
  min-height: 100vh;

$sidebar-width = 200px
.layout
  min-height: 100vh;
  max-width: 100vw;
  display: grid;
  grid-template-columns: $sidebar-width minmax(100px, 100%);
  +media-down('sm')
    grid-template-columns: 100%;

  &.__grid
    h1, h2, h3, h4, h5, h6
    p, ul, ol, pre
      background-color: rgba(226, 108, 108, 0.15)

.layout__sidebar
  background: #fafafa;
  border-right: 1px solid #eee;

.menu
  line-height: gu(3)
  font-family: $headerFont
  +media-up('md')
    font-size: 0.8em
    position: fixed
    top: 0
    bottom: 0
    left: 0
    width: $sidebar-width
    overflow: auto

.menu__item
  text-decoration: none
  color: #555
  display: block
  &.nuxt-link-exact-active
    color: black
    font-weight: bold

.menu__title
  color: #999
  font-size: 1.2em
  margin-top: gu(2)
  font-weight: 300

.layout__main
  +media-up('md')
    padding: 0 30px

body
  padding: 0;
  margin: 0;
  // -webkit-font-smoothing: antialiased;

.layout__grid
  position fixed
  top: gu(1)
  right: gu(1)
  font-family: $headerFont
  color: gray
  font-size: 12px
  line-height: gu(1)
  text-align: center
  z-index: 99999999999999
.layout__grid-title
  position: relative
  top: 5px
.layout__grid-button
  width: 44px
  height: 24px
  border-radius: 15px
  background: #444
  display: inline-block
  position: relative
  vertical-align: bottom
  margin-left: 2px
  &:after
    content: ''
    display: block
    width: 20px
    height: 20px
    border-radius: 10px
    background: #eee
    position: absolute
    left: 2px
    top: 2px
    z-index: 1
  &.__active
    background: blue
    &:after
      left: 22px

.logo
  height: gu(5)
  margin-top: gu(1)
  margin-bottom: gu(2)

</style>
