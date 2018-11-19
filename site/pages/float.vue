<template>
    <main>
        <h1 class="mb-0">Float</h1>
        <p class="subheader mt-01">Toggle floats on any element, across any breakpoint.</p>

        <div class="row">
            <div class="col-auto">
                <format-table :items="float" />
            </div>
            <div class="col-auto">
                <format-table :items="[{items: ['.clearfix']}]" />
            </div>
        </div>
        

        <p>These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">CSS <code class="">float</code> property</a>. <code class="">!important</code> is included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware float utilities have no affect on flex items.</p>

        <Header :level="2" name="examples">Examples</Header>

        <div class="example p-1">
            <div class="float-left">Float left on all viewport sizes</div><br>
            <div class="float-right">Float right on all viewport sizes</div><br>
            <div class="float-none">Don't float on all viewport sizes</div>
        </div>

        <source-code :height="3"><code class="language-html" data-lang="html">&lt;div class="<em>float-left</em>"&gt;Float left on all viewport sizes&lt;/div&gt;&lt;br&gt;
&lt;div class="<em>float-right</em>"&gt;Float right on all viewport sizes&lt;/div&gt;&lt;br&gt;
&lt;div class="<em>float-none</em>"&gt;Don't float on all viewport sizes&lt;/div&gt;</code></source-code>

        <p>Responsive variations also exist for each <code>float</code> value.</p>

        <div class="example p-1">
            <div class="float-sm-right">Float right on viewports sized SM (small) or wider</div><br>
            <div class="float-md-left">Float left on viewports sized MD (medium) or wider</div><br>
            <div class="float-lg-right">Float right on viewports sized LG (large) or wider</div><br>
            <div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
        </div>

        <source-code :height="4"><code class="language-html" data-lang="html">&lt;div class="<em>float-sm-right</em>"&gt;Float right on viewports sized SM (small) or wider&lt;/div&gt;&lt;br&gt;
&lt;div class="<em>float-md-left</em>"&gt;Float left on viewports sized MD (medium) or wider&lt;/div&gt;&lt;br&gt;
&lt;div class="<em>float-lg-right</em>"&gt;Float right on viewports sized LG (large) or wider&lt;/div&gt;&lt;br&gt;
&lt;div class="<em>float-xl-left</em>"&gt;Float left on viewports sized XL (extra-large) or wider&lt;/div&gt;&lt;br&gt;</code></source-code>

        <Header :level="2" name="clearfix">Clearfix</Header>
        <p>Easily clear <code class="">float</code>s by adding <code class="">.clearfix</code> <strong>to the parent element</strong>. Can also be used as a Stylus mixin.</p>

        <source-code :height="2">
            <code class="language-html" data-lang="html">&lt;div class="clearfix"&gt;...&lt;/div&gt;</code>
            <code slot="stylus">.some-element
    clearfix()
            </code>
        </source-code>

        <p>The following example shows how the clearfix can be used.</p>

        <div class="example clearfix">
            <div class="bg-2 float-left">Example Button floated left</div>
            <div class="bg-2 float-right">Example Button floated right</div>
        </div>

        <source-code :height="4"><code class="language-html" data-lang="html">&lt;div class="example <em>clearfix</em>"&gt;
  &lt;div class="bg-2 float-left"&gt;Example Button floated left&lt;/div&gt;
  &lt;div class="bg-2 float-right"&gt;Example Button floated right&lt;/div&gt;
&lt;/div&gt;</code></source-code>

        <p>Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.</p>
        <div class="example mb-4">
            <div class="bg-2 float-left">Example Button floated left</div>
            <div class="bg-2 float-right">Example Button floated right</div>
        </div>


    </main>
</template>


<script>
export default {
    data() {
        return {
            float: [
                { items: ['.float-'], align: 'right' },
                { items: [ null, 'sm-', 'md-', 'lg-', 'xl-'] },
                { items: ['left','right','none'] }
            ],
        }
    },
    mounted() {
        this.buildTOC()
    }
}
</script>
