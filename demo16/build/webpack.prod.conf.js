const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  output: {
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].[ext]',
              limit: 1024,
              outputPath: 'static/'
            }
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-pngquant')({
                  quality: 80
                }),
                require('imagemin-mozjpeg')({
                  quality: 20
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, '../dist'), {
      root: path.resolve(__dirname, '../'),
      verbose: true
    }),
    new ExtractTextPlugin({
      filename: '[name].min.css'
    })
  ]
}
