var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('default', ['css', 'js']);

gulp.task('css', function(){
	return gulp.src('src/css/*.css')
		  .pipe(gulp.dest('dist/css'))
		  .pipe(uglifycss())
		  .pipe(rename({suffix:'.min'}))
		  .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function(){
	return gulp.src('src/js/*.js')
		   .pipe(gulp.dest('dist/js'))
		   .pipe(uglify())
		   .pipe(rename({suffix:'.min'}))
		   .pipe(gulp.dest('dist/js'));
});