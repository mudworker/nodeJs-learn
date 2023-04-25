// 导入模块
const me = require('./me.js') // 推荐使用相对路径，不可省略'./'，可以省略js和json的后缀名
// const me = require('./me') // 省略后缀可以，当文件名相同，优先当作js文件

console.log(me)
me.tiemo()
me.niejiao()