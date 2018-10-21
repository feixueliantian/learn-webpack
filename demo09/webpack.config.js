const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const PurifyCSS = require("purifycss-webpack")
const glob = require("glob-all")

const extractTextPlugin = new ExtractTextPlugin({
  filename: '[name].min.css',
  allChunks: false
})

const purifyCSS = new PurifyCSS({
  paths: glob.sync([
    path.resolve(__dirname, './*.html'),
    path.resolve(__dirname, './src/*.js')
  ])
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
      }
    ]
  },
  plugins: [extractTextPlugin, purifyCSS]
}
