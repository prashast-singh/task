const express = require('express')
const router = express.Router()

const contactus = require('../controller/contactus')


router.get("/contactus", contactus)


module.exports = router