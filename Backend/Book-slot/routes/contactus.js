const express = require('express')
const path = require('path')
const router = express.Router()

const rootDir = require('../helper/path')




router.get("/contactus", (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "contactus.html"))
})


module.exports = router