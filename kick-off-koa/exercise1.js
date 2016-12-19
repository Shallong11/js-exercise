var koa = require('koa');
var app = koa();
var port = process.argv[2] || '3000';

app.listen(port, function() {
    console.info('Server started on port: ' + port);
});

// app.use(function *() {
//     this.body = 'hello koa';
// })

app.use(function *() {
    var path = this.path;
    console.info('path = ' + path);
    this.body = 'hello koa.';
});
