
const express = require('express')
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')

const app = express()

app.use(homeRouter).use(adminRouter)


app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...')
})

