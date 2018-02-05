const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(base, { 
	plugins: [
	  new uglifyJsPlugin({
	  	sourceMap: true,
	  }),
	],
});
