/**
 * 禁止当前网站以外的其他网页访问某些资源
 * 
 * 测试例子：127.0.0.1可以访问，localhost不可以访问
 */
const express = require('express')

const app = express()

app.use((req, res, next) => {
    // 检查请求头中的referer 是否为 127.0.0.1
    // 获取referer
    let referer = req.get('referer')
    // console.log(referer)
    if (referer) {
        // 实例化
        let url = new URL(referer)
        // 获取 hostname
        let hostname = url.hostname
        // console.log(hostname)
        if (hostname !== '127.0.0.1') {
            // 响应404
            res.status(404).send('404 Not Found')
            return
        }
    }
    next()
})

app.use(express.static(__dirname + '/public'))


app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听中...')
})
