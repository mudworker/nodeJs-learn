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
        name: {
            type: String,
            required: true,
            unique: true // 设置为独一无二（索引），设置后必须重启集合才有效果
        },
        author: {
            type: String,
            default: '匿名'
        },
        // 类型
        style: {
            type: String,
            enum: ['言情', '都市', '神话', '修仙']
        },
        price: Number
    })

    // 6.创建模型对象 对文档操作的封装
    let BookModel = mongoose.model('novels', BookSchema)

    // 7.读取单条
    BookModel.findOne({ name: '西游记' }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })
    // 2.根据 id 获取
    BookModel.findById("644e27605efbc782d7b63a82").then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })
    // 2.批量获取
    BookModel.find({ name: '西游记' }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
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