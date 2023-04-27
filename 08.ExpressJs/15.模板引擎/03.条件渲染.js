/**
 * 通过isLogin的变量 决定最终的输出内容
 * true  输出 【<span>欢迎回来</span>】
 * false 输出 【<button>登陆</button> <button>注册</button>】
 */

// 变量
let isLogin = false

// 原生 JS
// if (isLogin) {
//     return console.log('<span>欢迎回来</span>')
// } else {
//     return console.log('<button>登陆</button> <button>注册</button>')
// }


// EJS 实现
const ejs = require('ejs')
const fs = require('fs')
let html = fs.readFileSync('./03.html.html').toString()
let result = ejs.render(html, { isLogin: isLogin })
console.log(result)