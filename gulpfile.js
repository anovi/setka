const { series } = require('gulp');
const gulp = require('gulp');

const setka = require('./index.js');
const stylus = require('gulp-stylus');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const src = './lib/setka/setka.styl'
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const headerComment = require('gulp-header-comment');
const zip = require('gulp-zip');
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json'));
const comment = `
Setka CSS Library v<%= pkg.version %>
Author: Alexey Novichkov
License: MIT (https://github.com/anovi/setka/blob/master/LICENSE)
Generated on <%= moment().format('YYYY-MM-DD') %>
`

// Get one .styl file and render
function build() {
    return gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(headerComment(comment))
    .pipe(rename("setka.css"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
};

function buildMini() {
    return gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(stylus({}))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(csso({
        restructure: false,
        sourceMap: true,
        debug: true
    }))
    .pipe(headerComment(comment))
    .pipe(rename("setka.min.css"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
};

function makeZip() {
    return gulp.src('dist/*')
    .pipe(zip(`setka-${pkg.version}-dist.zip`))
    .pipe(gulp.dest('./'))
};

function test() {
    return gulp.src('./test/test-import.styl')
    .pipe(stylus({
        use: setka()
    }))
    .pipe(rename("test-setka.css"))
    .pipe(gulp.dest('./dist'));
};

exports.default = series(build, buildMini, makeZip);