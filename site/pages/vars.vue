<template>
    <main class="">
        <h1>Stylus variables</h1>

<source-code :height="34"><code>$grid-columns = 12
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

    </main>
</template>
