// 1.引入fs
const fs = require('fs')

// 2.异步读取
fs.readFile('./观书有感.txt', (err, data) => {
    if (err) {
        console.log('读取失败')
        return
    }
    console.log('异步', data.toString())
})

// 同步读取
const data = fs.readFileSync('./观书有感.txt')
console.log('同步', data.toString())