// 导入 db 文件
const db = require('./db/db')
// 导入 mongoose
const mongoose = require('mongoose')
// 导入 BookModel 文件
const MovieModel = require('./models/MovieModel')

db(() => {
    MovieModel.create({ title: '让子弹飞', director: '姜文' }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })
}, () => {
    console.log('连接失败')
})