<template>
  <main class="">
    
    <div class="row">
      <div class="col-lg-10 offset-lg-1 mt-sm-3">
        <h1 class="">Invisible CSS Library</h1>
        <div class="row">
          <div class="col-md-10 col-lg-7">
            <p class="subheader mt-0">Mobile first CSS library with responsive grid layout, baseline grid, and useful utilities.</p>
          </div>
          <div class="col-12 col-md-12 col-lg-4 offset-lg-1">
            <p class="subheader mt-0">
              <nuxt-link class="mr-1 mr-sm-2" to="/start">Read Docs</nuxt-link><br class="d-none d-lg-inline">
              <nuxt-link to="/download">Download</nuxt-link>
            </p>
          </div>
          <div class="w-100 mt-sm-2"></div>
          <div class="col-sm-4">
            <p class="mt-0">No widgets, no decoration, only inivisible stuff that helps you laying out you content.</p>
          </div>

          <div class="col-sm-4 mt-sm-4">
            <p class="mt-0">Based on <a href="https://getbootstrap.com/docs/4.1/layout/overview/" target="_blank">Bootstrap</a> grid. Grid is customizable with Stylus variables.</p>
          </div>

          <div class="col-sm-4">
            <p class="mt-0">Made with <a href="http://stylus-lang.com/" target="_blank">Stylus</a> preprocessor. It's optional, if you need an advanced control.</p>
          </div>

          <div class="col-sm-4">
            <p class="mt-0">Customizable with CSS-variables. Almost every values can be changed: size of grid gutter and spacers, width of container.</p>
          </div>

          <div class="w-100"></div>

          <div class="col-sm-4 offset-sm-2 mt-sm-2">
            <p class="mt-0 mt-sm-01">
              Baseline grid is configured with css-variables and depends from line-height.
              <a href="#" @click.prevent="$store.commit('toggleGrid')">Show baseline grid</a>.
            </p>
          </div>
          
          <div class="col-sm-5 offset-sm-1">
            <h3 class="mt-0">Why</h3>
            <p>If you like to use Bootstrap grid and css-utilities, but you don't need widgets and javascript and decoration styles from it. If you prefer Stylus over Saas. If you don't want to mess with preprocessors at all, but still want some customization.</p>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>


<script>
export default {
  // layout: 'empty'
}
</script>
