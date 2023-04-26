## 一、创建与发布自己的npm包  

1、创建文件夹，并创建index.js，在文件中声明函数，使用module.exports暴露  
2、npm初始化工具包（npm init），package.json填写包的信息（注意包的名字是唯一，不要包含test等）  
3、注册账号 https://www.npmjs.com/signup  
4、激活账号 (填写邮箱验证码)  
5、修改为官方的官方镜像（不要用淘宝镜像）  
6、命令行下 npm login 填写相关用户信息  
7、命令行下 npm publish 提交包  

## 二、更新包  

1、 更新包中的代码  
2、测试代码是否可用  
3、修改 package.json 中的版本号  
4、发布更新 npm publish  

## 三、删除包  
1、执行npm unpublish --force  
2、删除要求：  
你是包的作者  
或 发布小于24小时  
或 大于24小时后，没有其他包依赖，并且每周小于300下载量，并且只有一个维护者  
