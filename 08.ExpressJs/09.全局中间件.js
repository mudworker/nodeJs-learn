/**
 * express中间件：守卫
 * 全局中间件、路由中间件
 * 需求：针对 /admin /setting 的请求，要求 url 携带 code=521，如果未携带，提示【暗号错误】
 */
const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.send('前台首页')
})

// 声明中间件函数
const checkCodeMiddleware = (req, res, next) => {
    // 判读 url 中是否 code===521
    if (req.query.code === '521') {
        next()
    } else {
        res.send('暗号错误')
    }
}



app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('后台首页')
})

app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('设置页面')
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...')
})

