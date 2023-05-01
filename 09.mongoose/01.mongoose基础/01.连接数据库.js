// 1.安装 mongoose
// 2.导入
const mongoose = require('mongoose')

// 3.链接 mongoose 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 4.设置回调 on 和 once 建议使用 once
mongoose.connection.once('open', () => {
    console.log('连接成功')
})

mongoose.connection.on('error', () => {
    console.log('连接失败')
})

mongoose.connection.on('close', () => {
    console.log('连接关闭')
})

// 关闭连接
setTimeout(() => {
    mongoose.disconnect()
}, 2000)