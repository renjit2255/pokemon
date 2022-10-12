const path = require("path"),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  { resolve } = path,
  root = resolve(__dirname, './')

module.exports = {
  mode: "development",
  entry: resolve(root, 'src', 'index.js'),
  output: {
    path: resolve(root, "build"),
    filename: "bundle.js",
    publicPath: '/',
    clean: true
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(root, 'src', 'index.html'),
      title: 'Pokemon App',
      filename: resolve(root, 'build', 'index.html')
    })
  ]
}