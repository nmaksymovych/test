var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('message', function() {
	console.log("I'm initialised my lord!");
})

gulp.task('default', ['browser-sync', 'message']);