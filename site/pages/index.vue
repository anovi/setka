<template>
  <main class="container" style="max-width: 45rem;">

    <h1>Invisible CSS Library</h1>
    <p class="subheader">CSS library based on Bootstrap grid and utilies. Made with Stylus preprocessor (it's optional).</p>
    <p>It has responsive grid layout, baseline grid, utilities, and customization with CSS-variables. No widgets, no decoration, only inivisible stuff to help you layout and form you content.</p>

  </main>
</template>


<style lang="stylus" scoped>
@import '~~@@/lib/@anovi/invisible/index.styl'
  h1, h2, h3, p
    background-color: rgba(226, 108, 108, 0.15)
</style>


<script>
export default {
  layout: 'empty'
}
</script>
