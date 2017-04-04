'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      mainfiles = require('main-bower-files'),
      clean = require('gulp-clean'),
      sourcemaps = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),
      sftp = require('gulp-sftp'),
      fs = require('fs');

var jsonObj = JSON.parse(fs.readFileSync('./sites_all.json'));

var obj ={
    "site":"",
    "ftp":{
        "server":"webvm4.spbstu.ru",
        "port":"22",
        "user":"val",
        "pass":"12345",
        "folder":""
    }
}

gulp.task('clean', function(done){
    gulp.src('./build/*',{read:false})
//        .on('data',function(file){
//            console.log({
//                relative:file.relative,
//                contents:file.contents
//            })
//        })
        .pipe(clean());
    
    done();
});

gulp.task('fonts',function(done){
   gulp.src(mainfiles(["**/*.{ttf,otf,woff,woff2,eot,svg}"],{
       "overrides":{
           "font-awesome":{
               main:[
                   "fonts/*.*"
               ]
            },
           "bootstrap-sass":{
               main:[
                   "assets/fonts/bootstrap/*.*"
               ]
            }
        }
   }))
   .pipe(gulp.dest('./build/fonts'));
   done();
});

gulp.task('js',function(done){
   gulp.src(mainfiles(["**/*.js"],{
       "overrides":{
           "bootstrap-sass":{
               main:[
                   "assets/javascripts/bootstrap.min.js"
               ]
            },
           "jquery":{
               main:[
                   "dist/jquery.min.js"
               ]
            },
           "jquery-migrate":{
               main:[
                   "jquery-migrate.min.js"
               ]
            }
        }
   }))
   .pipe(gulp.dest('./build/js'));
   done();
});

//gulp.task('sftp', function () {
//
//})