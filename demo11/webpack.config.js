const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractTextPlugin = new ExtractTextPlugin({
  filename: '[name].min.css',
  allChunks: false
})

module.exports = {
  mode: 'none',
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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader'
          },
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [extractTextPlugin]
}
