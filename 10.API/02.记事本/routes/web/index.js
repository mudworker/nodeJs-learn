var express = require('express');
var router = express.Router();

// 导入moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');

// 记账本的列表
router.get('/account', function (req, res, next) {
  // 获取所有的账单信息
  AccountModel.find().sort({ time: -1 }).exec((err, data) => {
    if (err) {
      res.status(500).send(`读取失败！！！${err}`)
      return
    }
    // 成功
    res.render('list', { accounts: data, moment: moment })
  })

});

// 添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create')
});


// 新增记录
router.post('/account', function (req, res, next) {
  // 查看表单数据
  // console.log(req.body)
  // 插入数据
  AccountModel.create({
    ...req.body,
    // 修改 time 属性值 2023-02-24 => moment => Date
    time: moment(req.body.time).toDate()
  }, (err, data) => {
    if (err) {
      res.status(500).send(`添加失败！！！${err}`)
      return
    }
    // 成功提醒
    res.render('success', { msg: '添加成功！！！', url: '/account' })
  })

});

// 删除记录
router.get('/account/:id', function (req, res, next) {
  // 获取id
  let id = req.params.id
  // 删除
  AccountModel.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send(`删除失败！！！${err}`)
      return
    }
    res.render('success', { msg: '删除成功！！！', url: '/account' })
  })
});


module.exports = router;
