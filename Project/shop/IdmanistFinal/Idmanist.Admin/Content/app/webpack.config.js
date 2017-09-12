const webpack = require('webpack');
const path = require("path");


module.exports = {
  entry: {
    app: ['js/material/material.js','js/material/ripples.js','js/initApp.js','js/app.js']
  },
  output: {
    path: path.join(__dirname, "../dist/assets/js/"),
    filename: "[name].bundle.js"
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js']
  },
	plugins: [
	 new webpack.BannerPlugin('"use strict";', { raw: true })
 ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },{
          test: /\.css$/,
          loader: "style-loader!css-loader"
      },{ test: /vendor\/.+\.(jsx|js)$/,
          loader: 'imports?jQuery=jquery,$=jquery,this=>window'
        }
    ]
  },
  devtool: 'source-map'
};
