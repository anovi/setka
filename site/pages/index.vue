<template>
  <main class="container">

    <h1>Getting Started</h1>

    <p>Install:</p>
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
<pre><code>@import '~@anovi/invisible/index.styl'

invisible()  
</code></pre>


  </main>
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

