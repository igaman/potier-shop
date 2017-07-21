const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }
    ,
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?url=false', 'sass-loader']
    },
    {
      test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};