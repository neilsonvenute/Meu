const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('admin/login')
})

router.get('/adduser', (req, res) => {
    res.render('admin/adduser')
})

module.exports = router