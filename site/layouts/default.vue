<template>
  <div class="layout">
      <div class="layout__sidebar">
        <nav class="menu">
          <strong class="d-block mt-2 mb-2">Invisible CSS library</strong>
          <div v-for="(item, i) in menu" :key="i">
            <nuxt-link class="menu__item" :to="item.url">{{item.title}}</nuxt-link>
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
          title: 'CSS variables',
          url: '/css-vars'
        }]
      }
    }
  }
</script>

<style lang="stylus">
@import '~~@@/lib/@anovi/invisible/index.styl'

#__nuxt
  min-height: 100vh;

$sidebar-width = 220px
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
  +media-up('md')
    position: fixed
    top: 0
    bottom: 0
    left: 0
    width: $sidebar-width
    overflow: auto
    padding: 0 10px

.menu__item
  text-decoration: none
  color: #444
  &.nuxt-link-exact-active
    color: blue

.layout__main
  +media-up('sm')
    padding: 0 30px

body
  padding: 0;
  margin: 0;

</style>
