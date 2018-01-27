const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    publicPath: '/dist/',
    path: path.resolve('dist'),
    filename: 'app.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],

  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  devtool: 'inline-source-map',
  devServer: {
    index: './index.html',
    port: 9000,
    contentBase: path.join('./'),
    historyApiFallback: {
      index: 'index.html'
    }
  }
}