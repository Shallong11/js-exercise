var args = process.argv;

var fs = require('fs');

var directory = args[2];
var extension = args[3];

// printFilesByExtension(directory, extension, function(err, data) {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
//
// 	if (data) {
// 		for (var i = 0; i < data.length; i++) {
//   	    	console.log(data[i]);
// 	  	}
// 	}
// });

var printObj = {}

function printFilesByExtension(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
	  if (err) {
	    callback && callback(err);
	    return;
	  }

	  var results = [];
	  for (var i = 0; i < list.length; i++) {
	    if (list[i].endsWith('.' + ext)) {
	      results.push(list[i]);
	    }
	  }

	  callback(null, results)
	});
}

printObj.printByExt = printFilesByExtension;

module.exports = printObj;

// printFilesByExtension(directory, extension, function(err, data) {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}
//
// 		if (data) {
// 			for (var i = 0; i < data.length; i++) {
// 	  	    	console.log(data[i]);
// 		  	}
// 		}
// });
