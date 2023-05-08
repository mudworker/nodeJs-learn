const express = require('express');
// 导入moment
const moment = require('moment');

var router = express.Router();
const AccountModel = require('../../models/AccountModel');

// 声明中间件
let checkTokenMiddleWare = require('../../middlewares/checkTokenMiddleware')

// 记账本的列表
router.get('/account', checkTokenMiddleWare, function (req, res) {
    console.log(req.user)
    // 获取所有的账单信息
    AccountModel.find().sort({ time: -1 }).exec((err, data) => {
        if (err) {
            // res.status(500).send(`读取失败！！！${err}`)
            res.json({
                code: '1001', // 响应编号
                msg: '读取失败', // 响应信息
                data: null // 响应的数据
            })
            return
        }
        // 成功
        // res.render('list', { accounts: data, moment: moment })
        res.json({
            code: '0000', // 响应编号
            msg: '读取成功', // 响应信息
            data: data // 响应的数据
        })
    })

});

// 新增记录
router.post('/account', checkTokenMiddleWare, function (req, res) {
    // 查看表单数据
    // console.log(req.body)
    // 表单验证
    // ...
    // 插入数据
    AccountModel.create({
        ...req.body,
        // 修改 time 属性值 2023-02-24 => moment => Date
        time: moment(req.body.time).toDate()
    }, (err, data) => {
        if (err) {
            // res.status(500).send(`添加失败！！！${err}`)
            res.json({
                code: '1002',
                msg: '创建失败',
                data: null
            })
            return
        }
        // 成功提醒
        // res.render('success', { msg: '添加成功！！！', url: '/account' })
        res.json({
            code: '0000',
            msg: '创建成功',
            data: data
        })
    })

});

// 删除记录
router.delete('/account/:id', checkTokenMiddleWare, function (req, res) {
    // 获取id
    let id = req.params.id
    // 删除
    AccountModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            // res.status(500).send(`删除失败！！！${err}`)
            res.json({
                code: '1003',
                msg: '删除失败',
                data: null
            })
            return
        }
        // res.render('success', { msg: '删除成功！！！', url: '/account' })
        res.json({
            code: '0000',
            msg: '删除成功',
            data: {}
        })
    })
});

// 获取单个账单
router.get('account/:id', checkTokenMiddleWare, function (req, res) {
    // 获取id
    let id = req.params.id
    // 查询
    AccountModel.findById(id, (err, data) => {
        if (err) {
            res.json({
                code: '1004',
                msg: '读取失败',
                data: null
            })
            return
        }
        res.json({
            code: '0000',
            msg: '读取成功',
            data: data
        })
    })
})

// 更新单个账单
router.patch('account/:id', checkTokenMiddleWare, function (req, res) {
    // 获取id
    let id = req.params.id
    // 更新
    AccountModel.updateOne({ _id: id }, req.body, (err, data) => {
        if (err) {
            res.json({
                code: '1005',
                msg: '更新失败',
                data: null
            })
            return
        }
        // 再次查询数据库 获取单条数据
        AccountModel.findById(id, (err, data) => {
            if (err) {
                res.json({
                    code: '1004',
                    msg: '读取失败',
                    data: null
                })
                return
            }
            res.json({
                code: '0000',
                msg: '读取成功',
                data: data
            })
        })
    })
})


module.exports = router;
