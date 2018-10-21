const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader'
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].min.css',
      // allChunks: true， 按需加载的模块中如果引入了 css，该 css 也会提取到 css 文件中
      // allChunks: false，按需加载的模块中如果引入了 css，该 css 不会提取到 css 文件中，该 css 会和按需加载的模块打包到一起
      allChunks: false
    })
  ]
}
