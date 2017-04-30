// gulpfile.js 
var gulp = require('gulp')
var server = require('gulp-express')
var pug = require('gulp-pug')
var watch = require('gulp-watch')
var gulp_watch_pug = require('gulp-watch-pug')
var rename = require('gulp-rename')
var typescript = require('gulp-typescript')

const pugPattern = 'client/source/**/*.pug'
const typescriptPattern = 'client/source/**/*.ts'
 
gulp.task('default',['serverUp'])

gulp.task('serverUp', function () {
    // Start the server at the beginning of the task 
    server.run(['server/app.js'])
 
    // Restart the server when file changes 
    gulp.watch(['client/**/*.html'], server.notify)
    gulp.watch(['client/styles/**/*.scss'], ['styles:scss'])
 
    gulp.watch(['client/scripts/**/*.js'], ['jshint'])
    gulp.watch(['server/app.js', 'server/routes/**/*.js'], [server.run])
})


gulp.src(pugPattern)
    .pipe(watch(pugPattern))
    .pipe(gulp_watch_pug(pugPattern, { delay: 100 }))
    .pipe(pug())
    .pipe(rename(function(path){
        path.dirname = path.dirname.substring("views".length)
    }))
    .pipe(gulp.dest('client/built/html/'))

gulp.src(typescriptPattern)
    .pipe(typescript({}))
    .pipe(gulp.dest('client/built/'))