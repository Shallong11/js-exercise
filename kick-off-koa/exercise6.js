/*
 *  MIDDLEWARE - Exercise 6 of 11
 */

var koa = require('koa');


var args = process.argv;
var port = args[2] || '3000';


var app = koa();
app.listen(port);


app.use(responseTime());
app.use(upperCase());

app.use(function* () {
    console.info('main body');
    this.body = 'hello koa';
});

function responseTime() {
    return function* (next) {
        console.info('response time start');
        // record start time
        var startTime = new Date();
        yield next;
        console.info('response time continue');
        // set X-Response-Time head
        var endTime = new Date();
        var timeLeap = endTime.getTime() - startTime.getTime();
        console.info('time leap = ' + timeLeap);
        this.set('X-Response-Time', timeLeap);
    };
}

function upperCase() {
    return function* (next) {
        console.info('upper case start');
        // do nothing
        yield next;
        console.info('upper case continue');
        // convert this.body to upper case
        this.body = this.body.toUpperCase();
    };
}
