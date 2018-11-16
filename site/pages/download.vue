<template>
    <main class="">

        <h1 class="mb-0">Download or install</h1>
        
        <p class="subheader">
            Download compiled CSS<br>
            <a href="https://github.com/anovi/invisible/archive/v0.0.10.zip">Download source files</a>
        </p>
        
        <h2 class="mt-3">CDN</h2>
        <p>Add this to you <code>&lt;head&gt;</code> section to deliver cached version of Invisible's compiled CSS to your project.</p>
        <source-code :height="1"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{$store.state.data.cdnLink}}&quot; crossorigin=&quot;anonymous&quot;&gt;
</code></source-code>

        <h2 class="mt-3">Install with NPM</h2>
<source-code :height="1"><code>npm install @anovi/invisible</code></source-code>





    </main>
</template>
