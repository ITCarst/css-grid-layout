var gulp = require("gulp"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    livereload = require("gulp-livereload"),
    notify = require("gulp-notify"),
    clean = require("gulp-clean");

var sass = require("gulp-sass"),
    minifycss = require("gulp-minify-css");

gulp.task("sass", function () {
    return gulp.src("assets/scss/*.scss", {style: "expanded"})
        .pipe(sass())
        .pipe(gulp.dest("dist"))
        .pipe(notify({message: "Styles compiled!"}));
});

gulp.task("clean", function () {
    return gulp.src("./dist", {read: false}).pipe(clean());
});

gulp.task("default",["clean"], function () {
    gulp.start("sass");
});

gulp.task("watch", function () {
    gulp.watch("assets/scss", ["sass"]);
    
    livereload.listen();

    gulp.watch(["dist"]).on("change", livereload.changed);
});
