const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer:{
     static: path.join(__dirname, "public"),
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
