// gulpfile.js 
var gulp = require('gulp');
var server = require('gulp-express');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var gulp_watch_pug = require('gulp-watch-pug');
 
gulp.task('default',['serverUp', 'compilePugs'])

gulp.task('serverUp', function () {
    // Start the server at the beginning of the task 
    server.run(['server/app.js']);
 
    // Restart the server when file changes 
    gulp.watch(['client/**/*.html'], server.notify);
    gulp.watch(['client/styles/**/*.scss'], ['styles:scss']);
 
    gulp.watch(['client/scripts/**/*.js'], ['jshint']);
    gulp.watch(['server/app.js', 'server/routes/**/*.js'], [server.run]);
});


gulp.src('client/**/*.pug')
    .pipe(watch('client/**/*.pug'))
    .pipe(gulp_watch_pug('client/**/*.pug', { delay: 100 }))
    .pipe(pug())
    .pipe(gulp.dest('client/html/'));

gulp.task('compilePugs', function buildHTML() {
  return gulp.src('client/views/*.pug')
  .pipe(pug({
    
  }))
});