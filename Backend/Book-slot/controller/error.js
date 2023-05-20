const path = require('path')
const rootDir = require('../helper/path')

const error = (req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', 'notfound.html'))
}

module.exports = error