//引入express组件，实现api路由编写
const express = require("express");
//调用express的Router功能
const router = express.Router();
//数据库引入sqlite.js中的导出的module
const db = require('./sqlite')

//查询数据库并将结果显示在界面上
router.get("/elements/elementsList" ,function(req, res){
    //page为定义时传入的变量，为当前分页的页码数
    let page = req.query.page || 1;
    //console.log(page) ;
    const sqllen = "SELECT * from element where id" ;
    //sqllen为查询数据库所有项目数的语句，结果为json格式，保存在rows1中，使用rows1.length获取长度，存在len中
    db.all(sqllen, [], (err, rows1) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An error occurred' });
          return;
        }
        const len = rows1.length;
        //由于页面有限，选择每页只显示8条数据，sql语句为根据页码数分别拿取8条数据,结果存储在rows中
        const sql = "SELECT * FROM element order by id asc limit 8 offset " + (page - 1) * 8;
        //console.log(sql);
    db.all(sql, [], (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An error occurred' });
          return;
        }
        //返回数据data为rows即当前页要显示的数据，length为len为数据库中总共包含几条数据
        res.send({
            data: rows,
            length: len,
        });
      });
      });

    
    
})

//页面中根据组件名称进行查询
router.get("/elements/search" ,function(req ,res ){
    //search为传入的form栏中输入的内容
    var search = req.query.search;
    //将搜索sql语句与search变量连接，进行模糊查询，得出所有包含search子字符串的结果
    const sql = "SELECT * FROM element where element_name like '%"  + search + "%'";
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }
      //得出结果后length相应更新
      res.send({
          data: rows,
          length:rows.length
      });
    });
})

//每一行数据后删除按钮功能
router.get("/elements/deleteElements" ,function(req , res){
    //id为按下删除按钮时传入的要删除的数据的id列数据
    var id = req.query.id;
    const arr = [id];
    //组合生成delete语句
    const sql = "delete from element where id = " + arr;
    console.log(sql);
    //delete后重新搜索数据库，显示更新后的数据
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.send({
          data: rows,
          length:rows.length,
          status:200
      });
    });
    
})

module.exports = router