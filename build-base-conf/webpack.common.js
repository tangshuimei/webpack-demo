// 公共配置
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {srcPath,distPath}  = require('./paths')

module.exports = {
    entry: path.join(srcPath,'index'), //入口
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // loader执行顺序：从后往前
                loader: ['style-loader','css-loader','postcss-loader'],
                include: srcPath,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: ['style-loader','css-loader','less-loader'],
                include: srcPath,
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath,'index.html'),
            filename: 'index.html'
        })
    ]
}