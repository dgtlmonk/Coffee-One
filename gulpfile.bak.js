var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr(),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');

gulp.task('connect', function () {
    connect.server({
        root: ['./'],
        port: 9001,
        browser: 'chrome',
        livereload: true // livereload
    });
});

// paths
var jsSrc = ['./components/scripts/s1.js',
            './components/scripts/s2.js'];

// tasks ------

gulp.task('js', function () {
   gulp.src(jsSrc)
    .pipe(uglify())  // minify
    .pipe(concat('scripts.js')) // combined file name
    .pipe(gulp.dest('js')) // destination folder
    .pipe(connect.livereload());
});


gulp.task('watch', function (argument) {
    var server = livereload();
    gulp.watch(jsSrc,['js']);
});


gulp.task('default',['watch','connect']);
