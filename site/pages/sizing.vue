<template>
    <main class="">
        <h1>Sizing</h1>

        <div class="grid-12">
            <div class="col-auto">
                <p class="mt-0">
                    width and height
                </p>
                <format-table :items="$store.state.classes.sizing.widths" />
            </div>
            <div class="col-auto">
                <p class="mt-0">
                    max-width and max-height
                </p>
                <format-table :items="$store.state.classes.sizing.maxWidths" />
            </div>
        </div>

        <p>
        Includes support for 25%, 50%, 75%, 100%, and auto by default. Modify those values as you need to generate different utilities here. Use like this <code>.w-25</code>, <code>.h-50</code> and so on.
        </p>

        <p>This:</p>
        <source-code :height="5"><code class="html">&lt;div class=&quot;w-25 p-01 example&quot;&gt;Width 25%&lt;/div&gt;
&lt;div class=&quot;w-50 p-01 example&quot;&gt;Width 50%&lt;/div&gt;
&lt;div class=&quot;w-75 p-01 example&quot;&gt;Width 75%&lt;/div&gt;
&lt;div class=&quot;w-100 p-01 example&quot;&gt;Width 100%&lt;/div&gt;
&lt;div class=&quot;w-auto p-01 example&quot;&gt;Width auto&lt;/div&gt;
</code></source-code>
        <p>…will result to this:</p>
        <div class="w-25 p-01 example">Width 25%</div>
        <div class="w-50 p-01 example">Width 50%</div>
        <div class="w-75 p-01 example">Width 75%</div>
        <div class="w-100 p-01 example">Width 100%</div>
        <div class="w-auto p-01 example">Width auto</div>

         <p>There is also max-width classes:</p>
        <source-code :height="2"><code class="css">.mw-100 { max-width: 100% !important; }
.mh-100 { max-height: 100% !important; }
</code></source-code>

    </main>
</template>


<script>
export default {
    head: {
        title: 'Sizing'
    }
}
</script>
