const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

//root directory
const rootDir = require('./helper/path')

//routers
const navbar = require('./routes/navbar')
const contactus = require('./routes/contactus')
const success = require('./routes/success')

const notfound = require('./controller/error')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(navbar)
app.use(contactus)
app.use(success)


app.use('/',notfound)

app.listen(4000)