<template>
    <main class="">
        <h1>Stylus mixins</h1>

        <p>Generates all styles of Setka's.</p>
        <source-code><code>setka()</code></source-code>

        <p>Gets size of unit of <nuxt-link to="/baseline">baseline grid</nuxt-link>.</p>
        <source-code><code>gu(1)</code></source-code>


        <Header :level="2" name="media-queries">Media queries</Header>
        <p>Setka gives <a href="http://stylus-lang.com/docs/mixins.html#block-mixins" target="_blank">block mixins</a> to help you with media queries: <code>+media-up()</code>, <code>+media-down()</code>, <code>+media-between()</code> and <code>+media-only()</code>. They use <code>$grid-breakpoints</code> hash to retrieve values in pixels.</p>

        <Header :level="3"><code>+media-up(breakpoint)</code></Header>
        <p>Creates media query of at least the minimum breakpoint width. No query for the smallest breakpoint.</p>
        <source-code :height="14"><code>+media-up('sm') { ... }
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

        <Header :level="3"><code>+media-down(breakpoint)</code></Header>
        <p>Creates media query of at most the maximum breakpoint width. No query for the largest breakpoint.</p>
        <source-code :height="1"><code>+media-down('md') { ... }</code></source-code>

        <Header :level="3"><code>+media-between(breakpoint)</code></Header>
        <p>Creates media query that spans multiple breakpoint widths.</p>
        <source-code :height="1"><code>+media-between('md', 'lg') { ... }</code></source-code>

        <Header :level="3"><code>+media-only(breakpoint)</code></Header>
        <p>Creates media query between the breakpoint's minimum and maximum widths. No minimum for the smallest breakpoint, and no maximum for the largest one.</p>
        <source-code :height="1"><code>+media-only('md') { ... }</code></source-code>

        <Header :level="2" name="breakpoint-infix">breakpoint-infix()</Header>
        <p>Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.</p>

        <source-code :height="1"><code>breakpoint-infix($name, $breakpoints = $grid-breakpoints)</code></source-code>

        <p>Examples.</p>

        <source-code :height="5"><code><em>breakpoint-infix('xs', (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))</em>
// "" (Returns a blank string)

<em>breakpoint-infix('sm', (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))</em>
// "-sm"
</code></source-code>
        

        <Header :level="2" name="custom-utilities">Custom utilities</Header>
        
        <p>With <code>+media-breakpoint-up()</code> and <code>breakpoint-infix()</code> you can create you own responsive utilities. This example shows how standard <nuxt-link to="/flex">flex utilities</nuxt-link> was created.</p> 
        <source-code :height="7"><code>for $breakpoint in keys($grid-breakpoints)
    +media-breakpoint-up($breakpoint)
      $infix = breakpoint-infix($breakpoint, $grid-breakpoints)
        .flex{$infix}-row            { flex-direction: row !important; }
        .flex{$infix}-column         { flex-direction: column !important; }
        .flex{$infix}-row-reverse    { flex-direction: row-reverse !important; }
        .flex{$infix}-column-reverse { flex-direction: column-reverse !important; }
</code></source-code>

        <p>It generates a bunch of classes: <code>.flex-row</code>, <code>.flex-sm-row</code>, and so on.</p>

    </main>
</template>


<script>
export default {
    mounted() {
        this.buildTOC()
    }
}
</script>
