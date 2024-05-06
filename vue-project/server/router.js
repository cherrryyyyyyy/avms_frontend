const express = require("express");
const router = express.Router();

const sqlite = require('./sqlite')

router.get("/elements/elementsList",(req , res)=>{
    const page = req.query.page || 1;
    const sqlLen = "select * from element";

})

module.exports = router