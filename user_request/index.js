var express = require('express');
var request = require('request');
var app = express();
app.set("view engine", "ejs");

request("http://daretodiscover.net/user", function(error, response, body){
var apiData = JSON.parse(body);

	app.get("/firstname", function(req, res){
		res.render("firstname", {
			userData: apiData
		});
	});

	app.get("/lastname", function(req, res){
		res.render("lastname", {
			userData: apiData
		});
	});

	app.get("/all", function(req, res){
		res.render("all", {
			userData: apiData
		});
	});

});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Listening at http://%s:%s", host, port);
});




//Can put the request encasing all the routes??? OR inside all the routes...:
// app.get('/firstname', function(req, res){
// 	request('http://daretodiscover.net/user', function(error, response, body){
// 		var apiData = JSON.parse(body);
// 		res.render('firstname', {
// 			userData: apiData
// 		})
// 	});
// });

// app.get('/lastname', function(req, res){
// 	request('http://daretodiscover.net/user', function(error, response, body){
// 		var apiData = JSON.parse(body);
// 		res.render('lastname', {
// 			userData: apiData
// 		})
// 	});
// });

// app.get('/all', function(req, res){
// 	request('http://daretodiscover.net/user', function(error, response, body){
// 		var apiData = JSON.parse(body);
// 		res.render('all', {
// 			userData: apiData
// 		})
// 	});
// });


