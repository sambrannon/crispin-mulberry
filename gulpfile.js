var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function () {
  gulp.src('assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function(){
  gulp.watch('assets/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['watch']);
