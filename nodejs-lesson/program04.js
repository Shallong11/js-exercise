var args = process.argv;

if (args.length <= 2) {
	console.log(0);
	return;
}

var fs = require('fs');

var filePathToRead = args[2];
fs.readFile(filePathToRead, 'utf8', function(err, data) {
  if (err) {
    console.log(0);
    return;
  }

  // console.log(typeof data); -> string (if apply 'utf8')
  // console.log(typeof data); -> object

  var fileArr = data.split('\n');
  console.log(fileArr.length - 1);
});
