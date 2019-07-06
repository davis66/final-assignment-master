const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require("gulp-imagemin");
const browserSync = require('browser-sync').create();

function style(){
    //1.where is my scss File
    return gulp.src('./scss/**/*.scss')
    // pass that file through sass compiler
    .pipe(sass())
    // where do i save the compiled css
    .pipe(gulp.dest('./css'))
    //stream changes to all browsers
    .pipe(browserSync.stream());
}

function imgSquash(){
    return gulp
        .src("./raw-images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./minified/images"));
    }
    

function watch(){
    browserSync.init({
        server: {
            proxy:"localhost"
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js)').on('change',browserSync.reload);
    gulp.watch("./raw-images/*", imgSquash);
}


exports.style = style;
exports.watch = watch;
exports.imgSquash = imgSquash;






// gulp.task("watch", () => {
// 	gulp.watch("./img/*", imgsquash);
// });

// gulp.task("default",gulp.series("imgSquash","watch"));