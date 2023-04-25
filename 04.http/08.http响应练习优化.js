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
    if (request.method !== 'GET') {
        response.statusCode = 405
        response.end('<h1>405 Method Not Allowed</h1>')
        return
    }

    // 获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    // 拼接路径
    let filePath = root + pathname
    // 读取文件 fs 异步api
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // console.log(err)
            // 设置字符集
            response.setHeader('content-type', 'text/html;charset=utf-8')
            // 判断错误
            switch (err.code) {
                case 'ENOENT':
                    response.statusCode = 404
                    response.end('<h1>404 Not Found</h1>')
                    break
                case 'EPERM':
                    response.statusCode = 403
                    response.end('<h1>403 Forbidden</h1>')
                    break
                default:
                    response.statusCode = 500
                    response.end('<h1>500 Internal Server Error</h1>')
                    break

            }
            return
        }
        // 响应文件内容
        response.end(data)
    })
})


server.listen(9000, () => {
    console.log('服务启动成功...')
})
