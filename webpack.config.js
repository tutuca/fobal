module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: "./static/",
    publicPath: "/static/",
    filename: "app.js"
  },
  devServer: {
    contentBase: "./static",
    noInfo: true,
    hot: true,
    inline: true
   }
};