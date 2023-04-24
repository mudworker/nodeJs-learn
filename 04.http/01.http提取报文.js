const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求的方法
    console.log(request.method)
    // 获取请求的url
    console.log(request.url) // 只包含url中的路径与查询字符串，不包含协议、ip和端口
    // 获取HTTP协议的版本号
    console.log(request.httpVersion)
    // 获取HTTP的请求头
    console.log(request.headers)



    response.end('http') // 设置响应体，并结束
})

// 监听端口，并启动服务
// http默认端口为80，https默认为443
server.listen(9000, () => {
    console.log('服务启动成功...')
})
