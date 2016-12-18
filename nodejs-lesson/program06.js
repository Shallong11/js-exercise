/*
 * MAKE IT MODULAR (Exercise 6 of 13)
 */

var args = process.argv;

//
var fs = require('fs');
var printObj = require('./program05.js');

//
var directory = args[2];
var extension = args[3];


//
printObj.printByExt(directory, extension, function(err, data) {
    if (err) {
		console.log("");
		return;
	}

	if (data) {
		for (var i = 0; i < data.length; i++) {
  	    	console.log(data[i]);
	  	}
	}
});
