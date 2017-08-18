let gulp = require('gulp');
let browserSync = require('browser-sync').create();

gulp.task('move', () => {
    gulp.src("segbar.js").pipe(gulp.dest("./test"));
});

gulp.task('serve', ['move'], () => {

    browserSync.init({
        server: {
            baseDir: './test',
            port: 3000
        }
    })
});

gulp.task('reload', () => {
    browserSync.reload();
});

gulp.task('test', ['serve'], () => {
    gulp.watch(['segbar.js'], ['move', 'reload']);
});

