const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'none',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      vendor: path.resolve(__dirname, 'src/vendor')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'vendor/jquery.min.js',
      hello: ['vendor/util.js', 'hello']
    })
  ]
}
