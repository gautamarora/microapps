var express = require('express');
var browserify = require('browserify');

var app = require('./app');
var client = './client'; //this is not a require, just the path

var server;
var port = process.env.PORT || 3000;

startServer(app);

var cachedJs;

function startServer(app) {
  var bfyOptions = app.initBrowserifyOptions ? app.initBrowserifyOptions : {debug: true, insertGlobals: true};
  var bfy = app.initBrowserify ? app.initBrowserify(browserify, bfyOptions) : browserify(bfyOptions);
  bfy.require(client, { entry: true });
  
  var _app = express();
  server = _app.listen(port);
  app.init(_app, express);
  
  _app.get('/bundle.js', function(req, res) {
    res.contentType('application/javascript');
    if(cachedJs) {
      console.log("Returning cached JS bundle.");
      return res.end(cachedJs);
    }
    console.log("Bundling JS...");
    bfy.bundle(function(err, js) {
      if (err) {
        console.error(err);
        return res.send(500);
      }
      console.log("JS Bundle done!");
      cachedJs = js;
      res.end(js);
    });
  });
}

server.on('listening', onListening);
server.on('error', onError);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Server is listening on %s', bind);
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}