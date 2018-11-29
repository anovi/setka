const gulp = require('gulp');
const setka = require('./index.js');
const stylus = require('gulp-stylus');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const src = './lib/setka/setka.styl'
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');

// Get one .styl file and render
gulp.task('build', function () {
  return gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename("setka.css"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-mini', function () {
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
    .pipe(rename("setka.min.css"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('test', function () {
  return gulp.src('./test/test-import.styl')
    .pipe(stylus({
      use: setka()
    }))
    .pipe(rename("test-setka.css"))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', [ 'build', 'build-mini' ]);