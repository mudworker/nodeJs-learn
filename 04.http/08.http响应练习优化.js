/**
 * 需求：
 * 搭建一个HTTP服务，端口为9000，满足以下条件
 * GET /table.html 响应 page/table.html
 * GET /table.css 响应 page/css/table.css
 * GET /table.js 响应 page/js/table.js
 * 
 * http://localhost:9000/table.html
 */
const http = require('http')
const fs = require('fs')
// 声明根目录
const root = __dirname + '/page'

// 创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    // 拼接路径
    let filePath = root + pathname
    // 读取文件 fs 异步api
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // 设置响应头，优先级比前端html中设置meta的优先级更高
            response.setHeader('content-type','text/html;charset=utf-8')
            response.statusCode = 500
            response.end('文件读取失败')
            return
        }
        // 响应文件内容
        response.end(data)
    })
})


server.listen(9000, () => {
    console.log('服务启动成功...')
})
