const fs = require('fs')

// 方法一：使用 unlink 方法 unlinkSync
// fs.unlink('./资料/论语222.txt', err => {
//     if (err) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })


// 方法二：使用 rm 方法 v14.4  rmSync
fs.rm('./资料/论语222.txt', err => {
    if (err) {
        console.log('删除失败')
        return
    }
    console.log('删除成功')
})