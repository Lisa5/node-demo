var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var postData = '';
        console.log("Request received.");
        let pathname = url.parse(request.url).pathname;

        request.setEncoding("utf8");
        request.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        })
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server running at http://127.0.0.1:8888/ or  http://localhost:8888/')
}

exports.start = start
