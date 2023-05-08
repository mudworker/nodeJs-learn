// 导入 jwt
const jwt = require('jsonwebtoken')

// 生成 token
// let token = jwt.sign(用户数据, 加密字符串, 配置对象)
let token = jwt.sign({
    username: 'lizhansheng'
}, 'lzs', {
    expiresIn: 60 // 单位是秒
})
console.log(token)

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxpemhhbnNoZW5nIiwiaWF0IjoxNjgzNTI2MzYzLCJleHAiOjE2ODM1MjY0MjN9.DV6QoP2s9XZxLjHEQiF2Kx3aheBswhGhIZOB6AkajnE'
// 校验 token
jwt.verify(t, 'lzs', (err, data) => {
    if (err) {
        console.log('校验失败')
        return
    }
    console.log(data)
})