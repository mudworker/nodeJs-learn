const express = require('express')
// 1.安装包 npm i express-session connect-mongo
// 2.引入 express-session connect-mongo
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()

// 3.设置 session 中间件
app.use(session({
    name: 'sid', // 设置 cookie 的 name 值，默认是 connect.sid
    secret: 'lzs', // 参与加密的字符串（加盐）
    saveUninitialized: false, // 是否为每次请求都设置一个 cookie 用来存储 session 的 id
    resave: true, // 是否在每次请求时重新保存 session （更新session过期时间）
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili' // 数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启前端无法通过JS操作
        maxAge: 1000 * 60 * 5// 控制 sessionID 过期时间！！！
    }
}))

app.get('/', (req, res) => {
    res.send('home')
})

// session 设置
app.get('/login', (req, res) => {
    // username=addmin&password=admin
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        // 设置 session 信息
        req.session.username = 'admin'
        req.session.password = '258aefccc'
        // 成功响应
        res.send('登陆成功')
    } else {
        res.send('登陆失败')
    }
})

// session 读取
app.get('/cart',(req, res) => {
    // 检测 session 是否存在用户数据
    if(req.session.username){
        res.send(`欢迎您 ${req.session.username}`)
    }else{
        res.send('您还没有登陆')
    }
})

// session 销毁（退出登陆）
app.get('/logout',(req, res) => {
    req.session.destroy(()=>{
        res.send('退出成功')
    })
})


app.listen(3000)