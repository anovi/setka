<template>
    <main class="">
        <h1>Baseline grid</h1>
        <p>Setka library utilizes baseline grid for line heights, spacing and overall vertical rythm. It is optional, you can left it.</p>

        <p>Baseline grid originates from number of steps (2 by default) per one line-height of body text. It is regulated by <code>--grid-steps</code> and <code>--line-height</code> variables. I recommend use at least 2 steps or else you won't have enough options for choosing line heights.</p>
        
        <div class="row">
            <div class="col-6">
                <div class="bg-1 p-1 show-grid">
                    <h3 class="my-0 bg-2">Example header</h3>
                    <p class="bg-2 mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus neque asperiores rerum officia non illo. Incidunt sit eveniet perspiciatis
                    </p>
                </div>
            </div>
            <div class="col-6">
                <p class="mt-1">In this example header has <code>line-height</code> of 3 grid units. And body text has <code>line-height</code> of 2 grid units.</p>
            </div>
        </div>
        

        <p>Baseline grid is also responsive, so spacings between blocks too. Try to narrow window under 576px and you will see in the example above that not only size of font will become smaller, but <code>line-height</code> and spacings too.</p>

        <p>When setting baseline grid, make sure that <code>(--line-height / --grid-steps)</code> is round number. Float number cause problems because of rounding. For example, by default <code>--line-height</code> variable is 20px. Then grid unit size will be <em>(20px / 2) = 10px</em>.
        </p>

        <Header :level="2" name="grid-units">Grid units</Header>
        <p><em>Grid unit</em> is a size of step of baseline grid. <nuxt-link to="/spacing">Spacing classes</nuxt-link> by default use grid units to calculate their margins. Value of grid unit can be get from CSS variable <code>--grid-unit</code> or function <code>gu(Number)</code> in Stylus. Formula of grid unit size is: <code>calc(var(--line-height) / var(--grid-steps))</code>.
        </p>

        <p>If you choose to use baseline grid, then use grid units in CSS rules like this:</p>

        <source-code :height="3">
        <code>.some-class {
  margin-bottom: calc(var(--grid-unit) * 8);
}</code>
        <code slot="stylus">.some-class
  margin-bottom: gu(8)</code>
        </source-code>
        

        <p>Example of using grid units:</p>
        <source-code :height="6">
<code>h1 {
  font-size: 2.75rem;
  line-height: calc(var(--grid-unit) * 4);
  margin-top: calc(var(--grid-unit) * 4);
  margin-bottom: calc(var(--grid-unit) * 4);
}</code>
<code slot="stylus">h1
  font-size: 2.75rem
  line-height: gu(4)
  margin-top: gu(4)
  margin-bottom: gu(4)</code>
        </source-code>

    </main>
</template>
