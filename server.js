var http = require('http'); //Requiring an http modulue.

function greet(req,res){
	res.writeHead(200, {"content-type": "text/plain"});
	res.write("Hello World");
	res.end();
}

var server = http.createServer(greet);

server.listen(3000);