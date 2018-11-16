<template>
  <main class="">

    <h1 class="mb-0">Getting Started</h1>
    <p class="subheader">For production use of Invisible download library's code on <nuxt-link to="/download">downloads page</nuxt-link>.</p>


    <h2>Quick start</h2>
    <p>Copy-paste the stylesheet <code>&lt;link&gt;</code> into your <code>&lt;head&gt;</code> before all other stylesheets to load our CSS. </p>

    <source-code :height="1"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{$store.state.data.cdnLink}}&quot; crossorigin=&quot;anonymous&quot;&gt;
</code></source-code>

    <h2>Starter template</h2>
    <p>
      Use an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:
    </p>

    <source-code :height="17"><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;!-- Required meta tags --&gt;
    <em>&lt;meta charset=&quot;utf-8&quot;&gt;</em>
    <em>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, shrink-to-fit=no&quot;&gt;</em>

    &lt;!-- Invisbile CSS --&gt;
    <em>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{$store.state.data.cdnLink}}&quot; integrity=&quot;sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO&quot; crossorigin=&quot;anonymous&quot;&gt;</em>

    &lt;title&gt;Hello, world!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Content --&gt;

  &lt;/body&gt;
&lt;/html&gt;</code></source-code>

    <p>That’s all you need for overall page requirements.</p>

    <h2>Globals</h2>
    <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.</p>
    
    <h3>Responsive meta tag</h3>
    <p>Invisible is mobile first library. To ensure proper rendering and touch zooming for all devices, <strong>add the responsive viewport meta tag</strong> to your code.</p>
    <source-code :height="1"><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, shrink-to-fit=no&quot;&gt;</code></source-code>

    <h3>Box-sizing</h3>
    <p>To ensure <code>padding</code> does not affect the final computed width of an element, global <code>box-sizing</code> value is swiched from <code>content-box</code> to <code>border-box</code>.</p>
    <source-code :height="3"><code>* {
  box-sizing: border-box;
}</code></source-code>

    <h3>Body font-size and line-height</h3>
    <p>Invisible set this default values for global <code>font-size</code> and <code>line-height</code></p>
    <source-code :height="7"><code>html {
  font-size: var(--font-size);
}

body {
  line-height: var(--line-height);
}</code></source-code>

  </main>
</template>




