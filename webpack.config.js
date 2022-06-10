const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js', //入口文件
  context: process.cwd(), //上下文目录
  mode: 'development', //开发模式
  output: {
    path: path.resolve(__dirname, 'dist'), //输出目录
    filename: 'monitor.js' //文件名
  },
  devServer: {
    static: path.resolve(__dirname, 'dist') //devserver静态文件目录
  },
  plugins: [
    new HtmlWebpackPlugin({ //自动打包出HTML
      template: './src/index.html',
      inject: 'head' //插入到html的head
    })
  ]
}