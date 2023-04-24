const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 1.声明一个变量
    let body = ''
    // 2.绑定data事件
    request.on('data', chunk => {
        body += chunk
    })
    // 3.绑定end事件
    request.on('end', () => {
        console.log('body:', body)

        response.end('Hello Http') // 设置响应体，并结束
    })

})

// 监听端口，并启动服务
// http默认端口为80，https默认为443
server.listen(9000, () => {
    console.log('服务启动成功...')
})
