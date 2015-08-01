/* global dest, src, assets, data, templates, bower, layouts */

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    notify = require('gulp-notify'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch');

function handleError(err) {
    gutil.log(err);
    notify({ message: err })
}
gulp.task('js', function () {
    gulp.src([
        'jspm_packages/**/*',
        'config.js'
    ])
      .pipe(gulp.dest('static/js/lib'));
    gulp.src([
        'src/js/**/*.js',
    ])
      .on('error', notify.onError("Error: <%= error.message %>"))
      .pipe(gulp.dest('static/js'));
});

gulp.task('views', function () {
    gulp.src([
        'src/*.html'
    ])
      .pipe(gulp.dest('static'))
});

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer-core');
    var processors = [
        require('cssnext')(),
        require('cssnano')(),
        require('precss')(),
        require('postcss-modular-scale')(),
        require('postcss-import')(),
        require('lost')(),
        autoprefixer({ browsers: ['last 2 versions'] })
    ];
    return gulp.src([
        'src/css/**/*.css',
        'src/css/*.css'
    ])
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('static/css'));
});

gulp.task('complete', function () {
    notify({ message: 'Gulp build complete' })
});

gulp.task('watch', function () {
    gulp.watch([
        'src/js/**/*'
    ], ['js', 'complete']);
    gulp.watch([
        'src/css/**/*'
    ], ['css', 'complete']);
    gulp.watch([
        'src/**/*.html'
    ], ['views', 'complete']);
});

// Server
// -----------------------------
gulp.task('stop', function() {
  connect.serverClose();
});

gulp.task('connect', function() {
  connect.server({
      port: 9000,
      root: 'static'
  });
});

// Production
// -----------------------------
// Bundle with jspm
// gulp.task('bundle', ['js'], plugins.shell.task([
//   'jspm bundle-sfx build/js/main.js!jsx dist/js/app.js'
// ]));

// Tasks
// -----------------------------
gulp.task('build', ['views', 'css', 'js', 'complete']);
gulp.task('server', ['build', 'connect', 'watch']);
gulp.task('default', ['server']);
