const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const developmentConfig = require('./webpack.dev.conf')
const productionConfig = require('./webpack.prod.conf')

const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:5].[ext]',
            outputPath: 'static/'
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

module.exports = env => merge(config, env === 'development' ? developmentConfig : productionConfig)
