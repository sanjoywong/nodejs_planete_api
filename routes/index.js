const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
 res.send('hello, express, welcome to index under folder routes')
})

module.exports = router