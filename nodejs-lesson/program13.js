/*
 * HTTP JSON API SERVER (Exercise 13 of 13)
 */

var http = require('http');


var args = process.argv;
var port = args[2] || '3000';
var moment = require('moment');
var url = require('url');

var dateJson = {
    'hour':0,
    'minute':0,
    'second':0
};
var unixTimeJson = {
    'unixtime': 0
}
var server = http.createServer(function(req, res) {
    var result = {};
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    if (req.method.toUpperCase() === 'GET') {
        // console.info('url = ' + req.url);
        var parsedUrl = url.parse(req.url, true);

        if (parsedUrl.pathname === '/api/parsetime') {

            var isoString = parsedUrl.query.iso;
            var rawDate = new Date(isoString);
            dateJson.hour = rawDate.getHours();
            dateJson.minute = rawDate.getMinutes();
            dateJson.second = rawDate.getSeconds();
            result = dateJson;

        } else if (parsedUrl.pathname === '/api/unixtime') {

            var isoString = parsedUrl.query.iso;
            var rawDate = new Date(isoString);
            unixTimeJson.unixtime = rawDate.getTime();
            result = unixTimeJson;

        } else {
            var json = {
                'success': 'false',
                'message': 'No match URL'
            };
            result = json;
        }

    } else {
        var json = {
            'success': 'false',
            'message': 'Only support POST'
        };
        result = json;
    }

    res.write(JSON.stringify(result));
    res.end();
});
server.listen(port, function() {
    console.info('Server start! Listen on port: ' + port);
});
