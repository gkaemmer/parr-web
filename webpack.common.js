const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  context: __dirname,
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.sol/,
        use: "raw-loader"
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([
      { from: "./src/index.html" },
      { from: "./src/assets/images/favicon.ico" }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

module.exports = config;
