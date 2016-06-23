var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var sassPaths = [
    'src/scss/app.scss'
];

var jsPaths = [
    'src/js/**/*.js'
];

var copyPathsJS = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    'node_modules/angular-resource/angular-resource.min.js'
];

var copyPathsHtml = [
    'src/**/*.html',
    'src/templates/**/*.html'
]

gulp.task('sass', function() {
    return gulp.src(sassPaths)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('scripts', function() {
    return gulp.src(jsPaths)
    .pipe($.sourcemaps.init())
    .pipe($.concat('app.js'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('copy-scripts', function() {
    return gulp.src(copyPathsJS)
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-html', function() {
    return gulp.src(copyPathsHtml)
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        open: false
    });
});

gulp.task('default', ['sass', 'scripts', 'copy-scripts', 'copy-html']);

gulp.task('watch', ['browserSync', 'sass', 'scripts', 'copy-html'], function() {
    gulp.watch(['src/scss/**/*.scss'], ['sass']);
    gulp.watch(jsPaths, ['scripts']);
    gulp.watch(copyPathsHtml, ['copy-html']);
});
