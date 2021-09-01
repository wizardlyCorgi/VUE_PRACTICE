# rms_demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<!-- 搭建项目的流程 -->
## 一,安装一些必要插件
// 是插件就要Vue.use()
<!-- 2021年9月1日17:16:04 -->
1. less/ less-loader@7 less-loader版本太高(默认装的是最新的)会报错需要限制版本到7.0
2. axios
3. vue-router
4. vuex
5. element ui
## 二,新建一些文件夹
<!-- 2021年9月1日17:16:16 -->
1. router
2. store
3. utils(工具文件夹,一些工具函数放在这里)
4. plugins(插件管理文件夹)
5. views(有用路由的页面)
# 坑点
<!-- 2021年9月1日17:16:20 -->
1. element-ui局部引入需要配置babel,配置完要重启脚手架,不然样式无效