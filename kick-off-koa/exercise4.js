/*
 * RESPONSE_BODY - Exercise 4 of 11
 */

var koa = require('koa');
var fs = require('fs');


var args = process.argv;
var port = args[2] || '3000';
var filePath = args[3] || '';
var app = koa();


app.listen(port, function() {
    // console.info('Application started on port: ' + port);
});

app.use(function *(next) {
    console.info('method = ' + this.method);
    console.info('url = ' + this.url);

    if (this.url !== '/stream') {
        return yield next;
    }

    var streamReader = fs.createReadStream(filePath);
    this.body = streamReader;

});

app.use(function *(next) {

    if (this.url !== '/json') {
        return yield next;
    }

    var json = {
        'foo' : 'bar'
    };

    this.body = json;

});
