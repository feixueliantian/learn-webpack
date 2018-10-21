const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

let extractTextPlugin = new ExtractTextPlugin({
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
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-sprites')({
                    spritePath: './dist/static'
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              limit: 1024,
              outputPath: 'static'
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
                  quality: 50
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [extractTextPlugin]
}
