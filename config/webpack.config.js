const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
/**
 * 多入口配置
 */
const getEntries = (pagePath) => {
  const dirs = fs.readdirSync(pagePath);
  const entries = {};
  dirs.forEach((i) => {
    entries[i] = `${pagePath}/${i}/index.jsx`;
  });
  return entries;
};

const config = {
  // watch: true,
  entry: getEntries(path.resolve(__dirname, '../src/pages')),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    // publicPath:'../src/resource'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
  },
  stats: 'errors-only',
  module: { // 要打包的第三方模块
    rules: [
      {
        test: /\.js|jsx$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, '../src')], // 指定检查的目录
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
        },
      },
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: ['react-hot-loader/babel'], // 热更新插件
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            /***VERY IMPORTANT** */
            // options: {  css不能开启模块化 只能用css-loader 
            //   modules: true, // 是否开启css 模块化
            //   importLoaders: 1,
            // },
          }]
      },
      {
        test: /\.(less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // 是否开启css 模块化
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
            options: {
              modules: true, // 是否开启css 模块化
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: { // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: loader => [
                // require('postcss-import')({ root: loader.resourcePath }),
                // require('autoprefixer')(), //CSS浏览器兼容
                // require('cssnano')()  //压缩css
              ],
            },
          },
        ],
      },
      { test: /\.jpg|png|gif|svg|eot|ttf|woff|woff2|jpeg$/, use: 'url-loader' }, // 处理图片的规则
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }), // 每次打包构建，清理dist目录里面的缓存文件,
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:3000'],
        notes: ['Some additional notes to be displayed upon successful compilation']
      },
      onErrors(severity, errors) {
        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      },
      // should the console be cleared between each compilation?
      // default is true
      clearConsole: true,

      // add formatters and transformers (see below)
      additionalFormatters: [],
      additionalTransformers: []
    }),
    // 进度条
    // new ProgressBarPlugin({
    //   // format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
    //   clear: false
    // }),
    new HotModuleReplacementPlugin(),
  ],
  externals: {
    // 'react': 'react',
  },
};


/**
 *
 * @param {*} pagePath
 */
const generateHtmlByPages = (pagePath) => {
  const pages = fs.readdirSync(pagePath);
  pages.forEach((i) => {
    config.plugins.push(new HtmlWebpackPlugin({
      title: i,
      filename: `${i}.html`,
      chunks: [i],
      template: path.resolve(__dirname, '../src/template.html'),
    }));
  });
};

generateHtmlByPages(path.resolve(__dirname, '../src/pages'));

module.exports = config;
