const { resolve } = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'scrollSpy'
  },
  module: {
    rules: [{
      test: /\.js/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  plugins: [
    new UglifyJsPlugin({
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    })
  ]
}
