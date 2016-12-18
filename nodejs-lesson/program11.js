/*
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 */

var args = process.argv;
var http = require('http');
var fs = require('fs');

var port = args[2] || '3000';
var filePath = args[3];

// console.info('port = ' + port);
// console.info('filePath = ' + filePath);

var server = http.createServer(function(req, res) {
    var fileStreamReader = fs.createReadStream(filePath);
    fileStreamReader.pipe(res);
    // fileStreamReader.on('data', function(churk) {
    //     res.write(churk);
    //     res.end();
    // });
});
server.listen(port);
