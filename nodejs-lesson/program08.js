/*
 * HTTP COLLECT (Exercise 8 of 13)
 */

var args = process.argv;

var http = require('http');
var bl = require('bl');
var cs = require('concat-stream');

var url = args[2];

http.get(url, function(res) {
    res.setEncoding('utf8');

    // res.on('data', function(chunk){
    //     console.log(chunk);
    // });

    // res.pipe(bl(function (err, data){
    //     // console.info('entry bl');
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //
    //     var dataStr = data.toString();
    //     console.log(dataStr.length);
    //     console.log(dataStr);
    // }));

    res.pipe(cs(function (data){
        // console.info('entry concat-stream');

        var dataStr = data.toString();
        console.log(dataStr.length);
        // console.log(dataStr);
    }));
}).on('error', function(e) {
    console.error(e.message);
});
