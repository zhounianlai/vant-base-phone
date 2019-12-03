# vant 移动端环境搭建

## 项目相关命令
* 项目依赖安装命令：npm install

* 项目本地环境启动命令：npm run serve

* 项目打包命令：npm run build

* 项目eslint代码检查命令：npm run lint

## 项目简介

### 项目名称：移动端

### 项目目录结构：
```
.
|-- README.md
|-- babel.config.js
|-- node_modules
|-- package-lock.json
|-- package.json
|-- public
|-- src
`-- vue.config.js
```
* babel.config.js（babel 配置文件）
* node_modules（依赖模块）
* package-lock.json（依赖包锁定配置文件）
* package.json（依赖配置文件）
* public（单页面应用html存放位置）
* src（项目代码）
* vue.config.js（[Vue.js](cn.vuejs.org/v2/guide/) 配置文件, 使用了 [vue-cli 3.0](https://cli.vuejs.org/zh/config/) 脚手架工具搭建基本框架，项目配置也是按照 [vue-cli 3.0](https://cli.vuejs.org/zh/config/) 文档配置，如需另外配置可参考 [vue-cli 3.0](https://cli.vuejs.org/zh/config/)）

### 项目源码目录结构：

```
.
|-- App.vue
|-- api
|-- assets
|-- components
|-- config
|-- libs
|-- main.js
|-- mixin
|-- router
|-- storage
|-- store
|-- uiComponents
`-- views
```

#### App.vue（[Vue.js](cn.vuejs.org/v2/guide/) 根组件文件）

#### api/（项目请求接口同意注册表）

```
api/
|-- data.js
`-- user.js
```

#### assets/（公共资源）

```
assets/
|-- css
|   |-- common.less (公共style代码)
|   `-- theme.less (公共主题style代码)
`-- images (项目中所有的资源图片)
    |-- 名字
```

#### components/（自定义组件）

```
components/
|-- xxx.vue
```

#### config/（项目配置）

```
config/
|-- baseUrl.js (请求基础路径按照开发环境使用不同路径)
|-- index.js (请求路径，视频请求地址和cookie失效时间等配置)
```

#### libs/（项目自定义模块，项目中使用了 [axios](http://www.axios-js.com/) 库进行网络请求）

```
libs/
|-- axios.js (axios请求模块封装)
|-- http.js (请求函数封装)
|-- md5.js (md5加密模块)
|-- tools.js (工具函数模块)
`-- utils.js (高频使用公共模块)
```

#### main.js（[Vue.js](cn.vuejs.org/v2/guide/) 入口文件，基于 [vue-cli 3.0](https://cli.vuejs.org/zh/config/)）

#### mixin/（项目公用混入）

```
mixin/
|-- xxx.js
```

#### router/（[Vue.js](cn.vuejs.org/v2/guide/) 路由，基于官方插件 [vue-router](https://router.vuejs.org/zh/) 编写）

```
router/
|-- index.js
`-- routes.js
```

#### storage/（[cookie](https://www.npmjs.com/package/js-cookie), localStorage, sessionStorage 重新封装建立统一注册表防止使用混乱无法管理）

```
storage/
|-- cookie.js
|-- localStorage.js
`-- sessionStorage.js
```

#### store/（[Vue.js](cn.vuejs.org/v2/guide/) 应用程序开发的状态管理模式 [Vuex](https://vuex.vuejs.org/zh/)）

```
store/
|-- index.js
`-- modules
    |-- app.js
    `-- user.js
```

#### uiComponents/（第三方前端UI组件库按需引入使用，目前使用了前端UI库 [Vant](https://youzan.github.io/vant/#/zh-CN/intro)）

```
uiComponents/
`-- vant
    `-- index.js
```

#### views/（项目页面文件存放）

```
views/
|-- 文件夹名字
```

