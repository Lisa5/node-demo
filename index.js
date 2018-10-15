var server = require('./server');
var router = require('./router');
var requesthandles = require('./requestHandlers');

var handle = {};
handle['/'] = requesthandles.start;
handle['/start'] = requesthandles.start;
handle['/upload'] = requesthandles.upload;

server.start(router.route, handle);