const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry:{
	  app: './src/index.js',
	  print: './src/print.js',
	},
	output: {
     	 filename: '[name].bundle.js',
     	 path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new cleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'webpack 实践操作',
		})
	],
};
