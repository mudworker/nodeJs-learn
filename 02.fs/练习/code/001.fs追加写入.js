// 1.引入fs
const fs = require('fs')

// 2.调用 appendFile
// fs.appendFile('./座右铭.txt', ' 则其善者而从之，其不善者而改之。', err => {
//     if (err) {
//         console.log('写入失败')
//         return
//     }
//     console.log('写入成功')
// })

// 同步追加
// fs.appendFileSync('./座右铭.txt', '\r\n温故而知新， 可以为师矣')


// 通过writeFile方式写入（参数flag: 'a'）
fs.writeFile('./座右铭.txt', '77777', { flag: 'a' }, err => {
    // err的值 写入失败：错误对象；写入成功：null
    if (err) {
        console.log('写入失败')
        return
    }
    console.log('写入成功')
})