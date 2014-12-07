
//Boilerplate:
var express = require('express');
var request = require('request');
var app = express();
app.set("view engine", "ejs");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended:true
}));
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Routes:
app.get('/users', function(req, res){
	request('http://daretodiscover.net/user', function(error, response, body){
		var apiData = JSON.parse(body);
		res.render('users', {
			userData: apiData
		})
	});
});

app.get('/newuser', function(req, res){
	res.render('new');
});

app.post("/newuser", function(req, res){
	request({
		method: "POST",
		uri: "http://daretodiscover.net/user",
		formData: {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			age: req.body.age,
			username: req.body.username
		}
	}, function(){
		res.redirect("/users");
	});
});

app.get('/users/:id', function(req, res){
	request("http://daretodiscover.net/user/" + req.params.id, function(error, response, body){
		res.render("edit",{
			userInfo: JSON.parse(body)
		});
	});
});

app.put('/users/:id', function(req, res){
	request({
		method: "PUT",
		uri: "http://daretodiscover.net/user/" + req.params.id,
		formData: {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			age: req.body.age,
			username: req.body.username
		}
	}, function(){
		res.redirect("/users");
	});
});

app.delete("/users/:id", function(req, res) {
    request({
        method: "DELETE",
        uri: "http://daretodiscover.net/user/" + req.params.id
    }, function(error, response, body) {
        res.redirect("/users");
    });
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server listening at http://%s:%s", host, port);
});