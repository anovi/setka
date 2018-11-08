<template>
  <div class="layout">
      <div class="layout__sidebar">
        <nav class="menu">
          <div class="container">
            <strong class="d-block mt-2 mb-2">Invisible CSS library</strong>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menu: [{
          title: 'Getting started',
          url: '/'
        }, {
          title: 'Download',
          url: '/install'
        }, {
          title: 'Baseline grid',
          url: '/baseline'
        }, {
          title: 'Use library'
        }, {
          title: 'Grid',
          url: '/grid'
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

.layout__sidebar
  background: #fafafa;
  border-right: 1px solid #eee;

.menu
  line-height: gu(3)
  font-family: 'Helvetica', 'Helvetica Neue', 'Arial', sans-serif
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

</style>
