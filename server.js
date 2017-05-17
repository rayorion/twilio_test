// Express setup

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

//include other libraries
var router = express.Router();
require('./router')(app, path);
var routes =require('./restapi');


// ----- USE -----
// configure app to use bodyParser()
// Body Parser will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/assets')));
app.use(express.static(path.join(__dirname + '/View')));

routes(router);
app.use('/api', router);

app.listen(port , function(){
	console.log("Express started --  ");
});



