var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(done) {
    gulp.src("app/sass/*.sass")
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 25 versions'] }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: "app/"
    });

    gulp.watch("app/sass/*.sass", gulp.series('sass'));
    gulp.watch("app/js/*.js").on('change', () => {
        browserSync.reload();
        done();
      });
    gulp.watch("app/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));