// 导入 jwt
const jwt = require('jsonwebtoken')
const config = require('../config/config')
module.exports = (req, res, next) => {
    // 获取 token，一般是放在请求头中
    const token = req.get('token')
    if (!token) {
        res.json({
            code: '2003', // 响应编号
            msg: 'token 缺失', // 响应信息
            data: null // 响应的数据
        })
    }
    // 校验 token
    jwt.verify(token, config.secret, (err, data) => {
        if (err) {
            return res.json({
                code: '2004', // 响应编号
                msg: 'token 校验失败', // 响应信息
                data: null // 响应的数据
            })
        }
        // 保存用户信息
        req.user = data
        next()
    })
}