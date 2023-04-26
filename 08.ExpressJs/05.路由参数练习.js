// 1、导入express
const express = require('express')
const { singers } = require('./singers.json')

// 2.创建应用对象
const app = express()

// 3.创建路由
app.get('/singer/:id.html', (req, res) => {
    // 获取 url 路由参数
    let { id } = req.params
    // 在数组中寻找对应id的数据
    let result = singers.find(item => {
        if (item.id === Number(id)) {
            return true
        }
    })

    // 判断
    if (!result) {
        res.statusCode = 404
        res.end(`404 Not Found`)
    }
    res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h2>${result.singer_name}</h2>
            <div>${result.id}</div>
        </body>
    </html>`)
})

// 4.监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...')
})
