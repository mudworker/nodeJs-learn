const fs = require('fs')

/**
 * 相对路径的参照物：node命令执行的工作目录，并不是当前js文件的目录，所以正式项目不推荐使用
 * 绝对路径：__dirname，所在js文件的目录的绝对路径
 */

// 相对路径
// fs.writeFileSync('./index.html', 'love') // 当前路径
// fs.writeFileSync('index.html', 'love') // 当前路径
// fs.writeFileSync('../index.html', 'love') // 上层路径

// 绝对路径
// fs.writeFileSync('D:/index.html', 'love') // 可以创建
// fs.writeFileSync('C:/index.html', 'love') // 权限不够
// fs.writeFileSync('/index.html', 'love') // 当前磁盘根目录创建

// 推荐使用__dirname的绝对路径
console.log(__dirname)
fs.writeFileSync(__dirname + '/index.html', 'love2')