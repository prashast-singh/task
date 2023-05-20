const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

//root directory
const rootDir = require('./helper/path')

//routers
const navbar = require('./routes/navbar')
const contactus = require('./routes/contactus')
const success = require('./routes/success')



const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(navbar)
app.use(contactus)
app.use(success)


app.use('/',(req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', 'notfound.html'))
})

app.listen(4000)