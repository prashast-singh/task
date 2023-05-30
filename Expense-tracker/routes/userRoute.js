const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.post('/user',userController.postUser)



module.exports = router