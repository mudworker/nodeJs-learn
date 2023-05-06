const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
// 存入cookie
app.get('/set-cookie', (req, res) => {
    // res.cookie('name', 'lzs') // 会在浏览器关闭的时候销毁
    res.cookie('name', 'lzs', { maxAge: 60 * 1000 }) // maxAge 设置存在时间
    res.cookie('theme', 'blue')
    res.send('home')
})

// 删除cookie
app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name')
    res.send('删除成功')
})

// 读取cookie  cookie-parser
app.get('/get-cookie', (req, res) => {
    console.log(req.cookies)
    res.send(`获取成功 ${req.cookies.theme}`)
})

app.listen(3000)