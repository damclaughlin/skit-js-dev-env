var express = require('express');
var path = require('path');
var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';


var port = 3001;
var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware') (compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req,resp) {
	resp.sendFile(path.join(__dirname, '../src/index.html'));

});

app.listen(port,function(err) {
	if(err) {
		/* eslint-disable no-console */
        // The above line will cause elslint to ignore the following console.log
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
