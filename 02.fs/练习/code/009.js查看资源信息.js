const fs = require('fs')

// stat status的缩写
fs.stat('./观书有感.txt', (err, data) => {
    if (err) {
        console.log('操作失败')
        return
    }
    console.log(data)

    console.log('file', data.isFile())

    console.log('directory', data.isDirectory())
})