const express = require("express");
const router = express.Router();

const db = require('./sqlite')

router.get("/elements/elementsList" ,function(req, res){
    
    let page = req.query.page || 1;
    console.log(page) ;
    const sqllen = "SELECT * from element where id" ;
    db.all(sqllen, [], (err, rows1) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An error occurred' });
          return;
        }
        const len = rows1.length;

        const sql = "SELECT * FROM element order by id asc limit 8 offset " + (page - 1) * 8;
        console.log(sql);
    db.all(sql, [], (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An error occurred' });
          return;
        }

        res.send({
            data: rows,
            length: len,
        });
      });
      });

    
    
})

router.get("/elements/search" ,function(req ,res ){
    var search = req.query.search;
    const sql = "SELECT * FROM element where element_name like '%"  + search + "%'";
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.send({
          data: rows,
          length:rows.length
      });
    });
})

module.exports = router