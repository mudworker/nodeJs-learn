/**
 * 按照要求搭建 HTTP 服务
 * GET  /login 显示表单网页
 * POST /login 获取表单中的 【用户名】 和 【密码】
 * 
 * 使用 body-parser 插件
 */

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 解析 json 格式请求体的中间件
const jsonParser = bodyParser.json()
// 解析 querystring 格式请求体的中间件
const urlencodeParser = bodyParser.urlencoded({ extended: false })

// 创建路由
app.get('/login', (req, res) => {
    // res.send('表单页面')
    // 响应文件内容
    res.sendFile(__dirname + '/02.form.html')
})

app.post('/login', urlencodeParser, (req, res) => {
    // 获取请求体的数据
    console.log(req.body)
    res.send('获取用户数据')
})

app.listen(3000, () => {
    console.log('服务已启动，监听3000端口...')
})