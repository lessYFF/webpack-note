const path = require('path');
const webpack = require('webpack');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
	devtool: 'inline-source-map', 
	devServer: {
	  hot: true,
	  contentBase: './dist',
	},
	plugins: [
	  new uglifyJsPlugin(),
	  new webpack.NamedModulesPlugin(),
	  new webpack.HotModuleReplacementPlugin(),	
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
