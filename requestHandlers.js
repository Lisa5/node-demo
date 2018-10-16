// var exec = require("child_process").exec;
  
var formidable = require('formidable'),
    fs = require('fs');

function start(response, postData) {
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
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
    console.log('*********upload router*********');
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(err, fields, files) {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "tmp/test.jpeg"); // 读取上传的文件并存储到http服务器路径：tmp/test.jpeg
        response.writeHead(500, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

// 读取服务器文件并显示（tmp/test.jpeg）
function show(response, postData) {
    console.log("Request handler 'show' was called.");
    fs.readFile("tmp/test.jpeg", "binary", function(error, file) {
      if(error) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(error + "\n");
        response.end();
      } else {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
      }
    });
  }

exports.start = start;
exports.upload = upload;
exports.show = show;