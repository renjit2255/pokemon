const path = require("path"),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  { resolve } = path,
  root = resolve(__dirname, './')

module.exports = {
  mode: "development",
  entry: resolve(root, 'src', 'index.js'),
  output: {
    path: resolve(root, "build"),
    filename: "[name]-[fullhash].js",
    publicPath: '/',
  },
  target: "web",
  devServer: {
    port: "3000",
    historyApiFallback: true,
    open: true,
    hot: true,
    liveReload: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pokemon App',
      filename: resolve(root, 'build', 'index.html'),
      template: resolve(root, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[fullhash].css'
    })
  ]
}