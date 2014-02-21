var 
  gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path'),
  prefix = require('gulp-autoprefixer'),
  server = require('tiny-lr')(),
  livereload = require('gulp-livereload'),
  connect = require('gulp-connect');


gulp.task('connect', connect.server({
  root: __dirname + '/app',
  port: 9000,
  livereload: false
}));

gulp.task('styles', function() {
  return gulp
    .src('./app/less/main.less')
    .pipe(less({
        paths: [path.join(__dirname, 'app', 'assets', 'less')]
    }))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./app/css'))
    .pipe(livereload(server));
});

gulp.task('scripts', function() {
  return gulp
    .src('./app/js/**/*.js')
    .pipe(livereload(server));
});

gulp.task('views', function() {
  return gulp
    .src('./app/**/*.html')
    .pipe(livereload(server));
});

// The default task (called when you run `gulp`)
gulp.task('default',['connect'], function() {
  server.listen(35729, function(err) {
    if (err) return console.log(err);
    gulp.watch('app/less/**/*.less', function() {
        gulp.watch('styles');
    });
    gulp.watch('app/js/**/*.js', function() {
        gulp.watch('scripts');
    });
    gulp.watch('app/**/*.html', function() {
        gulp.watch('views');
    });
  });
});
