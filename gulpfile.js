var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('default', ['css', 'js']);

gulp.task('css', function(){
	return gulp.src('src/css/*.css')
		  .pipe(uglifycss())
		  .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function(){
	return gulp.src('src/js/*.js')
		   .pipe(uglify())
		   .pipe(gulp.dest('dist/js'));
});