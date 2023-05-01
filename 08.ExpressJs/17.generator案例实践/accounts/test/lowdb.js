const low = require('lowdb')
const FileSync = require('lowdb/adapters/Filesync')
const adapter = new FileSync(__dirname + '/db.json')
// 获取db对象
const db = low(adapter)

// 初始化数据
// db.defaults({ posts: [], user: {} }).write()

// 写入数据
// db.get('posts').push({ id: 1, title: 'test' }).write()
// db.get('posts').unshift({ id: 2, title: '777' }).write()

// 获取数据
// console.log(db.get('posts').value())

// 删除数据
// const res = db.get('posts').remove({ id: 1 }).write()
// console.log(res)

// 更新数据
// const oVal = db.get('posts').find({ id: 2 }).value()
// console.log(oVal)
// db.get('posts').find({ id: 2 }).assign({ title: 'jintian' }).write()
// const nVal = db.get('posts').find({ id: 2 }).value()
// console.log(nVal)

