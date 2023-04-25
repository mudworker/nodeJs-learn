/**
 * require导入npm包的流程
 * 1、在当前文件夹下的node_modules中寻找同名的文件夹
 * 2、在上级目录中下的node_modules找寻同名文件夹，直至找到磁盘根目录
 */

// 1.导入uniq
const uniq = require('uniq')
// const uniq = require('./node_modules/uniq')
// const uniq = require('./node_modules/uniq/uniq.js')

var arr = [1, 1, 2, 2, 3, 5]
uniq(arr)
console.log(arr)