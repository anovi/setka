<template>
    <main class="">
        <h1>CSS variables</h1>

        <p>With CSS variable you can custumize library to some decent level. You don't event need to use a preprocessor. Use Stylus only if you need an advanced control.</p>
        <!-- <p>Pros of using CSS variables. </p> -->
        

        <p>Defaults of CSS variables:</p>
        <source-code :height="27"><code class="css">:root {
    /* Settings of body text */
    --font-size: 16px;
    --line-height: 20px;

    /* Amount of grid steps per one line of text */
    --grid-steps: 2;

    /* Grid unit size. Use it in your calculations */
    --grid-unit: calc(var(--line-height) / var(--grid-steps));
    
    /* Gutter of grid collumns */
    --grid-gutter-width: 30px;

    /* Max width of .container on different breakpoints */
    --container-sm: 540px;
    --container-md: 720px;
    --container-lg: 960px;
    --container-xl: 1140px;

    /* Size of spacers. By default it uses line-height size */
    --space-1: calc(var(--line-height) * 1);
    --space-2: calc(var(--line-height) * 2);
    --space-3: calc(var(--line-height) * 3);
    --space-4: calc(var(--line-height) * 4);
    --space-5: calc(var(--line-height) * 5);
}</code></source-code>
        
        <p>Library uses theese variables as values of css-rules and inside <code>calc()</code> function. Great thing is that you can have different values on different screen sizes:</p>

        <source-code :height="12"><code class="css">:root {
    --font-size: 20px;
    --line-height: 24px;
}

/* Lets make font-size smaller on smaller screens */
@media (max-width: 768px) {
    :root {
        --font-size: 15px;
        --line-height: 20px;
    }
}</code>
        <code slot="stylus" class="stylus">:root
    --font-size: 20px
    --line-height: 24px
    +media-down('sm')
        --font-size: 15px
        --line-height: 20px</code>
        </source-code>


        <Header :level="2" name="grid-unit">--grid-unit</Header>
        <p>This variable depends from other parameters: <code>--line-height</code> and <code>--grid-steps</code>. Use it in your calculations, for example you want bottom margin is equal to 8 grid units:</p>
        <source-code :height="3"><code class="css">.some-class {
    margin-bottom: calc(--grid-unit * 8);
}</code></source-code>
    
    </main>
</template>


<script>
export default {
    head: {
        title: 'CSS variables'
    },
}
</script>
