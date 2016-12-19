/*
 * AUTHENTICATION - Exercise 11 of 11
 */

var koa = require('koa');
var parse = require('co-body');
var session = require('koa-session');


var args = process.argv;
var port = args[2] || '3000';
var form =
'<form action="/login" method="POST">\
  <input name="username" type="text" value="username">\
  <input name="password" type="password" placeholder="The password is \'password\'">\
  <button type="submit">Submit</button>\
</form>';


var app = koa();
app.keys = ['shallong1', 'shallong2', 'shallong3'];
var CONFIG = {
    key: 'wslong',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true
};


app.use(session(CONFIG, app));


app.use(function* home(next) {
    // console.info('>> home');

    if (this.request.path !== '/') {
        return yield next;
    }

    if (this.session.authenticated) {
        this.body = 'hello world';
    } else {
        this.status = 401;
    }

});


app.use(function* login(next) {
    // console.info('>> login');

    if (this.request.path !== '/login') {
        return yield next;
    }

    if (this.request.method.toUpperCase() == 'GET') {
        this.body = form;
    } else if (this.request.method.toUpperCase() == 'POST') {
        var requestBody = yield parse(this);
        if (requestBody.username === 'username' && requestBody.password === 'password') {
            this.session.authenticated = true;
            this.redirect('/');
        } else {
            this.status = 400;
        }
    }

});


app.use(function* logout(next) {
    // console.info('>> logout');

    if (this.request.path !== '/logout') {
        return yield next;
    }

    this.session.authenticated = false;
    this.redirect('/login');

})



app.listen(port);
