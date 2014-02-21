var 
  gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path'),
  prefix = require('gulp-autoprefixer'),
  server = require('tiny-lr')(),
  // lr = require('tiny-lr'),
  // server = lr(),
  livereload = require('gulp-livereload'),
  connect = require('gulp-connect');

// Paths
var paths = {
  less: 'app/less/main.less',
  scriptsjs: 'app/js/**/*.js',
  views: 'app/**/*.html'
};

gulp.task('connect', connect.server({
  root: __dirname + '/app',
  port: 9000,
  livereload: false
}));

gulp.task('styles', function() {
  return gulp
    .src(paths.less)
    .pipe(less({
        paths: [path.join(__dirname, 'app', 'assets', 'less')]
    }))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('app/css'))
    .pipe(livereload(server));
});

gulp.task('scripts', function() {
  return gulp
    .src(paths.scriptsjs)
    .pipe(livereload(server));
});

gulp.task('views', function() {
  return gulp
    .src(paths.views)
    .pipe(livereload(server));
});


// The default task (called when you run `gulp`)

/* NOTE */
// gulp.run() has been deprecated. So if you have the last version of Gulp you have to change it for:
// i.e: 
//     gulp.watch('app/less/**/*.less', function() {
//         gulp.watch('styles');
//     });

gulp.task('default',['connect'], function() {
  server.listen(35729, function(err) {
    if (err) return console.log(err);
    gulp.watch(paths.less, function() {
        gulp.run('styles');
    });
    gulp.watch(paths.scriptjs, function() {
        gulp.run('scripts');
    });
    gulp.watch(paths.views, function() {
        gulp.run('views');
    });
  });
});
