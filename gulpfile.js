/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var debug = require('gulp-debug');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('sass', function () {
  return gulp.src('src/*.scss')
    .pipe(concat('webkit-sass.scss'))
    .pipe(gulp.dest('dist'))
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({extname:'.min.css'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function () {
  gulp.start(['sass']);
});
