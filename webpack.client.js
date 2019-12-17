const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const clientConfig = {
  mode: 'development',
  entry: './client.js',
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }]
    }]
  },
  output: {
    filename: 'chunk.js',
    path: path.resolve(__dirname, 'public')
  },
}

module.exports = merge(config, clientConfig)