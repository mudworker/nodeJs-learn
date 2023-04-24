// 1.alloc (分配)
let buf1 = Buffer.alloc(10)
// console.log('buf1', buf1)

// 2.allocUnsafe
// 不安全：使用unsafe创建的内存空间不会被清零，也就是可能存在旧数据
// 速度比alloc快，因为不需要清零
let buf2 = Buffer.allocUnsafe(10000)
// console.log('buf2', buf2)

// 3.from
let buf3 = Buffer.from('hello')
let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log('buf3', buf3)
console.log('buf4', buf4)