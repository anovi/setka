const gulp = require('gulp');
const setka = require('setka');
const stylus = require('gulp-stylus');

gulp.task('build', function () {
  return gulp.src('./styles.styl')
    .pipe(stylus({
      use: setka()
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', [ 'build' ]);