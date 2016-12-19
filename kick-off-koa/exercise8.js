/*
 *  COOKIE - Exercise 8 of 11
 */

var koa = require('koa');


var args = process.argv;
var port = args[2] || '3000';
var app = koa();


app.keys = ['shallong'];
app.listen(port);


app.use(function* (next) {

    if (this.url !== '/') {
        return yield next;
    }

    var countCookie = this.cookies.get('view', { signed: true })
    var viewCount;

    if (countCookie) {
        var newCount = parseInt(countCookie) + 1;
        viewCount = newCount;
        this.cookies.set('view', newCount, { signed: true });
    } else {
        viewCount = 1;
        this.cookies.set('view', 1, { signed: true });
    }

    this.body = viewCount + " views";

});
