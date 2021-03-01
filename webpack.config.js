// Webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          'css-loader', // Translates CSS into CommonJS
          'postcss-loader', // Parse CSS and add vendor prefixes to CSS rules
          'sass-loader' // Compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'images/'
            }
          }
        ]
      },
      // Подключаем картинки из css
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
    hot: true,
    writeToDisk: true,
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    // Копируем картинки
    new CopyPlugin({
      patterns: [
        {
          from: './src/img',
          to: 'img'
        }
      ]
    })
  ]

};
