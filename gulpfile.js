var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var concat = require('gulp-concat');

function styles() {
  return gulp.src('assets/styles/src/*.css')
    .pipe(concat('assets/styles/src/*.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(rename("global.min.css"))
    .pipe(gulp.dest('./assets/styles/dist'))
}

exports.styles = styles;