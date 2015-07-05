module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./static/",
    publicPath: "/static/",
    filename: "app.js",
    loaders: [
      {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
      },

      {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
      }
    ]
  },
  devServer: {
    contentBase: "./static",
    noInfo: true,
    hot: true,
    inline: true
   }
};