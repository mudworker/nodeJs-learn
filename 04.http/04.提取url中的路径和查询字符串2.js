// http://localhost:9000/search?keyword=123

const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 实例化 URL 的对象（建议使用）
    let url = new URL(request.url, 'http://127.0.0.1')
    // console.log(url)

    // 输出路径
    console.log(url.pathname)
    // 输出查询字符串
    console.log(url.searchParams.get('keyword'))

    response.end('url new') // 设置响应体，并结束

})

// 监听端口，并启动服务
// http默认端口为80，https默认为443
server.listen(9000, () => {
    console.log('服务启动成功...')
})
