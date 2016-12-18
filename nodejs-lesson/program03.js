var args = process.argv;

if (args.length <= 2) {
	console.log(0);
	return;
}

var fs = require('fs');

var filePathToRead = args[2];
var fileBuffer = fs.readFileSync(filePathToRead); // this is buffer

// console.log(typeof fileBuffer); -> Object

var fileString = fileBuffer.toString();

var fileArr = fileString.split('\n');
console.log(fileArr.length - 1);
