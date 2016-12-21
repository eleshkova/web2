var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream')
	webserver = require('gulp-webserver');
	gulp.task('browserify', function() {
return browserify('./app/js/main.js') 
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/js'))
});
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: 'http://localhost:8000/app/index.html',
      fallback: 'index.html',
    }));
});
gulp.task('default', ['browserify', 'webserver']);