const fs = require('fs')
const path = require('path')

// 写入文件，正反斜线不规范
// fs.writeFileSync(__dirname + '/index.html', 'love')
// console.log(__dirname + '/index.html')

// resolve，规范的路径拼接
// console.log(path.resolve(__dirname, './index.html'))
// console.log(path.resolve(__dirname, 'index.html'))

// sep分隔符
// console.log(path.sep) // windows下为\  linux下为/

// parse 方法
// console.log(__filename) // 文件的绝对路径
let str = 'D:\\3.Project\\5.NodeJs\\03.path\\00.path.js'
// console.log(path.parse(str))

// basename
console.log(path.basename(str))

// dirname
console.log(path.dirname(str))

// extname
console.log(path.extname(str))