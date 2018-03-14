var gulp = require('gulp'),
    connect = require('gulp-connect'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('XingChuan'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('XingChuan/js'))
        .pipe(connect.reload());
});

// .scss 使用autoprefixer
gulp.task('scss', function() {
    gulp.src('src/css/*.scss')
        .pipe(scss())
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css/'))
        .pipe(gulp.dest('XingChuan/css/'))
        .pipe(connect.reload());
});

// .css 不使用autoprefixer
gulp.task('css', function() {
    gulp.src('src/css/*.css')
        .pipe(gulp.dest('XingChuan/css'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    gulp.src('src/images/*.*')
        .pipe(gulp.dest('XingChuan/images'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        port: '10080',
        livereload: true,
    });
});

// 监听文件
gulp.task('watch', function() {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/css/*.scss', ['scss']);
    gulp.watch('src/images/*.*', ['images']);
});

gulp.task('default', ['watch', 'html', 'js', 'scss', 'images', 'connect']);
