/*
 * TIME SERVER (Exercise 10 of 13)
 */


var args = process.argv;
var port = args[2];
var net = require('net');
var moment = require('moment');
var timeFormat = 'YYYY-MM-DD HH:mm';

var server = net.createServer(function(socket) {
    socket.write(moment(new Date()).format(timeFormat)+'\n');
    socket.end();
});
server.listen(port);
