var gulp = require('gulp');
var nib = require('nib');
var invisible = require('@anovi/invisible');
var stylus = require('gulp-stylus');
var rename = require("gulp-rename");
// var minifyCSS = require('gulp-csso');
// var concat = require('gulp-concat');
// var sourcemaps = require('gulp-sourcemaps');

// Get one .styl file and render
gulp.task('stylus', function () {
  return gulp.src('./src/css/index.styl')
    .pipe(stylus({
      use: nib()
    }))
    .pipe(rename("invisible.css"))
    .pipe(gulp.dest('./dist'));
});

gulp.task('compress', function () {
  return gulp.src('./src/css/index.styl')
    .pipe(stylus({
      use: nib(),
      compress: true
    }))
    .pipe(rename("invisible.min.css"))
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

gulp.task('default', [ 'stylus', 'compress' ]);