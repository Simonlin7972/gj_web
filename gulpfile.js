var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var watch = require('gulp-watch');


// gulp.task('pug', function buildHTML() {
//   return gulp.src('./source/*.pug')
//   .pipe(plumber())
//   .pipe(pug({
//     pretty: true
//   }))
//   .pipe(gulp.dest('./public/'))
// });


// compile sass
gulp.task('sass', function () {
  var plugins = [
      autoprefixer({browsers: ['last 3 version', '> 5%', 'ie 8']}),
   ];

  return gulp.src('./source/sass/**/*.sass')
  .pipe(plumber())
  .pipe(sass().on('error', sass.logError))
  // css compile finish
  .pipe(postcss(plugins))
  .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function () {
  gulp.watch('./source/sass/**/*.sass ', ['sass']);
  // gulp.watch('./source/**/*.pug ', ['pug']);
});

gulp.task('default', ['sass', 'watch']);
