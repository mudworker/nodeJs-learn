/**
 * 批量在code目录下的文件名前面加上'0'
 */

const fs = require('fs')

// 读取code文件夹下的文件名
const fileList = fs.readdirSync('./code')

// 遍历数组
fileList.forEach(item => {
    // 拆分文件名
    let data = item.split('.')
    let [num, name, type] = data
    // 判断
    if (Number(num) < 10) {
        num = '0' + num
    }
    // 创建新文件名
    let newName = num + '.' + name + '.' + type
    // 重命名
    fs.renameSync(`./code/${item}`, `./code/${newName}`)
})