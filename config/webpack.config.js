const path = require('path')
const fs = require('fs')
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack')

/**
 * 多入口配置
 */
getEntries = (pagePath) => {
    const dirs = fs.readdirSync(pagePath);
    let entries = {};
    dirs.forEach(i => {
        entries[i] = pagePath + "/" + i + "/index.js"
    })
    return entries;
}

let config = {
    // watch: true,
    entry: getEntries(path.resolve(__dirname, "../src/pages")),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },

    module: { //要打包的第三方模块
        rules: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: ['react-hot-loader/babel'], // 热更新插件
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin({
        //     verbose: true,
        // }), //每次打包构建，清理dist目录里面的缓存文件,
        new HotModuleReplacementPlugin(),
    ],
    externals: {
        // 'react': 'react',
    },
}


let generateHtmlByPages = (pagePath) => {
    const pages = fs.readdirSync(pagePath);
    pages.forEach(i => {
        // let title = i.split(".")[0];
        config.plugins.push(new htmlWebpackPlugin({
            title: i,
            filename: i + ".html",
            chunks: [i],
            template: path.resolve(__dirname, "../src/template.html")
        }))
    })
}

generateHtmlByPages(path.resolve(__dirname, "../src/pages"))

module.exports = config;