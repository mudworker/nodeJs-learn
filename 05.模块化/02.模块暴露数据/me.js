function tiemo() {
    console.log('贴膜')
}

function niejiao() {
    console.log('捏脚')
}


// CJS的导出
//方法一：module.exports暴露数据
module.exports = { tiemo, niejiao }


// 方法二：exports 暴露数据
// exports.tiemo = tiemo
// exports.niejiao = niejiao


// 1.module.exports 可以暴露任何数据
// module.exports = 'eqweqw'
// module.exports = 123

// 2.exports不能使用‘exports = value’的方式暴露数据
// exports = '123' // 不行

// 原因：exports = module.exports = {}

// console.log(module.exports) // {}
// console.log(module.exports === exports) // true