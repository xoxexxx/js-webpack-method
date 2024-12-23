const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", 
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), 
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"), 
    open: true, 
    port: 5173, 
    historyApiFallback: true,  // all location  => index.html
  },
  plugins: [
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
