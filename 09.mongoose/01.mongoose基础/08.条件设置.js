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

    /**
     * 1.运算符
     * > 使用 $gt
     * < 使用 $lt
     * >= 使用 $gte
     * <= 使用 $lte
     * !== 使用 $ne
     * 
     * 2.逻辑运算
     * $or 逻辑或
     * $and 逻辑and
     * 
     * 3.正则匹配
     */

    // 7-1.运算符 价格小于20
    BookModel.find({ price: { $lt: 20 } }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })
    // 7-2.逻辑运算 作者是 吴承恩 或 曹雪芹
    BookModel.find({ $or: [{ author: '吴承恩' }, { author: '曹雪芹' }] }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })

    // 7-2.逻辑运算 价格大于10 且 小于30
    BookModel.find({ $and: [{ price: { $gt: 10 } }, { price: { $lt: 30 } }] }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })

    // 7-3.正则匹配 模糊查询 书名包含‘记’的：/记/ 或者 new RegExp('记')
    BookModel.find({ name: new RegExp('记') }).then((err, data) => {
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