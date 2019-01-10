const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev.js');
const options = {
	contentBase: './dist',
	hot: true,
	host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const complie = webpack(config);
const server = new webpackDevServer(complie, options);

server.listen(5000, 'localhost', ()=> {
	console.log('dev server listening on prot 5000');
})