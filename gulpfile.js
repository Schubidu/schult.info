var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('css', function () {
    gulp.src('./app/less/screen.less')
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe(gulp.dest('./app/css'));

});

gulp.task('css:build', ['css'], function () {
    gulp.src('./app/css/screen.css')
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

gulp.task('minify', ['css:build', 'js:build'], function () {
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

gulp.task('watch', ['css'], function () {
    gulp.watch('./app/less/*.less', ['css']);
});