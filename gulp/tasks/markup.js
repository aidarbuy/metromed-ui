var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config').markup;

gulp.task('markup', function() {
  return gulp.src(config.src)
  	// .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest));
});
