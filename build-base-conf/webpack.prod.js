const path = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webapckCommonConf = require('./webpack.common')
const {smart} = require('webpack-merge')
const {srcPath,distPath} = require('./paths')

module.exports = smart(webapckCommonConf,{
    mode: 'production',
    output: {
        filename: 'bundle.[contentHash:8].js', // 打包代码时，contentHash指针对内容计算hash，如果内容变了，hash就会变
        path: distPath,
        // publicPath: 'http://cdn.abc.com' // 修改所有静态文件 url
    },
    module: {
        rules: [
            // 图片 -- 考虑base64编码情况
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 小于10kb的图片用base64格式产出
                        // 否则，依然延用file-loader的形式，产出url
                        limit: 10*1024,   
                        // 打包到img目录下
                        outputPath: '/img1/',
                        // 设置图片的cdn地址（也可以统一在外面的output）
                        // publicPath: 'http://cdn.abc.com'

                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 会默认清空output.path 文件夹
        new webpack.DefinePlugin({
            // window.Env = 'production '
            Env: JSON.stringify('production')
        })
    ],
})