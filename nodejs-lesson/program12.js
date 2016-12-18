/*
 * HTTP UPPERCASERER (Exercise 12 of 13)
 */

var args = process.argv;


var http = require('http');
var map = require('through2-map');
var qs = require('querystring');


var port = args[2] || '3000';


var server = http.createServer(function(req, res) {

    if (req.method.toUpperCase() === 'POST') {
        var postData = '';
        req.on("data", function(data) {
            postData += data;
        });
        req.on('end', function() {
            res.write(postData.toUpperCase());
            res.end();
        })
    } else if (req.method.toUpperCase() === 'GET') {
        var query = qs.parse(req.url);
        res.write(JSON.stringify(query));
        res.end();
    }

    // req.pipe(map(function (chunk) {
    //     console.info(chunk);
    //     return chunk.toString().toUpperCase();
    // })).pipe(res);
});
server.listen(port);
