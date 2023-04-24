// http://localhost:9000/search?keyword=123

const http = require('http')
// 1.导入url模块
const url = require('node:url')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 2.解析request.url
    // console.log(request.url)
    let res = url.parse(request.url, true)
    // console.log(res)
    // 路径
    let path = res.pathname
    // 查询字符串
    let keyword = res.query.keyword
    console.log(path, keyword)
    
    response.end('url') // 设置响应体，并结束

})

// 监听端口，并启动服务
// http默认端口为80，https默认为443
server.listen(9000, () => {
    console.log('服务启动成功...')
})
