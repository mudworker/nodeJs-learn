const express = require('express')

const app = express()

// 静态资源中间件设置
// 1.默认指向目标文件夹下的 index.html
// 2.如果静态资源和路由的路径都能匹配，按照先后顺序响应
// 3.路由一般响应动态资源，静态资源中间件响应静态资源
app.use(express.static(__dirname + '/public'))

// 路由
app.get('/home', (req, res) => {
    res.send('前台首页')
})

app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...')
})

