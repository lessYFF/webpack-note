const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
	  new webpack.NamedModulesPlugin(),
	  new webpack.HotModuleReplacementPlugin(),	
	  new cleanWebpackPlugin(['dist']),
	  new HtmlWebpackPlugin({
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
