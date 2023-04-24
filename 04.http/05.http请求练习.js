const http = require('http')

const server = http.createServer((request, response) => {
    // 获取请求方法和路径
    let { method, url } = request
    let pathname = new URL(url, 'http://127.0.0.1')
    response.setHeader('content-type','text/html;charset=utf-8')
    // 判断
    if (method === 'GET' && pathname === '/login') {
        response.end('登陆页面')
    } else if (method === 'GET' && pathname === '/reg') {
        response.end('注册页面')
    } else {
        response.end('Not Found')
    }
})


server.listen(9000, () => {
    console.log('服务已启动，9000端口监听中...')
})