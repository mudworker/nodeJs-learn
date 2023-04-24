// 1.引入fs
const fs = require('fs')

// 2.创建读取流对象
const rs = fs.createReadStream('./观书有感.txt')

// 3.绑定 data 事件
rs.on('data', chunk => {
    console.log(chunk.length) // 65536字节-->64kb每次(小于64kb会一次性读出)
})

// 4.end可选事件
rs.on('end',()=>{
    console.log('读取完成')
})