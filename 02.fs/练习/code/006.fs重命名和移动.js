const fs = require('fs')

//本质就是修改文件路径

// 重命名 remaneSync
// fs.rename('./座右铭.txt', './论语.txt', err => {
//     if (err) {
//         console.log('操作失败')
//         return
//     }
//     console.log('操作成功')
// })

// 移动
// 资料文件加需要存在，否则会报错
fs.rename('./论语.txt', './资料/论语222.txt', err => {
    if (err) {
        console.log('操作失败')
        return
    }
    console.log('操作成功')
})