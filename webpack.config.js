"use strict";

const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: "source-map",
  debug: true,

  entry: {
    "angular2": [
      "rxjs",
      "reflect-metadata",
      "angular2/core",
      "angular2/router",
      "angular2/http"
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

  plugins: [
    new CommonsChunkPlugin({ name: "angular2", filename: "angular2.js", minChunks: Infinity }),
    new CommonsChunkPlugin({ name: "common", filename: "common.js" })
  ]
};
