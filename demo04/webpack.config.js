const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    // 相对路径，相对于 html 页面
    publicPath: 'dist/'
    // 绝对路径
    // publicPath: __dirname + '/dist/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      // async: false，则 pageA.js 和 pageB.js 中的公共模块被打包到 app.js 中
      // async: true， 则 pageA.js 和 pageB.js 中的公共模块被打包到 0.chunk.js 中
      async: 'common',
      minChunks: 2
    })
  ]
}
