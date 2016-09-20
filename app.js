var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var ejs =  require('ejs');
var ejsLayouts = require('express-ejs-layouts');
var ejsLocals = require('ejs-locals');
var engine = require('ejs-mate');
var session = require('express-session');
var favicon = require('serve-favicon');
var passport = require('passport');
var flash =  require('connect-flash'); //attach error messages to the request object and render these messages  in the views
var validator = require('express-validator');
// make sure to instantiate connect-mongo AFTER importing the session package above. get the mysql one here: https://github.com/expressjs/session#compatible-session-stores
var MongoStore = require('connect-mongo')(session);

// require('./config/passport');

var app = express();


// set up  view engine
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

//set up middleware
app.use(express.static(__dirname + '/public'));
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(validator());// must follow bodyparser to access the info
app.use(cookieParser());



//set up home route
var homeRoute = require('./routes/index');
app.use('/', homeRoute);

app.listen('8080', function () {
    console.log('server running...')
});

