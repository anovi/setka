<template>
    <main class="">
        <h1>Stylus mixins</h1>
        
        <p>Generates all styles of Setka's.</p>
        <source-code :height="1"><code class="stylus">setka()</code></source-code>

        <p>Gets size of unit of <nuxt-link to="/baseline">baseline grid</nuxt-link>.</p>
        <source-code :height="1"><code class="stylus">gu(1)</code></source-code>

        <p>Do the same as <nuxt-link to="/float#clearfix">.clearfix</nuxt-link> class.</p>
        <source-code :height="1"><code class="stylus">clearfix()</code></source-code>


        <Header :level="2" name="media-queries">Media queries</Header>
        <p>Setka gives <a href="http://stylus-lang.com/docs/mixins.html#block-mixins" target="_blank">block mixins</a> to help you with media queries: <code>+media-up()</code>, <code>+media-down()</code>, <code>+media-between()</code> and <code>+media-only()</code>. They use <code>$grid-breakpoints</code> hash to retrieve values in pixels.</p>

        <Header :level="3"><code class="stylus">+media-up(breakpoint)</code></Header>
        <p>Creates media query of at least the minimum breakpoint width. No query for the smallest breakpoint.</p>
        <source-code :height="14"><code class="stylus">+media-up('sm') { ... }
+media-up('md') { ... }
+media-up('lg') { ... }
+media-up('xl') { ... }

// Example
+media-up('sm')
    .some-class
        display: block

// or
.some-class
    +media-up('sm')
        display: block</code></source-code>

        <Header :level="3"><code class="stylus">+media-down(breakpoint)</code></Header>
        <p>Creates media query of at most the maximum breakpoint width. No query for the largest breakpoint.</p>
        <source-code :height="1"><code class="stylus">+media-down('md') { ... }</code></source-code>

        <Header :level="3"><code class="stylus">+media-between(breakpoint)</code></Header>
        <p>Creates media query that spans multiple breakpoint widths.</p>
        <source-code :height="1"><code class="stylus">+media-between('md', 'lg') { ... }</code></source-code>

        <Header :level="3"><code class="stylus">+media-only(breakpoint)</code></Header>
        <p>Creates media query between the breakpoint's minimum and maximum widths. No minimum for the smallest breakpoint, and no maximum for the largest one.</p>
        <source-code :height="1"><code class="stylus">+media-only('md') { ... }</code></source-code>

        <Header :level="2" name="breakpoint-infix">breakpoint-infix()</Header>
        <p>Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.</p>

        <source-code :height="1"><code class="stylus">breakpoint-infix($name, $breakpoints = $grid-breakpoints)</code></source-code>

        <p>Examples.</p>

        <source-code :height="5"><code class="stylus">breakpoint-infix('xs', (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
// "" (Returns a blank string)

breakpoint-infix('sm', (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
// "-sm"
</code></source-code>
        

        <Header :level="2" name="custom-utilities">Build custom utilities</Header>
        
        <p>With <code>+media-breakpoint-up()</code> and <code>breakpoint-infix()</code> you can create you own responsive utilities. This example shows how standard <nuxt-link to="/flex">flex utilities</nuxt-link> are created.</p> 
        <source-code :height="7"><code class="stylus">for $breakpoint in keys($grid-breakpoints)
    +media-breakpoint-up($breakpoint)
      $infix = breakpoint-infix($breakpoint, $grid-breakpoints)
        .flex{$infix}-row            { flex-direction: row !important; }
        .flex{$infix}-column         { flex-direction: column !important; }
        .flex{$infix}-row-reverse    { flex-direction: row-reverse !important; }
        .flex{$infix}-column-reverse { flex-direction: column-reverse !important; }
</code></source-code>

        <p>It generates a bunch of classes: <code>.flex-row</code>, <code>.flex-sm-row</code>, <code>.flex-md-row</code>, and so on.</p>

    </main>
</template>


<script>
export default {
    head: {
        title: 'Mixins'
    },
    mounted() {
        this.buildTOC()
    }
}
</script>
