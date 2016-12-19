var koa = require('koa');
var app = koa();
var port = process.argv[2] || '3000';


app.use(function* (next) {
    console.info('/404 part is calling');
    console.info('next = ' + next);

    if (this.path !== '/404') {
        return yield next;
    }

    this.body = 'page not found';
});

app.use(function* (next) {
    console.info('/500 part is calling');
    console.info('next = ' + next);

    if (this.path !== '/500') {
        return yield next;
    }

    this.body = 'internal server error';
})

app.use(function* (next) {
    console.info('/ part is calling');
    console.info('next = ' + next);

    if (this.path !== '/') {
        return yield next;
    }

    this.body = 'hello koa';
});

app.listen(port);
