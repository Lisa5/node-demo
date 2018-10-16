## node-demo

## 安装依赖
```
npm i
```
### Run
```
node index.html
浏览器访问：http://localhost:8888/start
```

### 目录结构

        ├── README.md
        ├── node_modules
        ├── tmp  // 文件上传目录
        ├── helloworld.js //  初识node，"hello world!"
        ├── package.json
        ├── index.js // node 启动文件
        ├── server.js // node http服务器
        ├── router.js // node 路由文件
        ├── requestHandlers.js // node 路由函数处理文件
        └── testUpload.js  // node-formidable处理文件上传

### 特别说明
# 本文项目为初学node时所写，主要包括以下功能：
1. 创建http服务器：监听端口以及添加回调处理函数，详见server.js的start函数
2. 简单的路由概念：将路由分离开，根据访问路由不同做出不通的响应，详见router.js 文件
3. 处理文件上传的服务器并在浏览器显示，详见requestHandlers.js
  （使用node本身的fs模块将文件读取到我们的服务器中，然后使用formidable模块读取文件显示在浏览器）
 
#本文档针对初学者，如果你用心理解了如何创建服务器，并懂得如何将路由的概念应用到项目中，并会充分利用node的非阻塞操作，那么你已经入门node了！