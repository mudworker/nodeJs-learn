// 1、导入express
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由
app.get('/other', (req, res) => {
    // 跳转响应
    // res.redirect('http://baidu.com')
    // 下载响应
    // res.download(__dirname + '/package.json')
    // JSON响应
    res.json({ name: 'lzs', location: '苏州' })
    // 响应文件内容
    // res.sendFile(__dirname+'/02.form.html')
})

// 4.监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...')
})
