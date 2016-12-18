/*
 * HTTP CLIENT (Exercise 7 of 13)
 */

var args = process.argv;

var http = require('http');

var url = args[2];
// console.info('request url = ' + url);

http.get(url, function(res) {
    res.setEncoding('utf8');

    res.on('data', function(chunk){
        // console.info('get response successfully!');
        console.log(chunk);
    });
}).on('error', function(e) {
    // console.info('unable to get response');
    console.error(e.message);
});
