# avms_frontend

#### 介绍
avms前端页面项目

#### 软件架构
vue负责实现前端界面
server文件夹中使用node.js与flask，基于SQlite3数据库实现后端接口。（待定）


#### 安装教程

npm install 安装
npm run serve 开启服务

#### 已完成
1.  搭建主页框架
2.  完成vue项目build实验
3.  完成整体页面结构编写和api设置


# vue-project

## 项目构建

在vue-project文件夹下执行：
```
npm install
```

### 编译并以热加载模式运行
在vue-project文件夹下执行：
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

### API地址设置
```
vue-project文件夹下 vue-config.js文件，修改target地址为avms虚拟机flask服务器地址
```
