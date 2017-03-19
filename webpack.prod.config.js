const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

config.output.publicPath = '/dist/'; // 资源路径,根据需要可改为cdn地址
config.output.filename = '[name].[hash].js'; // 带hash值的入口js名称
config.output.chunkFilename = '[name].[hash].chunk.js'; // 带hash值的路由js名称

config.vue = {
    loaders: {
        css: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader", {
                publicPath: "/dist/"
                // 特别提醒,如果这里的publicPath是以http://xxx.xxx这样以http://开头的,要写成
                // publicPath: "http:\\xxx.xxx",否则会编译为"http:/xxx.xxx"
            }
        )
    }
};

config.plugins = (config.plugins || []).concat([
    // 提取带hash值的css名称
    new ExtractTextPlugin("[name].[hash].css", {
        allChunks: true,
        resolve: ['modules']
    }),
    // 提取带hash值的第三方库名称
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    // 压缩文件
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    // 构建html文件
    new HtmlWebpackPlugin({
        filename: '../index_prod.html',
        template: './src/template/index.ejs',
        inject: false
    })
]);

// 写入环境变量
fs.open('./src/config/env.js', 'w', function(err, fd) {
    var buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = config;