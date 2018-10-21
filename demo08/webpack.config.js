const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        // 这里我不太明白，既然需要对 loader-es 模块进行 babel 转码，按理来说应该不加 exclude: /node_modules/，但是加上这句也可以正常压缩
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
