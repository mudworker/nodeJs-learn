const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
    // console.log('服务被请求')
    // response.end('Hello HTTP Server') // 设置响应体，并结束


    // 中文
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('你好') // 设置响应体，并结束
})

// 监听端口，并启动服务
// http默认端口为80，https默认为443
server.listen(9000, () => {
    console.log('服务启动成功...')
})
