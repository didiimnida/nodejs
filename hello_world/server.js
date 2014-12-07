//Using just Node.js:

// var http = require('http'); //Requiring an http modulue.

// function greet(req,res){
// 	res.writeHead(200, {"content-type": "text/plain"});
// 	res.write("Hello World");
// 	res.end();
// }

// var server = http.createServer(greet);

// server.listen(3000);

//Versus Using Express:

var express = require('express');
var request = require('request');
var app = express();

app.set("view engine", "ejs");

//REQUEST
app.get('/getgoogle', function(req, res){
	request('http://localhost:3000/add/2/3', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        console.log(body); // Print the google web page.
	    }
	});
});

//TEST ROUTES:
app.get('/hello/:name', function (req, res) {
	console.log(req);
    res.send('Hello World!, '+ req.params.name);
});

app.get("/hello/:name/:lastname", function(req, res) {
    res.send("Hello " + req.params.name + " " + req.params.lastname);
});

//TEMPLATING ROUTE:
app.get('/greeting', function(req,res){
	res.render("index.ejs", {
        greeting: "Diana!"
    });
});

//MATH ROUTES:
app.get('/add/:number1/:number2', function(req, res){
	var sum = parseInt(req.params.number1) + parseInt(req.params.number2);
	res.send("The sum is: " + sum);
});

app.get('/subtract/:number1/:number2', function(req, res){
	var difference = parseInt(req.params.number1) - parseInt(req.params.number2);
	res.send("The difference is: " + difference);
});

app.get('/divide/:number1/:number2', function(req, res){
	var quotient = parseInt(req.params.number1) / parseInt(req.params.number2);
	res.send("The quotient is: " + quotient);
});

app.get('/multiply/:number1/:number2', function(req, res){
	var product = parseInt(req.params.number1) * parseInt(req.params.number2);
	res.send("The product is: " + product);
});

//SERVER LISTEN
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});



