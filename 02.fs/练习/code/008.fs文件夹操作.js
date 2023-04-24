// 1.引入fs
const fs = require('fs')


// 2.创建文件夹  mk make dir directory  mkdirSync
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })

// 2-2.递归创建 recursive:true
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })

// 3.读取文件夹 readdirSync
// fs.readdir('./', (err, data) => {
//     if (err) {
//         console.log('读取失败')
//         return
//     }
//     console.log(data)
// })

// 4.删除文件夹
// fs.rmdir('./html',err=>{
//     if (err) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })

// 4-1.递归删除(不推荐使用)
// fs.rmdir('./a', { recursive: true }, err => {
//     if (err) {
//         console.log('删除失败', err)
//         return
//     }
//     console.log('删除成功')
// })

// 4-2.建议使用
fs.rm('./a', { recursive: true }, err => {
    if (err) {
        console.log('删除失败', err)
        return
    }
    console.log('删除成功')
})