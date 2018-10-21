const gulp = require('gulp');
const browserSync = require('browser-sync').create();


//Server
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "src"
        }
    });
    
    browserSync.watch('./src/**/*.*').on('change', reload);
});
