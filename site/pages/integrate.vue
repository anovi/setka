<template>
    <main>

        <h1 class="mb-01">Integrate code</h1>
        <p class="subheader mt-0">Integrate Setka's code into your project’s bundling process. You will find all of these in the <a href="https://github.com/anovi/setka/tree/master/examples" target="_blank">examples directory</a> of the repository.</p>

        <Header :level="2" name="webpack">Webpack</Header>

        <Header :level="3" name="webpack-stylus">Importing Stylus</Header>
        <p>To have the full potential and customization of Setka, use the source files as a part of your project’s bundling process.</p>

        <p>Import Setka, override <nuxt-link to="/vars">built-in variables</nuxt-link>, then generate Setka's styles:</p>

        <source-code :height="6"><code class="stylus">@import "~setka/index"

// Set variables            

// Generaate Setka's styles
setka()</code></source-code>

    <p>For compiling styles, install and use the required loaders: <a href="https://github.com/shama/stylus-loader" target="_blank">stylus-loader</a>, <a href="https://github.com/postcss/postcss-loader" target="_blank">postcss-loader</a> with <a href="https://github.com/postcss/autoprefixer#webpack" tabindex="_blank">Autoprefixer</a>. Minimal setup, your webpack config should include this rule or similar in <code>module: { rules: [...] }</code>:</p>

    <source-code :height="23"><code class="javascript">...
module: {
    rules: [{
        test: /\.(styl)$/,
        use: [{
            loader: 'style-loader', // inject CSS to page
        }, {
            loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
                plugins: function () {
                    return [
                        require('autoprefixer')
                    ];
                }
            }
        }, {
            loader: 'stylus-loader' // compiles Stylus to CSS
        }]
    }]
},
...</code></source-code>




        <Header :level="3" name="webpack-css">Importing CSS</Header>

        <p>Alternatively, you may use Bootstrap’s ready-to-use CSS by simply adding this line to your project’s entry point:</p>

        <source-code :height="1"><code class="javascript">import 'setka/dist/setka.min.css';</code></source-code>

        <p>In this case you may use your existing rule for <code class="">css</code> without any special modifications to webpack config, and you only need <a href="https://github.com/webpack-contrib/style-loader">style-loader</a> and <a href="https://github.com/webpack-contrib/css-loader">css-loader</a>.</p>

        <source-code :height="9"><code class="javascript">...
module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}
...</code></source-code>


        <Header :level="2" name="gulp">Gulp</Header>

        <p>For building CSS from source code with <a href="https://gulpjs.com/" target="_blank">Gulp</a>, minimal <code>gulpfile.js</code> configuration should be:</p>

        <source-code :height="13"><code class="javscript">const gulp = require('gulp');
const setka = require('setka');
const stylus = require('gulp-stylus');

gulp.task('build', function () {
  return gulp.src('./styles.styl')
    .pipe(stylus({
      use: setka()
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', [ 'build' ]);</code></source-code>

        <p>And in <code>styles.styl</code> import Setka and build CSS:</p>
        <source-code :height="6"><code class="stylus">@import 'setka'

// Set variables

// Build Setka's CSS
setka()</code></source-code>



    </main>
</template>


<script>
export default {
    head: {
        title: 'Integrate code'
    },
    mounted() {
        this.buildTOC()
    }
}
</script>
