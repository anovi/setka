<template>
    <main class="">


        <h1>Debugging</h1>

        <Header :level="2" name="show-columns">Show columns</Header>
        <p>
            If you need to paint grid columns for developers needs, add <code>.show-cols</code> class to <code>.container</code> or <code>.row</code> element:
        </p>
        
        <div class="row show-cols justify-content-start">
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
        </div>
        <div class="row show-cols justify-content-center">
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
        </div>
        <div class="row show-cols justify-content-end">
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
        </div>
        <div class="row show-cols justify-content-around">
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
        </div>
        <div class="row show-cols justify-content-between">
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
            <div class="col-4">
            <div class="example p-1">
                One of two columns
            </div>
            </div>
        </div>
    

        <Header :level="2" name="show-baseline-grid">Show baseline grid</Header>
        <p>
            If you want to check that your content follows the baseline grid, use <code>.show-grid-bg</code> or <code>.show-grid</code> classes on <code>&lt;body&gt;</code> or other container:
        </p>
        <div class="bg-1 p-1 show-grid w-50">
            <h3 class="my-0 bg-2">Example header</h3>
            <p class="bg-2 mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus neque asperiores rerum officia non illo. Incidunt sit eveniet perspiciatis
            </p>
        </div>
        <source-code :height="3"><code class="html">&lt;div class=&quot;p-1 w-50 <em>show-grid</em>&quot;&gt;
    ...
&lt;/div&gt;</code></source-code>

        <p>Be aware that <code>.show-grid</code> uses <code>:after</code> psewdo element.</p>
        





    </main>
</template>
