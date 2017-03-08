var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

gulp.task('build-less', function(){
    return gulp.src('css/style.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('css/style.less', ['build-less']);
});

gulp.task('default', ['watch']);
