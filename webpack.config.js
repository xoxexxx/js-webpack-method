const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", 
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), 
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"), 
    historyApiFallback: true,
    proxy: {
      '/api': 'http:localhost:3000'
    },
    watchFiles: ['src/**/*.html'],
    hot: true,
    open: true, 
    port: 5173, 
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html", 
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
