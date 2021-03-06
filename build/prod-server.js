const app = require('express')();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../config/webpack.prod.js');
const complie = webpack(config);

app.use(webpackDevMiddleware(complie, {
  publicPath: config.output.publicPath,		
}));

// server the files on port 3000
app.listen(3000, function(){
  console.log('Example app listening on port 3000!\n');
});
