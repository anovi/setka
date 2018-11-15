<template>
  <main class="container">
    
    <div class="row">
      <div class="col-sm-12">
        <img class="logo" src="/logo3.svg" alt="Invisible CSS library">
      </div>
      <div class="col-sm-9 offset-sm-2">
        <h1 class="">Invisible CSS Library</h1>
        <div class="row">
          <div class="col-sm-8">
            
            <p class="subheader mt-0">CSS library based on Bootstrap grid and utilies. Made with Stylus preprocessor (it's optional).</p>
            <p>It has responsive grid layout, baseline grid, utilities, and customization with CSS-variables. No widgets, no decoration, only inivisible stuff to help you layout and form you content.</p>
          </div>
          <div class="col-sm-4">
            <p class="mt-0">
              <nuxt-link to="/start">Read Docs</nuxt-link><br>
              <nuxt-link to="/download">Download</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>


<script>
export default {
  layout: 'empty'
}
</script>
