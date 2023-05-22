const path = require('path')
const rootDir = require('../helper/path')

const contactus = (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "contactus.html"))
}

module.exports = contactus