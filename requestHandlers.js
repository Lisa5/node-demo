var exec = require("child_process").exec;

function start(response) {
    console.log('*********start router*********');
    /** 阻塞操作 */
    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while(new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(9000);
 
    /** 非正确的非阻塞操作 */
    // var content = "empty";
    // exec("ls -lah", function (error, stdout, stderr) {
    //     content = stdout;
    // });
    // return content;

    /** 正确的阻塞操作，在回调里面处理返回 */
    // exec("find /",
    //     { timeout: 10000, maxBuffer: 20000*1024 },
    //     function (error, stdout, stderr) {
    //         response.writeHead(200, {"Content-Type": "text/plain"});
    //         response.write(stdout);
    //         response.end();
    //     });
    
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response) {
    console.log('*********upload router*********');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;