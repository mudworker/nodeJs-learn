var express = require('express');
// 导入用户模型
const UserModel = require('../../models/UserModel')

const md5 = require('md5')
// 导入 jwt
const jwt = require('jsonwebtoken');
const config = require('../../config/config');


var router = express.Router();

// 登陆操作
router.post('/login', (req, res) => {
    // 获取用户名和密码
    const { username, password } = req.body
    // 查询数据库
    UserModel.findOne({ username, password: md5(password) }, (err, data) => {
        // 判断
        if (err) {
            return res.json({
                code: '2001',
                msg: '数据库读取失败',
                data: null
            })
        }
        // 判断 data
        if (!data) {
            return res.json({
                code: '2002',
                msg: '用户名或密码错误',
                data: null
            })
        }

        // 创建 token
        let token = jwt.sign({
            username: data.username,
            _id: data._id
        }, config.secret, {
            expiresIn: 60 * 60 * 24 * 7
        })

        // 响应 token
        res.json({
            code: '000',
            msg: '登陆成功',
            data: token
        })

    })
})

// 退出登陆
router.post('/logout', (req, res) => {
    // 销毁 session
    req.session.destroy(() => {
        res.render('success', { msg: '退出成功', url: '/login' })
    })
})


module.exports = router;
