var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');

gulp.task('css:build', [], function () {
    gulp.src('./app/css/screen.css')
        .pipe($.autoprefixer())
        .pipe($.csso())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js:build', [], function () {
    gulp.src('./app/js/*')
        .pipe($.uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy', [], function () {
    gulp.src(['./app/favicon.*', './app/CNAME'])
        .pipe(gulp.dest('./dist'));
    gulp.src(['./app/assets/*'])
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('minify', ['css:build'/*, 'js:build'*/], function () {
    gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe($.inline({
            base: 'dist/'
        }))
        .pipe($.minifyHtml())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['minify', 'copy'], function (cb) {
});
