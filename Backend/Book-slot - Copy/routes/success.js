const express = require('express')

const router = express.Router()

const success = require('../controller/success')


router.post("/success", success )


module.exports = router