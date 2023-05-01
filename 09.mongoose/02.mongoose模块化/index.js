
// 导入 db 文件
const db = require('./db/db')
// 导入 mongoose
const mongoose = require('mongoose')
// 导入 BookModel 文件
const BookModel = require('./models/BookModel')

// 调用函数
db(() => {
    // 新增
    BookModel.create({ name: '西游记', author: '吴承恩', price: 19.9 }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })
}, () => {
    console.log('连接失败')
})

    
