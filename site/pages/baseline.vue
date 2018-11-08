<template>
    <main class="container">
        <h1>Baseline grid</h1>
        <p>Invisible library utilizes baseline grid for line heights, spacing and overall vertical rythm. It is optional, you can left it.</p>

        <p>Baseline grid originates from number of steps (2 by default) per one line-height of body text. I recommend use at least 2 steps or else you won't have enough options for choosing line heights.</p>

        <p>When setting baseline grid, make sure that <em>(--line-height / --grid-unit-lines)</em> is round number. Float number cause problems because of rounding. For example, by default <code>--line-height</code> is 20px (1.25rem from 16px). Then one grid unit will be <em>(20px / 2) = 10px</em>.
        </p>


        <h2>Grid units</h2>
        <p>Grid unit is a size of step of baseline grid. <nuxt-link to="/spacing">Spacing classes</nuxt-link> use grid units to calculate their value. Value of grid unit can be get from CSS variable <code>--grid-unit</code> or function <code>gu(Number)</code> in Stylus</p>

        <p>If you choose to use baseline grid, then use grid units in CSS rules like this:</p>

        <pre><code>.some-class {
    margin-bottom: calc(--grid-unit * 8);
}</code></pre>
        <p>In Stylus:</p>
        <pre><code>.some-class
    margin-bottom: gu(8)</code></pre>
        <p>
        <!-- --line-height: 1.25rem; -->
        <!-- --grid-unit-lines: 2;  -->
        Formula of grid unit is:
        <code>calc(var(--line-height) / var(--grid-unit-lines))</code>
        </p>

        

        <h3>Examples</h3>
        <pre><code>h1 {
  font-size: 2.75rem;
  line-height: calc(var(--grid-unit) * 4);
  margin-top: calc(var(--grid-unit) * 4);
  margin-bottom: calc(var(--grid-unit) * 4);
}</code></pre>
        <pre><code>h1
  font-size: 2.75rem
  line-height: gu(4)
  margin-top: gu(4)
  margin-bottom: gu(4)</code></pre>


    </main>
</template>
