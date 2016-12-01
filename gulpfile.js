const gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', ['webserver']);

gulp.task('webserver', function() {
  gulp.src('./dist/')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: 'index.html'
    }));
});

gulp.task('compress', function () {
  return gulp.src('./src/style.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./dist/css'));
});
