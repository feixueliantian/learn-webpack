const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['lodash'],
    pageA: './src/pageA.js',
    pageB: './src/pageB.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['pageA', 'pageB'],
      minChunks: 2
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    })
  ]
}
