// 1、导入express
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由
app.get('/response', (req, res) => {
    // 原生响应
    // res.statusCode = 404
    // res.statusMessage = 'eqweq'
    // res.setHeader('xxx','eqweq')
    // res.write('hello express')
    // res.end('response')

    // express 响应
    // res.status(500)
    // res.set('aaa', 'bbb')
    // res.send('你好 Express') // 不会乱码，express内部会自动加编码头
    res.status(500).set('abc', 'ewq').send('这些都是 ok 的') // 支持链式调用
})

// 4.监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...')
})
