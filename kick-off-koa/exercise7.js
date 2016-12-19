/*
 * ERROR_HANDLING - Exercise 7 of 11
 */

var koa = require('koa');

var args = process.argv;
var port = args[2] || '3000';
var app = koa();

app.use(errorHandler());

app.use(function* () {
    if (this.path === '/error') throw new Error('ooops');
    this.body = 'OK';
});

function errorHandler() {
    return function* (next) {
        // try catch all downstream errors here
        try {
            yield next;
        } catch (e) {
            // console.error(e);
            this.body = 'internal server error';
            this.status = 500;

            // can emit on app for log
            // this.app.emit('error', err, this);
        }
    };
}

app.listen(port);
