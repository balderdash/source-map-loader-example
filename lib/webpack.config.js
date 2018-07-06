var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/lib.js',
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'lib',
    libraryTarget: 'umd',
  }
};
