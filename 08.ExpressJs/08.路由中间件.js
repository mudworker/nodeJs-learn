/**
 * express中间件：守卫
 * 全局中间件、路由中间件
 * 需求：记录每个请求的 url 与 ip 地址 到文件里面 （访问日志）
 */
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

// 声明中间件函数
const logMiddleware = (req, res, next) => {
    // 获取 url 和 ip
    const { url, ip } = req
    // 写入 access.log
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)
    // 调用next
    next()
}

// 使用中间件函数
app.use(logMiddleware)

app.get('/home', (req, res) => {
    res.send('前台首页')
})

app.get('/admin', (req, res) => {
    res.send('后台首页')
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...')
})

