const path = require('path')
const rootDir = require('../helper/path')

const navbar = (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "navbar.html"))
}

module.exports = navbar