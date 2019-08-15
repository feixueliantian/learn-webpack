const path = require('path')
const webpack = require('webpack')

module.exports = {
  output: {
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8000,
    hot: true,
    overlay: true,
    proxy: {
      '/api': {
        target: 'https://m.weibo.cn',
        changeOrigin: true,
        logLevel: 'debug'
      }
    },
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "/index.html" }]
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:5].[ext]',
              outputPath: 'static/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
