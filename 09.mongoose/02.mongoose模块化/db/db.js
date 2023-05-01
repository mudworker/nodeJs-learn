/**
 * 
 * @param {*} success 数据库连接成功的回调
 * @param {*} error 数据库连接失败的回调
 */


module.exports = function (success, error) {
    // 判断 error 为其设置默认值
    if (typeof error != 'function') {
        error = () => {
            console.log('连接失败！！！')
        }
    }
    // 1.安装 mongoose
    // 2.导入
    const mongoose = require('mongoose')
    // 导入 配置文件
    const { DBHOST, DBPORT, DBNAME } = require('../config/config')

    // 3.链接 mongoose 服务
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    // 4.设置回调 on 和 once 建议使用 once
    mongoose.connection.once('open', () => {
        success()
    })

    mongoose.connection.on('error', () => {
        // console.log('连接失败')
        error()
    })

    mongoose.connection.on('close', () => {
        console.log('连接关闭')
    })
}