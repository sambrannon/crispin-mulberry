var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var scsslint = require('gulp-scss-lint');
var nmq = require('gulp-no-media-queries');
var rename = require("gulp-rename");

gulp.task('styles', function () {
  gulp.src('assets/scss/**/*.scss')
    .pipe(scsslint({
        'config': '.scss-lint.yml',
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('nmq', function () {
  gulp.src('./assets/css/styles.css')
  .pipe(nmq({ 'width': '1000px' }))
  .pipe(rename({
    suffix: '.ie',
    extname: '.css'
  }))
  .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function(){
  gulp.watch('assets/scss/**/*.scss', ['styles', 'nmq']);
});

gulp.task('default', ['watch']);
