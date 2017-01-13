var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  notify = require("gulp-notify")

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

//////////TASKNAME/////////DEPENDENCY TASK FOR THIS TASK////
gulp.task('runmyproject', ['browser-sync'], function(){
  gulp.src("./*").pipe(notify({
    message: "I'm Initialized My Lord!",
    onLast: true
  }));
});

