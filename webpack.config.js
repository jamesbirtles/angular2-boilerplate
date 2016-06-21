"use strict";

const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const PROD = (process.env.NODE_ENV === "production")
module.exports = {
  devtool: "source-map",
  debug: true,

  entry: {
    "angular2": [
      "rxjs",
      "./node_modules/reflect-metadata/Reflect.js",
      "./node_modules/zone.js/dist/zone.js",
      "@angular/common",
      "@angular/core",
      "@angular/compiler",
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "@angular/router",
      "@angular/forms"
    ],
    "app": "./src/boot"
  },

  output: {
    path: path.join(__dirname, "_static", "js"),
    publicPath: "/",
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    chunkFilename: "[id].chunk.js"
  },

  resolve: {
    extensions: ["", ".ts", ".js", ".json"]
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader", exclude: [/node_modules/] },
      { test: /\.json/, loader: "json" },
      { test: /\.scss$/, loaders: ["raw", "sass"] },
      { test: /\.html/, loaders: ["raw"] }
    ]
  },

  plugins: PROD ? [
    new CommonsChunkPlugin({ name: "angular2", filename: "angular2.js", minChunks: Infinity }),
    new UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [
    new CommonsChunkPlugin({ name: "angular2", filename: "angular2.js", minChunks: Infinity })
  ]
};