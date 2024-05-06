const express = require("express");
const router = express.Router();

const db = require('./sqlite')

router.get("/api/elements/elementsList",(req , res)=>{
    const sql = 'SELECT * FROM element';
    db.all(sql, [], (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An error occurred' });
          return;
        }
    
        // 处理查询结果
        res.json(rows);
      });
})

module.exports = router