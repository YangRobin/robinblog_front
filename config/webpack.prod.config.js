
const baseConfig = require('./webpack.config')
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: "production"
})

