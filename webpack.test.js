const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './example1.js',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }]
    }]
  },
  output: {
    filename: 'bundle3.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(config, serverConfig)