<template>
    <main class="">
        <h1 class="mb-01" id="content">Overview</h1>
        <p class="subheader mt-0">Options for laying out your Setka project, including wrapping containers, a powerful grid system, and responsive utility classes.</p>

        <Header :level="2" name="containers">Containers</Header>
        <p>Containers provide a means to center and horizontally pad your site’s contents. It's not required when using grid system. Use <code class="">.container</code> for a responsive, fixed-width container (meaning its <code>max-width</code> changes at each breakpoint).</p>

        <div class="bd-example">
            <div class="container w-75 example">
                Container
            </div>
        </div>

        <source-code :height="3"><code class="html">&lt;div class="container"&gt;
    &lt;!-- Content here --&gt;
&lt;/div&gt;</code></source-code>

        <p>Use <code>.container-fluid</code> for a full width container, spanning 100% width across all viewport and device sizes.</p>
        <div class="bd-example">
            <div class="container-fluid example">
                Fluid container
            </div>
        </div>

        <source-code :height="3"><code class="html">&lt;div class="container-fluid"&gt;
    ...
&lt;/div&gt;</code></source-code>



        <Header :level="2" name="responsive-breakpoints">Responsive breakpoints</Header>


        <table class="table-bordered table-content">
            <thead>
                <tr>
                    <th>Breakpoint</th>
                    <th>xs</th>
                    <th>sm</th>
                    <th>md</th>
                    <th>lg</th>
                    <th>xl</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Viewport size</td>
                    <td>all sizes</td>
                    <td>
                        ≥ 576px
                    </td>
                    <td>
                        ≥ 768px
                    </td>
                    <td>
                        ≥ 992px
                    </td>
                    <td>
                        ≥ 1200px
                    </td>
                </tr>
                <tr>
                    <td>Classname</td>
                    <td>–</td>
                    <td><code>.*-sm-*</code></td>
                    <td><code>.*-md-*</code></td>
                    <td><code>.*-lg-*</code></td>
                    <td><code>.*-xl-*</code></td>
                </tr>
            </tbody>
        </table>

        <p>Since Setka is mobile first, it uses <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">media queries</a> to create sensible breakpoints for our layouts. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.</p>

        <p>Setka primarily uses the following media query ranges—or breakpoints—in our source Stylus files for grid system and utilities.</p>

        <source-code :height="14"><code class="css">/* Extra small devices (portrait phones, less than 576px) */
/* No media query since this is the default in Setka */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { ... }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }</code>
        <code class="stylus" slot="stylus">+media-up('xs') { ... }
+media-up('sm') { ... }
+media-up('md') { ... }
+media-up('lg') { ... }
+media-up('xl') { ... }

// Example usage:
+media-up('sm')
    .some-class
        display: block

</code></source-code>

        

        <p>We occasionally use media queries that go in the other direction (the given screen size <em>or smaller</em>):</p>

        <source-code :height="14"><code class="css">/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { ... }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { ... }

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { ... }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { ... }

/* Extra large devices (large desktops) */
/* No media query since the extra-large breakpoint has no upper bound on its width */</code>
        <code class="stylus" slot="stylus">+media-down('xs') { ... }
+media-down('sm') { ... }
+media-down('md') { ... }
+media-down('lg') { ... }</code></source-code>

        <div class="bd-callout bd-callout-info">
            <p>
                Note that since browsers do not currently support <a href="https://www.w3.org/TR/mediaqueries-4/#range-context">range context queries</a>, we work around the limitations of <a href="https://www.w3.org/TR/mediaqueries-4/#mq-min-max"><code>min-</code> and <code>max-</code> prefixes</a> and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision for these comparisons.
            </p>
        </div>

        <p>There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.</p>

        <source-code :height="14"><code class="css">/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { ... }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { ... }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }</code>
        <code class="stylus" slot="stylus">+media-only('xs') { ... }
+media-only('sm') { ... }
+media-only('md') { ... }
+media-only('lg') { ... }
+media-only('xl') { ... }</code></source-code>


        <p>Similarly, media queries may span multiple breakpoint widths:</p>

        <source-code :height="3"><code class="css">/* Example */
/* Apply styles starting from medium devices and up to extra large devices */
@media (min-width: 768px) and (max-width: 1199.98px) { ... }</code>
        <code class="stylus" slot="stylus">+media-between('md', 'xl') { ... }</code></source-code>


        <!-- <h2 id="z-index">Z-index</h2>

        <p>Several Setka components utilize <code>z-index</code>, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Setka that’s been designed to properly layer navigation, tooltips and popovers, modals, and more.</p>

        <p>These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors. There’s no reason we couldn’t have used <code>100</code>+ or <code>500</code>+.</p>

        <p>We don’t encourage customization of these individual values; should you change one, you likely need to change them all.</p>

        <source-code><code class="scss">$zindex-dropdown:          1000 !default;
        $zindex-sticky:            1020 !default;
        $zindex-fixed:             1030 !default;
        $zindex-modal-backdrop:    1040 !default;
        $zindex-modal:             1050 !default;
        $zindex-popover:           1060 !default;
        $zindex-tooltip:           1070 !default;</code></source-code>

        <p>To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit <code>z-index</code> values of <code>1</code>, <code>2</code>, and <code>3</code> for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher <code>z-index</code> value to show their border over the sibling elements.</p> -->

    </main>
</template>


<script>
export default {
    head: {
        title: 'Overview'
    },
    mounted() {
        this.buildTOC()
    }
}
</script>
