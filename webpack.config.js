var path = require('path');

module.exports = {
  entry: {
    app: ["./client/js/app.js"],
    styles: ["./client/css/styles.js"]
  },
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }]
  }
};
