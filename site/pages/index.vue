<template>
  <main class="">

    
    <div class="grid-12" >
      <div class="col-lg-10 col-start-lg-2">

        <!-- <img class="logo __full my-3 d-none d-md-block" src="logo.svg" alt="Setka"> -->
        <Logo class="my-3 d-none d-md-block" double :animation="2" />

        <div class="grid-12 mt-2 mt-md-0" :class="{'show-cols': $store.state.grid}">
          <div class="col-md-10 col-lg-7">
            <p class="subheader mt-0">Mobile first CSS library with responsive grid layout, baseline grid, and useful utilities.</p>
          </div>
          <div class="col-12 col-md-12 col-lg-4 col-start-lg-9">
            <p class="subheader mt-0">
              <nuxt-link class="mr-1 mr-sm-2" to="/start">Read Docs</nuxt-link><br class="d-none d-lg-inline">
              <nuxt-link to="/download">Download</nuxt-link>
            </p>
          </div>
          <div class="col mt-sm-2"></div>
          <div class="col-sm-4">
            <p class="mt-0">No widgets, no decoration, only tools that helps you laying out you content.</p>
          </div>

          <div class="col-sm-4 mt-sm-4">
            <p class="mt-0">Baseline grid is configureable and depends from line-height. <a href="#" @click.prevent="$store.commit('toggleGrid')">Show baseline grid</a>.</p>
          </div>

          <div class="col-sm-4">
            <p class="mt-0">Made with <a href="http://stylus-lang.com/" target="_blank">Stylus</a> preprocessor, but it's optional! Use it if you need an advanced control, otherwise pure CSS would be perfect!</p>
          </div>

          <div class="col-sm-4">
            <p class="mt-0">Customize with <nuxt-link to="/css-vars">CSS-variables</nuxt-link>. Almost every values can be changed: size of grid gutter and spacers, width of container, baseline grid.</p>
          </div>

          <div class="col"></div>

          <div class="col-sm-4 col-start-sm-3 mt-sm-2">
            <p class="mt-0 mt-sm-01">
              Based on <a href="https://getbootstrap.com/docs/4.1/layout/overview/" target="_blank">Bootstrap</a> grid. Grid is customizable with variables.
            </p>
          </div>
          
          <div class="col-sm-5 col-start-sm-8">
            <!-- <h3 class="mt-0">Why</h3> -->
            <p class="mt-0"><strong>Why to use?</strong> If you like Bootstrap's grid and CSS-utilities, but you don't need it's widgets, javascript and decoration styles. If you prefer Stylus over Saas. Or if you don't want to mess with preprocessors at all, but still need a customization.</p>
          </div>

          <div class="col">
            <a class="link-button" :href="$store.state.data.github" target="_blank">GitHub page</a>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>


<script>
import Logo from '~/components/logo.vue'
export default {
  head: {
    title: 'Setka CSS Library',
    titleTemplate: null,
  },
  components: {
    Logo
  }
}
</script>
