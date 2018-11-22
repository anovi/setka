<template>
    <main class="">
        <h1 class="mb-0">Stylus variables</h1>
        <p class="subheader">With stylus you can change number of grid columns, breapoints ans other utilities.</p>
        <p>These are all available Stylus variables.</p>

<source-code :height="40"><code>// Amount of columns in grid 
// Example: if you set it to 16, than classes like .col-16 .col-sm-16 will be available
<em>$grid-columns</em> = 12

// Amount of columns in grid.
<em>$grid-breakpoints</em> = {
    xs: 0,     // Extra small screen / phone
    sm: 576px, // Small screen / phone
    md: 768px, // Medium screen / tablet
    lg: 992px, // Large screen / desktop
    xl: 1200px // Extra large screen / wide desktop
}

<em>$container-max-widths</em> = {
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px
}

// Sized for width (.w-50) and height (.h-100) utilities
<em>$sizes</em> = {
    '25': 25%,
    '50': 50%,
    '75': 75%,
    '100': 100%,
    auto: auto
}

// Settings for spacing utilities
<em>$spacers</em> = {
    '0':    0,
    '01':   gu(1),
    '1':    var(--space-1),
    '2':    var(--space-2),
    '3':    var(--space-3),
    '4':    var(--space-4),
    '5':    var(--space-5)
    'auto': s('auto')
}</code></source-code>

        <p>To generate styles with you settings:</p>
        <source-code :height="15"><code>// Import library
<em>@import 'setka'</em>

// Set variables
<em>$grid-breakpoints</em> = {
    xs: 0, 
    sm: 400px, 
    md: 600px,
    lg: 800px,
    xl: 1050px,
    hd: 1800px
}

// Then generate Setka's styles
<em>setka()</em>
</code></source-code>


    </main>
</template>
