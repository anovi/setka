const gulp = require('gulp');
const invisible = require('./index.js');
const stylus = require('gulp-stylus');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const src = './lib/@anovi/invisible/index.styl'
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');

// Get one .styl file and render
gulp.task('build', function () {
  return gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename("invisible.css"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-mini', function () {
  return gulp.src('./dist/invisible.css')
    .pipe(sourcemaps.init())
    .pipe(stylus({}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csso({
      restructure: false,
      sourceMap: true,
      debug: true
    }))
    .pipe(rename("invisible.min.css"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('test', function () {
  return gulp.src('./test/test-import.styl')
    .pipe(stylus({
      use: invisible()
    }))
    .pipe(rename("test-invisible.css"))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', [ 'build', 'build-mini' ]);