/*
 * CONTENT_HEADERS - Exercise 5 of 11
 */

var koa = require('koa');


var args = process.argv;
var port = args[2] || '3000';

var app = koa();
app.listen(port);

app.use(function *() {
    var reqType = this.request.type;
    var reqLength = this.request.length;
    var resType = this.response.type;
    var resLength = this.response.length;
    var isJson = this.request.is('json');

    console.info('request type = ' + reqType);
    console.info('request length = ' + reqLength);
    console.info('response type = ' + resType);
    console.info('response length = ' + resLength);
    console.info('isJson = ' + isJson); // not working

    if (reqType === 'application/json') {
        this.response.type = 'application/json';
        this.body = {
            'message':'hi!'
        };
    } else {
        this.response.type = 'plain/text';
        this.body = "ok";
    }

});
