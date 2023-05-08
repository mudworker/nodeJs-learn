var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/web/index');
const authRouter = require('./routes/web/auth');
// 导入 account 接口路由
const accountRouter = require('./routes/api/account')
const authApiRouter = require('./routes/api/auth')

const { DBHOST, DBPORT, DBNAME } = require('./config/config')
// session
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()

// 设置 session 中间件
app.use(session({
    name: 'sid', // 设置 cookie 的 name 值，默认是 connect.sid
    secret: 'lzs', // 参与加密的字符串（加盐）
    saveUninitialized: false, // 是否为每次请求都设置一个 cookie 用来存储 session 的 id
    resave: true, // 是否在每次请求时重新保存 session （更新session过期时间）
    store: MongoStore.create({
        mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}` // 数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启前端无法通过JS操作
        maxAge: 1000 * 60 * 60 * 24 * 7// 控制 sessionID 过期时间！！！
    }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/api', accountRouter);
app.use('/api', authApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
  // 响应 404
  res.render('404')
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
