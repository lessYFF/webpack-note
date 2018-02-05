const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require('webpack');

module.exports = merge(base, {
	devtool: 'inline-source-map', 
	devServer: {
	  hot: true,
	  contentBase: './dist',
	},
	plugins: [
	  new webpack.NamedModulesPlugin(),
	  new webpack.HotModuleReplacementPlugin(),	
	],
});
