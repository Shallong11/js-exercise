/*
 *  SESSION - Exercise 9 of 11
 */

var koa = require('koa');
var session = require('koa-session');


var args = process.argv;
var port = args[2] || '3000';


var app = koa();
app.keys = ['shallong'];
var CONFIG = {
    key: 'wslong',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true
};


app.use(session(CONFIG, app));

app.use(function* (next) {

    if (this.url !== '/') {
        return yield next;
    }

    // console.info(this.session.views);

    var count = this.session.views || 0;
    this.session.views = ++count;
    this.body = count + ' views';

});


app.listen(port);
