/*
 * JUGGLING ASYNC (Exercise 9 of 13)
 */

var args = process.argv;

// verify

var http = require('http');
var bl = require('bl');
var cs = require('concat-stream');

var urlArray = [];
urlArray.push(args[2]);
urlArray.push(args[3]);
urlArray.push(args[4]);

var requestCount = 0;
var resContent = new Array(3);

// url.forEach(function(i, d) {
//     console.info(i);
// });

/*
cloud11:nodejs-lesson CloudCoupang$ node program08.js http://m.baidu.com
65219
cloud11:nodejs-lesson CloudCoupang$ node program08.js http://www.baidu.com
14278
cloud11:nodejs-lesson CloudCoupang$ node program08.js http://tieba.baidu.com
222564
*/


for (var i = 0; i < urlArray.length; i++) {
    httpGet(urlArray[i]);
}


function httpGet(url) {
    http.get(url, function(res) {
        res.setEncoding('utf8');

        res.pipe(cs(function (data) {
            requestCount ++;
            var dataStr = data.toString();
            var dataStrLen = dataStr.length;
            for (var i = 0; i < urlArray.length; i ++) {
                if (urlArray[i] === url) {
                    resContent[i] = dataStr;
                    break;
                }
            }
            checkCountAndPrint();
        }));
    }).on('error', function(err) {
        console.error(err);
    });
}

function checkCountAndPrint() {
    if (requestCount === 3) {
        resContent.forEach(function(data) {
            console.info(data);
        })
    }
}
