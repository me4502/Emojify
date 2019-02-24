const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const webpack     = require('webpack-stream');


// Run babel and move the javascript files into our /src/js folder
gulp.task('transpile', function() {
    return gulp.src(['js/main.js'])
        .pipe(webpack({
            mode: 'development',
            devtool : 'source-map',
            output: {
                filename: 'packed.js',
                library: 'main'
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest("../src/main/resources/static/js"))
        .pipe(browserSync.stream());
});

gulp.task('copy_html', function() {
    return gulp.src(['html/*.html'])
        .pipe(gulp.dest("../src/main/resources/static"))
        .pipe(browserSync.stream());
});

gulp.task('copy_css', function() {
    return gulp.src(['css/*.css'])
        .pipe(gulp.dest("../src/main/resources/static/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch_compile', ['transpile', 'copy_html', 'copy_css'], function() {
    gulp.watch(['js/*.js'], ['transpile']);
    gulp.watch(['html/*.html'], ['copy_html']);
    gulp.watch(['css/*.css'], ['copy_css']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['transpile', 'copy_html', 'copy_css'], function() {

    browserSync.init({
        server: "../src/main/resources/static"
    });

    gulp.watch(['js/*.js'], ['transpile']);
    gulp.watch("../src/main/resources/static/html/*.html").on('change', browserSync.reload);
    gulp.watch("../src/main/resources/static/js/*.js").on('change', browserSync.reload);
});

gulp.task('compile', ['transpile', 'copy_html', 'copy_css']);

gulp.task('default', ['serve']);