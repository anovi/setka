<template>
    <div class="container">
        <h1>CSS variables</h1>
        <p>With CSS variable you can custumize library to some decent level. You don't event need to use a preprocessor. Use Stylus only if you need an advanced control.</p>
        <!-- <p>Pros of using CSS variables. </p> -->
        

        <p>Defaults of CSS variables:</p>
        <pre><code>:root {
    --font-size: 16px;         /* Size of body text */
    --line-height: 1.25rem;    /* Line height of body text */

    --grid-unit-lines: 2;      /* Amount of grid units per line of text */
    --grid-gutter-width: 30px; /* Gutter of grid collumns */

    --grid-unit: calc(var(--line-height) / var(--grid-unit-lines));
    /* Grid unit size. Do not change the formula. Use it in your calculations */
    /* 0,625rem (default) */
    

    --container-sm: 540px;     /* Max width of .container on different breakpoints */
    --container-md: 720px;
    --container-lg: 960px;
    --container-xl: 1140px;
}</code></pre>
        
        <p>Library uses theese variables as values of css-rules and inside <code>calc()</code> function. Great thing is that you can have different values on different screen sizes:</p>
        <pre><code>:root {
    --font-size: 20px;
    --line-height: 24px;
}

/* Lets make font-size smaller on smaller screens */
@media (max-width: 768px) {
    :root {
        --font-size: 15px;
        --line-height: 20px;
    }
}</code></pre>

        <p>Or the same with Stylus:</p>
        <pre><code>:root
    --font-size: 20px;
    --line-height: 24px;
    +media-down('sm')
        --font-size: 15px;
        --line-height: 20px;</code></pre>

        <h2>--grid-unit</h2>
        <p>This variable depends from other parameters: <code>--font-size</code> and <code>--line-height</code>. Use it in your calculations, for example you want to make a bottom margin equal to 8 grid units:</p>
        <pre><code>.some-class {
    margin-bottom: calc(--grid-unit * 8);
}</code></pre>
        




    </div>
</template>
