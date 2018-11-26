<template>
    <main class="">
        <h1 class="mb-0">Stylus variables</h1>
        <p class="subheader">With stylus you can change number of grid columns, breapoints ans other utilities.</p>
        <p>These are all available Stylus variables.</p>

<source-code :height="40"><code class="stylus">// Amount of columns in grid 
// Example: if you set it to 16, than classes like .col-16 .col-sm-16 will be available
$grid-columns = 12

// Amount of columns in grid.
$grid-breakpoints = {
    xs: 0,     // Extra small screen / phone
    sm: 576px, // Small screen / phone
    md: 768px, // Medium screen / tablet
    lg: 992px, // Large screen / desktop
    xl: 1200px // Extra large screen / wide desktop
}

$container-max-widths = {
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px
}

// Sized for width (.w-50) and height (.h-100) utilities
$sizes = {
    '25': 25%,
    '50': 50%,
    '75': 75%,
    '100': 100%,
    auto: auto
}

// Settings for spacing utilities
$spacers = {
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
        <source-code :height="15"><code class="stylus">// Import library
@import 'setka'

// Set variables
$grid-breakpoints = {
    xs: 0, 
    sm: 400px, 
    md: 600px,
    lg: 800px,
    xl: 1050px,
    hd: 1800px
}

// Then generate Setka's styles
setka()
</code></source-code>


    </main>
</template>


<script>
export default {
    head: {
        title: 'Stylus variables'
    },
}
</script>
