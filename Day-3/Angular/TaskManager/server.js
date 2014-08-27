var fs = require("fs"),
	http = require("http"),
	path = require("path"),
	querystring = require("querystring"),
	url = require("url");

var extensions = [".html",".ico",".css",".js",".img"];

String.prototype.endsWith = function(str){
	return this.substr(this.length - str.length) === str;
}

function isStaticResource(path){
	return extensions.some(function(extn){
		return path.endsWith(extn);
	});
}
var tasks = [
	{id : 1, name : "Learn jQuery", isCompleted : false},
	{id : 2, name : "Explore JavaScript", isCompleted : false},
	{id : 3, name : "Master AngularJs", isCompleted : false},
];

var server = http.createServer(function(req,res){
	var urlPath = url.parse(req.url).pathname
		filePath = path.join(__dirname,urlPath); 

	if (isStaticResource(filePath)){
		if (fs.existsSync(filePath)){
			console.log(filePath, " - served..");
			fs.createReadStream(filePath).pipe(res);
		} else {
			console.log(filePath, " - not found..");
			res.statusCode = 404;
			res.end();
		}
	} else {
		if (urlPath === '/tasks'){
			setTimeout(function(){
				res.write(JSON.stringify(tasks));
				res.end();
			}, 1000);
		}
	}
});

server.listen(9090);
console.log("Server running on port 9090");