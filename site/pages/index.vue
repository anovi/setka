<template>
  <div>

    <div class="container">
      <h1 class="mt-sm-1 mt-4">Getting Started</h1>
      Install:
<pre>
npm i @anovi/invisible
</pre>
<p><strong>If you use CSS only</strong> connect this styles to your page:</p>
<pre><code>@anovi/invisible/dist/invisible.css
@anovi/invisible/dist/invisible.min.css
</code></pre>
<p>
  Then, set up variables:
</p>
<pre><code>:root {
  --font-size: 16px;         /* Basic font-size */
  --line-height: 1.25rem;    /* Basic line-height */
  --grid-unit-lines: 2;      /* Amount of grid units per row of basic text */
  --grid-gutter-width: 30px; /* Grid gutter width */
}
</code></pre>

<p><strong>If you use stylus</strong>, import the library:</p>
<pre><code>@anovi/invisible/index.styl
</code></pre>
<p>
  Then, set up Stylus variables.
</p>
<pre><code>$grid-columns = 12
$grid-gutter-width = 30px

$grid-breakpoints = {
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: 576px,
  // Medium screen / tablet
  md: 768px,
  // Large screen / desktop
  lg: 992px,
  // Extra large screen / wide desktop
  xl: 1200px
}

$container-max-widths = {
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px
}
</code></pre>


    </div>

  </div>
</template>


<style lang="stylus">
@import '~~@@/lib/@anovi/invisible/index.styl'

.example.col, .example[class^=col-] {
  padding-top: gu(1);
  padding-bottom: gu(1);
  background-color: rgba(86,61,124,.15);
  box-shadow: inset 0 0 0 1px rgba(86,61,124,.2);
}
.colored-row {
  margin-top: gu(2)
  height: gu(12)
  background: rgba(255,0,0,0.1)
}
</style>

