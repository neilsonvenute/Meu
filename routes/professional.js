const express = require('express')
const router = express.Router()

router.get('/busca',(req,res)=>{
    res.render('professional/busca')
})

router.get('/meusdados',(req,res)=>{
    res.render('professional/meusdados')
})

router.get('/minhaconta',(req,res)=>{
    res.render('professional/minhaconta')
})

module.exports = router