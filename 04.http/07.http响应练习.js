/**
 * 需求：
 * 搭建一个HTTP服务，响应一个4行3列的表格，并要求表格有隔行换色，且点击单元格高亮显示
 */
const http = require('http')
const fs = require('fs')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    if (pathname === '/') {
        // 读取文件内容
        let html = fs.readFileSync('./page/table.html')
        response.end(html)
    } else if (pathname === '/css/table.css') {
        // 读取文件内容
        let html = fs.readFileSync('./page/css/table.css')
        response.end(html)
    } else if (pathname === '/js/table.js') {
        // 读取文件内容
        let html = fs.readFileSync('./page/js/table.js')
        response.end(html)
    } else {
        response.statusCode = 404
        response.end('<h1>404 Not Found</h1>')
    }
})


server.listen(9000, () => {
    console.log('服务启动成功...')
})
