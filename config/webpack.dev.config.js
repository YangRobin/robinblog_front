
const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');


const config = merge(baseConfig, {
	mode: "development",
	// assetsPublicPath: '../src/resource',
	// build: {
  //   assetsPublicPath: '../src/resource',
  //   assetsSubDirectory: '../src/resource'
  // },
	// assetsSubDirectory: '..resource',
	// assetsPublicPath: '/',
	devServer: {
		contentBase: path.join(__dirname, "../dist"),
		compress: true, // Enable compress
		port: 9000, // Enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures.
		// hotOnly: true,
		hot: true,
		quiet: true,
		index: 'index.html',
		// publicPath: "../resource",
		// open: true,// automaticly open default broswer
		// lazy: true,// 当启用 lazy 时，dev-server 只有在请求时才编译包(bundle)。这意味着 webpack 不会监视任何文件改动。我们称之为“惰性模式”。
		// proxy: {
		// 	"/api": {
		// 		target: "http:localhost:9090/robinblog",
		// 		secure: false
		// 	}
		// }
	},
	// plugins: [

	// ]
})

module.exports = config;