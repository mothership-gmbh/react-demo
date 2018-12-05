var gulp = require("gulp");
var babel = require("gulp-babel");

/* JSX-Task um JSX in Javascript zu kompilieren */
gulp.task("jsx", () => {
    return gulp.src("web/js/react/src/**/*.js")
        .pipe(babel({
            plugins: ['@babel/plugin-transform-react-jsx']
        }))
        .pipe(gulp.dest("web/js/react/dist"));
});

/* Watch-Task um Änderungen am JSX automatisch zu kompilieren */
gulp.task('watch', () => {
    gulp.watch('web/js/react/src/**/*.js', gulp.series('jsx'));
});
