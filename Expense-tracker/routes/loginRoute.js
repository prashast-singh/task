const express = require('express')
const router = express.Router()
const path = require('path')

const loginController = require('../controller/loginController')

//router.get('./login', loginController.getLogin)
router.post('/login',loginController.postLogin)

/* router.get('/login',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'login.html'))
})
 */

module.exports = router