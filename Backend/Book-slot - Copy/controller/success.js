const path = require('path')
const rootDir = require('../helper/path')

const success = (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "success.html"))
}
module.exports = success

