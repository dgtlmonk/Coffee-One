var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    coffee = require('gulp-coffee');

gulp.task('connect', function () {
    connect.server({
        root: ['./app'],
        port: 9002,
        browser: 'chrome',
            livereload: true // livereload
    });
});


// paths
var jsSrc = [
            './app/components/scripts/*.js',
            ];

var sassSrc = ['./app/components/sass/*.scss'];

var coffeeSrc =['./app/components/coffee/*.coffee'];


// tasks ------
gulp.task('coffee', function () {
   gulp.src(coffeeSrc)
    .pipe(coffee({
        bare:true,
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('./app/components/scripts')) // destination folder
    .pipe(connect.reload());
});


gulp.task('js', function () {
   gulp.src(jsSrc)
    .pipe(uglify())  // minify
    .pipe(concat('scripts.js')) // combined file name
    .pipe(gulp.dest('./app/js')) // destination folder
    .pipe(connect.reload());
});


gulp.task('sass', function (){
    gulp.src(sassSrc)
        .pipe(sass({
            style:'expanded',
            lineNumbers:true, // show  scss line number reference

        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./app/css'))
        .pipe(connect.reload())
});

gulp.task('watch', function (argument) {
    gulp.watch([jsSrc,'app/index.html'],['js']);
    gulp.watch([sassSrc],['sass']);
    gulp.watch([coffeeSrc],['coffee']);
});


gulp.task('default',['coffee','js','sass','watch','connect']);
