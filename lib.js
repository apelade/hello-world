var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

function configEnvironment(app){
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(path.join(__dirname, 'public')));
  app.use(express.static(path.join(__dirname, 'public')));
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }
}

function setRoutes(app){
  app.get('/', routes.index);
  app.get('/users', user.list);
}

module.exports = exports = function startApp() {
  var app = express();
  var server = http.createServer(app);
  configEnvironment(app);
  setRoutes(app);
  server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
  return server;
}
