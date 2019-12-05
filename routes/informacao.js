const express = require('express')
const router = express.Router()

router.get('/quemsomos',(req,res)=>{
    res.render('info/quemsomos')
})

module.exports = router