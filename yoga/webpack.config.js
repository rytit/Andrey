'use strict'

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  devtool: "source-map"
}