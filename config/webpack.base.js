const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry:{
	  app: './src/index.js',
	},
	output: {
	  publicPath: '/',
     	  filename: '[name].bundle.js',
     	  path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
	  new cleanWebpackPlugin(['dist']),
	  new htmlWebpackPlugin({
			title: 'webpack 实践操作',
		})
	],
	module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
};
