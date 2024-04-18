const express = require("express");
const router = express.Router();

const sqlite3 = require('sqlite3');  // 引入 sqlite3 模块
const path = require('path');  // 引入路径处理模块
const dbName = path.join("./flask-project/instance", 'projects.sqlite');  // 获取当前运行目录下的 data.db 文件
// 打开数据库
const db = new sqlite3.Database(dbName, err => {
if (err !== null) console.log(err);  // 输出错误信息
});

module.exports = router