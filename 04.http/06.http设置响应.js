const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 1.设置响应状态码
    // response.statusCode = 200 // 默认就是200

    // 2.响应状态的描述
    // response.statusMessage = 'eqweqweqw' // 自动和状态码对应，几乎不需要自己设置

    // 3.响应头
    // response.setHeader('content-type', 'text/html;charset=utf-8')
    // response.setHeader('Server', 'Node.js')
    // response.setHeader('myHeader', 'test test test')
    // response.setHeader('test', ['a', 'b', 'c']) // 设置多个同名响应头
    
    // 4.响应体设置
    response.write('777') // 一般性设置了write后，end里面就不设置了
    response.write('888') 
    response.write('rty') 


    response.end() // 设置响应体，并结束，只能由一个end，否则报错

})

// 监听端口，并启动服务
// http默认端口为80，https默认为443
server.listen(9000, () => {
    console.log('服务启动成功...')
})
