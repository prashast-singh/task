const express = require('express')
const router = express.Router()

const resetPassword = require('../controller/resetPasswordController')


router.get('/updatepassword/:resetpasswordid', resetPassword.updatepassword)
router.get('/resetpassword/:id', resetPassword.resetpassword)
router.post('/resetpassword', resetPassword.forgotPassword)






module.exports = router