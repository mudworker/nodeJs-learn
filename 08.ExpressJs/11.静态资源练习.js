/**
 * 访问：http://127.0.0.1:3000/，自动访问到public下的index.html，并且内部应用的静态资源都能访问到
 */

const express = require('express')

const app = express()

// 静态资源中间件配置
app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
    console.log('服务已启动，端口3000正在监听中')
})