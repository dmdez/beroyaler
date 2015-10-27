var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    app: ["./client/js/app.js"],
    styles: [
      "./client/css/styles.js"
    ]
  },
  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "[name].bundle.js",
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
  }
};

if ( process.env.NODE_ENV != "production") {
  config.entry.styles.push("webpack-hot-middleware/client");
}

module.exports = config;
