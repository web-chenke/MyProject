#vue-webpack脚手架

### 1. 安装vue+webpack模板
```
$ vue init webpack test   注：test是项目名称
```
### 2. 安装vuex状态管理插件
   ```
   $ npm install vuex --save
   ```
### 3. 安装vue-router路由插件
  ```
  $ npm install vue-router --save
  ```
### 4. 安装element-ui框架
   ```
   $ npm install element-ui --save
   ```
### 5. 安装less插件
   ```
   $ npm install less-loader less --save-dev
   ```
### 6. 安装axios插件 
用axios可以代替ajax，功能强大 https://www.npmjs.com/package/axios

   ```
   $ npm install axios --save
   ```


##运行项目
```
1.npm install 安装
2.npm run dev 运行
3.npm run build 打包

```

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- header.vue           // 公共头部
	|		|-- page                   	 // 主要路由页面
	|           |-- Login          	 // 登录
	|           |-- forgetPasswordForm          	 // 忘记密码
	|           |-- homePage          	 // 首页
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明

