/*
 * @Date: 2022-03-01 17:05:12
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-03-01 17:38:37
 * @FilePath: \virtual_dom\webpack.config.js
 */

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: './example.js',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './template.html'),
        }),
    ],
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true, // 开启模块热替换
    },
}
