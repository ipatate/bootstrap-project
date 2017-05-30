const webpack = require('webpack');
const path = require('path');
const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['react'],
            plugins: ['transform-class-properties'],
          },
        },
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
              loader: "style-loader"
          },
          {
              loader: "css-loader"
          },
          {
              loader: 'sass-loader',
          },
          {
              loader: 'postcss-loader'
          }
        ],
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true
  },
  plugins: [
    new styleLintPlugin({
      configFile: '.stylelintrc',
      context: './app',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
