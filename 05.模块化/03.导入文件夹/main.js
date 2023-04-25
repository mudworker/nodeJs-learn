/**
 * 导入一个文件夹
 * 1、首先会检测该文件夹下package.json文件中的main属性对应的文件
 * 2、如果main属性存在，但对应的文件不存在，报错
 * 2、如果不存在package.json不存在或者main属性不存在，则会尝试导入文件夹下的index.js或者index.json
 * 3、都不存在，报错
 */

const m = require('./module')