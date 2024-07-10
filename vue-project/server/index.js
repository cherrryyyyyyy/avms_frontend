const express = require('express');
 

const app = express();
const router = require('./router')
app.use('/',router)
app.get('/', (req, res) => {
  res.end('hello express server');
});
 
//监听端口 启动服务
app.listen(3000, () =>{
  console.log('服务已经启动, 端口监听为 3000...');
});