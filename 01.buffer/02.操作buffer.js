// buffer 与字符串的转换
let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// console.log(buf4.toString()) // 默认utf-8

// buffer 元素的读写  []
let buf = Buffer.from('hello')
// console.log(buf[0])
// console.log(buf[0].toString(2)) // toString(2) 转为2进制

// console.log('old', buf)
// buf[0] = 95
// console.log('new', buf)
// console.log(buf.toString())

// 溢出
let buf2 = Buffer.from('hello')
buf2[0] = 361 // 一个字节最高支持8为bit，也就是255，超出会被舍弃高位的数字 0001 0110 1000 舍弃0001
// console.log(buf2, buf2[0])


// 中文
let buf3 = Buffer.from('你好') // utf-8的中文字符，一个中文字符占3个字节
console.log(buf3) // 输出6个字节