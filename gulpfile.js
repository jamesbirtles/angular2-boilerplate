"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const WebpackServer = require("webpack-dev-server");
const runSequence = require("run-sequence");

var paths = {
  styles: ["./styles/**/*.scss"],
  webpack: "./src/boot.ts"
};

gulp.task("clean", function () {
  return del("./_static/");
});

gulp.task("scss", function () {
  return gulp
    .src(paths.styles)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("_static/styles"))
});

gulp.task("webpack", function() {
  return gulp
    .src(paths.webpack)
    .pipe(webpackStream(require("./webpack.config")))
    .pipe(gulp.dest("_static/js"))
});

gulp.task("build", function (callback) {
  runSequence(
    "clean",
    ["scss", "webpack"],
    callback
  )
});

gulp.task("default", ["build"]);

gulp.task("webpack:server", function () {
  let compiler = webpack(require("./webpack.config"));

  new WebpackServer(compiler, {
    historyApiFallback: true,
    stats: { colors: true },
    publicPath: "/_static/js"
  }).listen(8080, "0.0.0.0");
});
