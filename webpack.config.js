const path = require('path')

//HTML自动生成的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//dist文件夹的清理的插件
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js",
        math: "./src/math.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.png$/, use: ['file-loader']}
        ]
    }
}