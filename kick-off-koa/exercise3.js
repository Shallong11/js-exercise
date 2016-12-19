/*
 *  REQUEST_BODY - Exercise 3 of 11
 */

var koa = require('koa');
var app = koa();
var port = process.argv[2] || '3000';


var parse = require('co-body');

// console.info('app.name = ' + app.name);
// console.info('app.env = ' + app.env);
// console.info('app.proxy = ' + app.proxy);
// console.info('app.subdomainOffset = ' + app.subdomainOffset);

app.use(function *(next) {
    console.info('url = ' + this.url + ', method = ' + this.method + ', query = ' + JSON.stringify(this.query) + ', host = ' + this.host);
    if (this.url !== '/') {
        return yield next;
    }

    if (this.method !== 'POST') {
        return yield next;
    }

    var requestBody = yield parse(this);
    console.info(requestBody);

    if (requestBody.name === undefined) {
        return yield next;
    }

    this.body = requestBody.name.toUpperCase() + '\n';
});

app.listen(port);
