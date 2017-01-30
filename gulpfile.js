var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    notify = require("gulp-notify"),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imageop = require('gulp-image-optimization');

var paths = {
      sassInputFiles: ['./sass/*.scss'],
      cssOutputFolder: './css/',
      htmlInputFiles: ['./**/*.html']
    },
    opt = {
      serv: {
              server: {
                baseDir: "./"
              },
              port: 80
            },
      autopref: {
                  browsers: ['IE >= 9']
                },
      imageOp: {
          optimizationLevel: 5,
          progressive: true,
          interlaced: true
        }
    }
// Static server
gulp.task('browser-sync', function() {
    browserSync.init(opt.serv);
});

gulp.task('sass', function() {
    return gulp.src(paths.sassInputFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(opt.autopref))
        .pipe(gulp.dest(paths.cssOutputFolder))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('images', function(cb) {
    return gulp.src(['./img/*.*'])
        .pipe(imageop(opt.autopref))
        .pipe(gulp.dest('./img/min')).on('end', cb).on('error', cb);
});

//////////TASKNAME/////////DEPENDENCY TASK FOR THIS TASK////
gulp.task('runmyproject', ['sass', 'browser-sync'], function() {
    gulp.src("./*").pipe(notify({
        message: "I'm Initialized My Lord!",
        onLast: true
    }));
    gulp.watch(paths.sassInputFiles, ['sass']);
    gulp.watch(paths.htmlInputFiles).on('change', browserSync.reload);
});
