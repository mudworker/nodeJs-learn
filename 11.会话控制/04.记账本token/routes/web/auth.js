var express = require('express');
var router = express.Router();
// 导入用户模型
const UserModel = require('../../models/UserModel')

const md5 = require('md5')

// 注册页面
router.get('/reg', (req, res) => {
    // 响应 html
    res.render('auth/reg')
})

// 注册用户
router.post('/reg', (req, res) => {
    // 表单验证
    // 。。。
    // 获取数据
    // console.log(req.body)
    UserModel.create({ ...req.body, password: md5(req.body.password) }, (err, data) => {
        if (err) {
            res.status(500).send('注册失败，请稍后再试')
            return
        }

        res.render('success', { msg: '注册成功', url: '/login' })
    })
})

// 登陆页面
router.get('/login', (req, res) => {
    // 响应 html
    res.render('auth/login')
})

// 登陆操作
router.post('/login', (req, res) => {
    // 获取用户名和密码
    const { username, password } = req.body
    // 查询数据库
    UserModel.findOne({ username, password: md5(password) }, (err, data) => {
        // 判断
        if (err) {
            res.status(500).send('登录失败，请稍后再试')
            return
        }
        // 判断 data
        if (!data) {
            return res.send('账号或密码错误！！！')
        }
        // 写入session
        req.session.username = data.username;
        req.session._id = data._id;

        // 登陆成功响应
        res.render('success', { msg: '登录成功', url: '/account' })

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
