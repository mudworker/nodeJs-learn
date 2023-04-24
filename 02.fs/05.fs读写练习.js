const fs = require('fs')

const process = require('process')

// 方法一：readFile
// // 读取文件内容
// let data = fs.readFileSync('./观书有感.txt')
// // 写入新文件
// fs.writeFileSync('./观书有感-2.txt', data)
// console.log(process.memoryUsage())

// 方法二：流式操作（文件大的话，占资源更少）
// 创建读取流对象
const rs = fs.createReadStream('./观书有感.txt')
// 创建写入流对象
const ws = fs.createWriteStream('./观书有感-3.txt')
rs.on('data', chunk => {
    ws.write(chunk)
})

rs.on('end', () => {
    console.log(process.memoryUsage())
})

// 快捷方式
// rs.pipe(ws)



