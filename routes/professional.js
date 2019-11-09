const express = require('express')
const router = express.Router()

router.get('/busca',(req,res)=>{
    res.render('professional/busca')
})

module.exports = router