<template>
    <div class="container">
        <h1>Stylus variables</h1>

<pre><code>
$grid-columns = 12
$grid-gutter-width = 30px
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

$sizes = {
    '25': 25%,
    '50': 50%,
    '75': 75%,
    '100': 100%,
    auto: auto
}

$grid-unit-lines = 2

$spacers = {
    '0': 0,
    '01':   gu(1),
    '1':    gu(s('var(--grid-unit-lines) * 1')),
    '2':    gu(s('var(--grid-unit-lines) * 2')),
    '3':    gu(s('var(--grid-unit-lines) * 3')),
    '4':    gu(s('var(--grid-unit-lines) * 4')),
    'auto': s('auto')
}

$show-grid = false</code></pre>






    </div>
</template>
