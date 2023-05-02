// 导入 mongoose
const mongoose = require('mongoose')

// 创建文档的结构对象
// 设置集合中文档的属性以及属性的类型
let MovieSchema = new mongoose.Schema({
    title: String,
    director: String
})

// 创建模型对象 对文档操作的封装
let MovieModel = mongoose.model('movies', MovieSchema)

// 暴露模型对象
module.exports = MovieModel
