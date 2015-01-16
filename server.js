var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// configuring our environments
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// require mongoose for MongoDB
var mongoose = require('./config/mongoose')

//we're going to have ./config/routes.js to handle all of our routing
var routes = require('./config/storeRoutes')(app);

app.set('port', process.env.PORT || 6789);
app.listen(app.get('port'), function() {
    console.log('\n ***************************************************');
    console.log('*****   Express server listening on port ' + app.get('port') + '   *****');
    console.log(' ***************************************************\n');
});