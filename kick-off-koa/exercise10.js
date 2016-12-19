/*
 *  TEMPLATING - Exercise 10 of 11
 */

var koa = require('koa');
var views = require('co-views');


var args = process.argv;
var port = args[2] || '3000';


var app = koa();
var render = views(__dirname + '/views', { ext: 'ejs' });


app.use(function* (next) {

    if (this.url !== '/') {
        return yield next;
    }

    var user = {
        'name': {
            'first': 'Tobi',
            'last': 'Holowaychuk'
        },
        'species': 'ferret',
        'age': 3
    };

    this.body = yield render('user', { user: user })

});



app.listen(port);
