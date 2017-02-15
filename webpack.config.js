var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:
  ['babel-polyfill', './src/app/app.js']
  ,
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'src')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate-loader!babel-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      // copy those assets to output
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]?'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      hash: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
      }
    })
  ],
  devServer: {
    contentBase: './src/',
    historyApiFallback: true
  }
};
