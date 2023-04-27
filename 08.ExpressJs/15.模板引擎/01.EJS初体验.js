/**
 * EJS
 * 模板引擎是分离 用户界面(html) 和 业务数据(服务端js) 的一种技术
 */

// 1.安装 EJS
// 2.导入 EJS
const ejs = require('ejs')
const fs = require('fs')

// 字符串
let name = '李zs'
let weather = '今天天气不错'
// let str = `我是 ${name}`

// 声明变量
let str = fs.readFileSync('./01.html.html').toString()
// 使用 ejs 渲染
let result = ejs.render(str, { name: name, weather: weather })

console.log(result)

