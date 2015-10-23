var fs = require("fs");

var fileInput = function(callback) {
	fs.readFile(process.argv[2],"utf8",function (error, fileContents) {
		callback(fileContents);
	});
};

var newLineCount = function(str) {
	console.log(str.split("\n").length-1);
};

fileInput(newLineCount);