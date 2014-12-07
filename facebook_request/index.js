var express = require('express');
var request = require('request');
var app = express();

app.set("view engine", "ejs");


app.get('/facebook', function(req, res){
	request('http://www.facebook.com', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        //console.log(body); // Print the google web page.
	        res.render("index.ejs",{
	        	name: body
	        });
	    }
	});
});

app.get('/userdata', function(req, res){
	request('http://daretodiscover.net/user', function(error, response, body){
		var apiData = JSON.parse(body);
		res.render('users', {
			userData: apiData
		})
	});
});

app.get('/', function(req,res){
	res.render("index.ejs", {
        name: "Diana"
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});