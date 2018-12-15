var gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass');

var srcFolder = 'scss/*.scss';
var distFolder = 'css/';


gulp.task('sass', function () {

 return gulp.src(srcFolder)
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest(distFolder));
});

gulp.task('watch', function(){
    gulp.watch(srcFolder,  ['sass']);
});

// gulp.task('watch', function() {
//     gulp.watch(srcFolder , ['sass']);
// });


gulp.task('default', ['watch']);