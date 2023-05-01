// 1.安装 mongoose
// 2.导入
const mongoose = require('mongoose')

// 3.链接 mongoose 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 4.设置回调 on 和 once 建议使用 once
mongoose.connection.once('open', () => {
    // 5.创建文档的结构对象
    // 设置集合中文档的属性以及属性的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    // 6.创建模型对象 对文档操作的封装
    let BookModel = mongoose.model('books', BookSchema)

    // 7.新增
    BookModel.create({ name: '西游记', author: '吴承恩', price: 19.9 }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
        // 8.关闭数据库连接（实际运行中不会断开，保持长连接）
        mongoose.disconnect()
    })
})

mongoose.connection.on('error', () => {
    console.log('连接失败')
})

mongoose.connection.on('close', () => {
    console.log('连接关闭')
})

// 关闭连接
// setTimeout(() => {
//     mongoose.disconnect()
// }, 2000)