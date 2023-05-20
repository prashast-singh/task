const express = require('express')

const navbar = require('../controller/navbar')

const router = express.Router()


router.get("/", navbar)

//path.join(__dirname, '../', 'views', 'navbar.html')

module.exports = router