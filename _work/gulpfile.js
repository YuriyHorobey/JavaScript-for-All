//Tools
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Global config
var targetDir = '../';
//stores css, images etc
var assetsDir = 'assets/';
//dev server's port (browser-sync)
var port = 3000;

gulp.task('default', ['sass', 'browser-sync']);

//SASS->CSS
gulp.task('sass', function () {
    return gulp.src("./scss/index.scss")
        .pipe(sass())
        .pipe(gulp.dest(targetDir + assetsDir))
        .pipe(browserSync.stream());
});

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: targetDir,
            port:    port,
            open: false
        }
    });
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch([targetDir+"**/*.html"]).on('change', browserSync.reload);
});