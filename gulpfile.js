var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  notify = require("gulp-notify"),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer')

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


//////////TASKNAME/////////DEPENDENCY TASK FOR THIS TASK////
gulp.task('runmyproject', ['browser-sync', 'sass'], function(){

  gulp.src("./*").pipe(notify({
    message: "I'm Initialized My Lord!",
    onLast: true
  }));
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch("./**/*.html").on('change', browserSync.reload);
});

